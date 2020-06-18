import ibm_db
import ibm_db_dbi
import datetime
from k3y5 import DB2_DB, DB2_HOSTNAME, DB2_PWD, DB2_UID

dsn = "DATABASE=" + DB2_DB + ";HOSTNAME=" + DB2_HOSTNAME + ";PORT=50000;PROTOCOL=TCPIP;" + "UID=" + DB2_UID  + ";PWD=" + DB2_PWD + ";"

def add_candidate(newCandy):
    # distanceFunction
    return None
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

        q1 = "INSERT INTO JOBS_RAW (JOBID, JOBROLE, JOBLOC, JOBDESC, JOBYOE, JOBYOE_MUL, JOBSKILLS, JOBSKILLS_MUL, GITID, GIT_MUL, TWEETID, TWEET_MUL, SELF_DESC, SELF_DESC_MUL, JOB_WANT_WHY, JOB_WANT_WHY_MUL, JOB_REQ_WHAT, JOB_REQ_WHAT_MUL, PASSION, PASSION_MUL, DATE_JOIN, DATE_JOIN_MUL)"
        q1 = q1 + " VALUES ({0}, '{1}', '{2}', '{3}', {4}, {5}, '{6}', {7}, '{8}', {9}, '{10}', {11}, '{12}', {13}, '{14}', {15}, '{16}', {17}, '{18}', {19}, '{20}', {21});".format(
            jobCount+1,
            jobData['jobrole'],
            jobData['location'],
            jobData['description'],
            jobData['yoe'],
            jobData['yoe_mul'],            
            jobData['jobskills'],
            jobData['jobskills_mul'],
            jobData['gitId'],
            jobData['gitId_mul'],
            jobData['tweetId'],
            jobData['tweetId_mul'],
            jobData['self_desc'],
            jobData['self_desc_mul'],
            jobData['job_want_why'],
            jobData['job_want_why_mul'],
            jobData['job_req_what'],
            jobData['job_req_what_mul'],
            jobData['passion'],
            jobData['passion_mul'],
            datetime.datetime.strptime(jobData['date_join'], '%m-%d-%y'),
            jobData['date_join_mul']
        )
        # print (q1)
        cursor.execute(q1)
        cursor.execute("SELECT * FROM JOBS_RAW;")
        for r in cursor.fetchall():
            print(r)
    except:
        print ("JOBS_RAW Query Error!")
        ibm_db.close(ibm_db_conn)
        print ("connection closed")
        return False

    try:
        q1 = "CREATE TABLE JOB_" + str(jobCount+1)
        q1 = q1 + " (CANDY_ID INT, CNAME VARCHAR(50), EMAIL VARCHAR(30), GITID VARCHAR(30), TWEETSCORE VARCHAR(30), YOE INT, SKILLS VARCHAR(128), SELF_DESC VARCHAR(256), JOB_WANT_WHY VARCHAR(256), JOB_REQ_WHAT VARCHAR(256), PASSION VARCHAR(256), DATE_JOIN VARCHAR(256), OVERALL_SCORE DECIMAL);"
        cursor.execute(q1)
        cursor.execute("SELECT * FROM JOB_" + str(jobCount+1) + ";")
        for r in cursor.fetchall():
            print(r)
    except:
        print ("JOB_" + str(jobCount+1) + " Query Error!")
        ibm_db.close(ibm_db_conn)
        print ("connection closed")
        return False
    ibm_db.close(ibm_db_conn)
    print ('job added succesfully!')
    print ("connection closed")
    return jobCount+1


# add_candidate({
    # "jobid": "1",
    # "cname": "Mihir Singh",
    # "email": "mihirs16@gmail.com",
    # "gitId": "mihirs16",
    # "tweetId": "@cached_cadet",
    # "yoe": 2,
    # "skills": "AI, Data Science, Frontend",
    # "self_desc": "Highly interested in unlocking answers through Data and Stats for questions in fields like Electronics, Robotics Healthcare, Media and Sports. I am currently learning and working in the field of Natural Language Processing and Deep Learning.",
    # "job_want_why": "Well, I believe Blueprint can help me develop my skills and offer me a fair paygrade for all my work",
    # "job_req_what": "I think I will be assigned to a team that develops software and I will handle the frontend.",
    # "passion": "I am passionate about my technology and the web.",
    # "date_join": datetime.datetime(2020, 6, 17),
    # "agree_data": 1,
# })

add_job({
    'jobrole': "BACKEND DEVELOPER",
    'location': "Delhi, India",
    'description': "The job will have the require the recruit to work his/her way through complex infrastructure problems and build scalable and robust web applications.",
    'yoe': 2,
    'jobskills': "AI, Data Science, NoSQL",
    'gitId': "mihirs16",
    'tweetId': "@cached_cadet",
    'self_desc': "Highly interested in unlocking answers through Data and Stats for questions in fields like Electronics, Robotics Healthcare, Media and Sports. I am currently learning and working in the field of Natural Language Processing and Deep Learning.",
    'job_want_why': "Well, I believe Blueprint can help me develop my skills and offer me a fair paygrade for all my work",
    'job_req_what': "I think I will be assigned to a team that develops software and I will handle the frontend.",
    'passion': "I am passionate about my technology and the web.",
    'date_join': "6-19-20",
    'yoe_mul': 0.5,
    'jobskills_mul': 0.5,
    'gitId_mul': 0.5,
    'tweetId_mul': 0.5,
    'self_desc_mul': 0.5,
    'job_want_why_mul': 0.5,
    'job_req_what_mul': 0.5,
    'passion_mul': 0.5,
    'date_join_mul': 0.5
})

# print(get_candidate(1))
# print(get_job(1))