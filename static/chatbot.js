questions = [
    "Let's start with your name. What shall I call you?",
    "Where shall we contact you? Please provide your business email-id.",
    "We would like to know more about your work. Please mention your GitHub ID. (e.g. jondoe11)",
    "It's great to be social and part of a community! Let us know your Twitter handle. (e.g. @jondoe)",
    "This job requires past experience. How many years of experience have you had in this industry? (Answer in no. of years - e.g. 2)",
    "Different roles require different skills. Please mention a list of your skills. (Answer in a single message separated by commas - e.g. AI, Marketing, Business Analytics)",
    "How would you describe yourself? Keep it short. (256 letters)",
    "What, according to you, does this job role require? Keep it concise. (256 letters)",
    "What things, ideas or initiatives are you passionate about? (256 letters)",
    "Why do you want this job? Keep it crisp (256 letters)",
    "Great! If everthing works out - from what date would you be available to join? (Format e.g. M-Dd-Yy)"
]
responses = []

function greet() {
    botMessage("Hey! I'm Darwin, and I'm looking forward to know more about you!");
}

function botMessage (msg) {
    chatWindow = document.getElementById('chatwindow');
    dialogueTemplate = document.getElementsByClassName("row mt-2 bot_dialogue")[0];
    // console.log(dialogueTemplate);
    newDialogue = dialogueTemplate.cloneNode(true);
    newDialogue.getElementsByClassName("dialogue bot")[0].innerText = msg.toString();
    chatWindow.appendChild(newDialogue);
}

function userMessage (msg) {
    chatWindow = document.getElementById('chatwindow');
    dialogueTemplate = document.getElementsByClassName("row mt-2 justify-content-end user_dialogue")[0];
    // console.log(dialogueTemplate);
    newDialogue = dialogueTemplate.cloneNode(true);
    newDialogue.getElementsByClassName("dialogue user")[0].innerText = msg.toString();
    chatWindow.appendChild(newDialogue);
    newDialogue.scrollIntoView();
}

function sendMessage () {
    input = document.getElementById("msginput");
    msg = input.value
    if (msg != "") {
        // console.log(msg.toString());
        input.value = "";
        userMessage(msg);
        responses.push(msg.toString());
        if (responses.length > questions.length) {
            postConvo();
        } else {
            botMessage(questions[responses.length-1]);
        }
    }
}

function postConvo () {
    botMessage('Thank you so much for applying! Finally please upload your resume and click on END INTERVIEW to end the interview. It was nice to talk! See you soon!')
    chatWindow = document.getElementById('chatwindow');
    dialogueTemplate = document.getElementsByClassName("row mt-2 user_dialogue")[0];
    // console.log(dialogueTemplate);
    uploadForm = document.createElement('form');
    uploadForm.action = "http://localhost:5000/data/newCandidate"
    uploadForm.method = "POST";
    uploadForm.enctype = "multipart/form-data";
    uploadForm.id = "send-data"
    
    fileInput = document.createElement('input');
    fileInput.id = "resumeFile";
    fileInput.name = "resumeFile";
    fileInput.type = "file";

    jsonInput = document.createElement('input');
    jsonInput.id = "jsonInput";
    jsonInput.name = "jsonInput";
    jsonInput.type = "text";
    jsonInput.value = JSON.stringify({
        "jobid": parseInt(document.getElementById("data").innerText),
        "cname": responses[1],
        "email": responses[2],
        "gitId": responses[3],
        "tweetId": responses[4],
        "yoe": responses[5],
        "jobskills": responses[6],
        "self_desc": responses[7],
        "job_req_what": responses[8],
        "passion": responses[9],
        "job_want_why": responses[10],
        "date_join": responses[11],
    });
    jsonInput.style = "display: none;"

    newDialogue = dialogueTemplate.cloneNode(true);
    newDialogue.getElementsByClassName("dialogue user")[0].innerText = "Upload Resume\n\n";
    uploadForm.appendChild(fileInput);
    uploadForm.appendChild(jsonInput);
    newDialogue.getElementsByClassName("dialogue user")[0].appendChild(uploadForm);
    chatWindow.appendChild(newDialogue);
}

function sendData () {
    document.getElementById("send-data").submit();
}