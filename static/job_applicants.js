function displayCandidateList (result) {
    console.log (result.length);
    allCandy = document.getElementById("all-applicants"); 
    candyTemplate = document.getElementById("this-applicant");
    
    for (i = 0; i < result.length; i++) {
        newCandy = candyTemplate.cloneNode(true);
        newCandy.getElementsByClassName("candy-name")[0].innerText = result[i]['name'];
        newCandy.getElementsByClassName("candy-mail")[0].innerText = result[i]['email'];
        newCandy.getElementsByClassName("candy-score")[0].innerText = (result[i]['score'].toFixed(2)*100).toString() + "%";
        allCandy.appendChild(newCandy);
    }
}

function loadCandidateList () {
    jobId = parseInt(document.getElementById("meta").innerText);
    
    fetch("http://localhost:5000/data/admin/getCandidates/" + jobId.toString(), { method: 'GET' })
    .then(response => response.json())
    .then(result => displayCandidateList(result))
    .catch(error => console.log('error', error));
}