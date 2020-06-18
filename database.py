import ibm_db
import ibm_db_dbi
import datetime
from k3y5 import DB2_DB, DB2_HOSTNAME, DB2_PWD, DB2_UID

dsn = "DATABASE=" + DB2_DB + ";HOSTNAME=" + DB2_HOSTNAME + ";PORT=50000;PROTOCOL=TCPIP;" + "UID=" + DB2_UID  + ";PWD=" + DB2_PWD + ";"

def add_candidate(newCandy):
    try:
        ibm_db_conn = ibm_db.connect(dsn, '', '')
        conn = ibm_db_dbi.Connection(ibm_db_conn)
        cursor = conn.cursor()
        print ("Connected to {0}".format(DB2_DB))
    except:
        print ("Couldn't Connect to Database")
        return False

    try:
        cursor.execute("SELECT count(*) FROM CANDIDATE_RAW;")
        candyCount = int(cursor.fetchall()[0][0])
        print("No. of current candidates: ", candyCount)

        q1 = "INSERT INTO CANDIDATE_RAW (CANDY_ID, CNAME, EMAIL, GITID, TWEETID, YOE, SKILLS, SELF_DESC, JOB_WANT_WHY, JOB_REQ_WHAT, PASSION, SALARY, DATE_JOIN, AGREE_DATA)"
        q1 = q1 + " VALUES ({0}, '{1}', '{2}', '{3}', '{4}', {5}, '{6}', '{7}', '{8}', '{9}', '{10}', {11}, '{12}', '{13}');".format(
            candyCount+1,
            newCandy['cname'],
            newCandy['email'],
            newCandy['gitId'],
            newCandy['tweetId'],
            newCandy['yoe'],
            newCandy['skills'],
            newCandy['self_desc'],
            newCandy['job_want_why'],
            newCandy['job_req_what'],
            newCandy['passion'],
            newCandy['salary'],
            datetime.datetime.strptime(newCandy['date_join'], '%m-%d-%y'),
            newCandy['agree_data'], 
        )
        # print (q1)
        cursor.execute(q1)
        cursor.execute("SELECT * FROM CANDIDATE_RAW;")
        for r in cursor.fetchall():
            print(r)
    except:
        print ("Query Error!")
        return False

    ibm_db.close(ibm_db_conn)
    print ("connection closed")
    return candyCount+1

def add_job(jobData):
    try:
        ibm_db_conn = ibm_db.connect(dsn, '', '')
        conn = ibm_db_dbi.Connection(ibm_db_conn)
        cursor = conn.cursor()
        print ("Connected to {0}".format(DB2_DB))
    except:
        print ("Couldn't Connect to Database")
        return False

    try:
        cursor.execute("SELECT count(*) FROM JOBS_RAW;")
        jobCount = int(cursor.fetchall()[0][0])
        print("No. of current Job Postings: ", jobCount)

        q1 = "INSERT INTO JOBS_RAW (JOBID, JOBROLE, JOBLOC, JOBDESC, JOBYOE, JOBSKILLS)"
        q1 = q1 + " VALUES ({0}, '{1}', '{2}', '{3}', {4}, '{5}');".format(
            jobCount+1,
            jobData['jobrole'],
            jobData['location'],
            jobData['description'],
            jobData['yoe'],
            jobData['jobskills']
        )
        # print (q1)
        cursor.execute(q1)
        cursor.execute("SELECT * FROM JOBS_RAW;")
        for r in cursor.fetchall():
            print(r)
    except:
        print ("Query Error!")
        return False

    ibm_db.close(ibm_db_conn)
    print ("connection closed")
    return jobCount+1

def get_candidate(candy_id):
    try:
        ibm_db_conn = ibm_db.connect(dsn, '', '')
        conn = ibm_db_dbi.Connection(ibm_db_conn)
        cursor = conn.cursor()
        print ("Connected to {0}".format(DB2_DB))
    except:
        print ("Couldn't Connect to Database")
        return False

    try:
        q1 = "SELECT * FROM CANDIDATE_RAW"
        q1 = q1 + " WHERE CANDY_ID = {0};".format(candy_id)
        cursor.execute(q1)
        candyData = cursor.fetchall()
        if len(candyData):
            candyData = candyData[0]
        else:
            print("Not Found in {0}".format(DB2_DB))
            return None
    except:
        print ("Query Error!")
        return False

    ibm_db.close(ibm_db_conn)
    print ("connection closed")
    return {
        "cname": candyData[1],
        "email": candyData[2],
        "gitId": candyData[3],
        "tweetId": candyData[4],
        "yoe": candyData[5],
        "skills": candyData[6],
        "self_desc": candyData[7],
        "job_want_why": candyData[8],
        "job_req_what": candyData[9],
        "passion": candyData[10],
        "salary": candyData[11],
        "date_join": candyData[12],
        "agree_data": candyData[13],
    } 

def get_job(job_id):
    try:
        ibm_db_conn = ibm_db.connect(dsn, '', '')
        conn = ibm_db_dbi.Connection(ibm_db_conn)
        cursor = conn.cursor()
        print ("Connected to {0}".format(DB2_DB))
    except:
        print ("Couldn't Connect to Database")
        return False

    try:
        q1 = "SELECT * FROM JOBS_RAW"
        q1 = q1 + " WHERE JOBID = {0};".format(job_id)
        cursor.execute(q1)
        jobData = cursor.fetchall()
        if len(jobData):
            jobData = jobData[0]
        else:
            print("Not Found in {0}".format(DB2_DB))
            return None
    except:
        print ("Query Error!")
        return False

    ibm_db.close(ibm_db_conn)
    print ("connection closed")
    return {
        "job_id": jobData[0],
        "jobrole": jobData[1],
        "location": jobData[2],
        "description": jobData[3],
        "yoe": jobData[4],
        "jobskills": jobData[5].split(", ")
    } 
# add_candidate({
    # "cname": "Mihir Singh",
    # "email": "mihirs16@gmail.com",
    # "gitId": "mihirs16",
    # "tweetId": "@cached_cadet",
    # "yoe": 2,
    # "skills": "Python, JavaScript, C++",
    # "self_desc": "Highly interested in unlocking answers through Data and Stats for questions in fields like Electronics, Robotics Healthcare, Media and Sports. I am currently learning and working in the field of Natural Language Processing and Deep Learning.",
    # "job_want_why": "Well, I believe Blueprint can help me develop my skills and offer me a fair paygrade for all my work",
    # "job_req_what": "I think I will be assigned to a team that develops software and I will handle the frontend.",
    # "passion": "I am passionate about my technology and the web.",
    # "salary": 0,
    # "date_join": datetime.datetime(2020, 6, 17),
    # "agree_data": 1,
# })

# add_job({
#     "jobrole": "BACKEND DEVELOPER",
#     "location": "Delhi, India",
#     "description": "The job will have the require the recruit to work his/her way through complex infrastructure problems and build scalable and robust web applications.",
#     "yoe": 5,
#     "jobskills": "Python, JavaScript, C++"
# })

# print(get_candidate(1))
# print(get_job(1))