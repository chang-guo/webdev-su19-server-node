module.exports = function (app) {
    let universityDao = require('../data/daos/university.dao.server');

    function createStudent(req, res) {
        res.send(universityDao.createStudent(req.body))
    }

    function updateStudent(req, res) {
        res.send(universityDao.updateStudent(req.params['sid'], req.body))
    }

    function deleteStudent(req, res) {
        res.send(universityDao.deleteStudent(req.params['sid']))
    }

    function findAllStudents(req, res) {
        res.send(universityDao.findAllStudents())
    }

    function findStudentById(req, res) {
        res.send(universityDao.findStudentById(req.params['sid']))
    }

    function createQuestion(req, res) {
        res.send(universityDao.createQuestion(req.body))
    }

    function findAllQuestions(req, res) {
        res.send(universityDao.findAllQuestions())
    }

    function findQuestionById(req, res) {
        res.send(universityDao.findQuestionById(req.params['qid']))
    }

    function updateQuestion(req, res) {
        res.send(universityDao.updateQuestion(req.params['qid'], req.body))
    }

    function deleteQuestion(req, res) {
        res.send(universityDao.deleteQuestion(req.params['qid']))
    }

    function studentAnswerQuestion(req, res) {
        res.send(universityDao.answerQuestion(req.params['sid'], req.params['qid'], req.body))
    }

    function findAllAnswers(req, res) {
        res.send(universityDao.findAllAnwsers())
    }

    function findAnswerById(req, res) {
        res.send(universityDao.findAnswerById(req.params['aid']))
    }

    function getAllAnswersForQuestion(req, res) {
        res.send(universityDao.findAnswersByQuestion(req.params['qid']))
    }

    function getAllAnswersForStudent(req, res) {
        res.send(universityDao.findAnswersByStudent(req.params['sid']))
    }

    function getAnswersForStudentAndQuestion(req, res) {
        res.send(universityDao.findAnswersByStudentAndQuestion(req.params['sid'], req.params['qid']))
    }

    app.post("/api/student", createStudent);
    app.get("/api/student", findAllStudents);
    app.get("/api/student/:sid", findStudentById);
    app.put("/api/student/:sid", updateStudent);
    app.delete("/api/student/:sid", deleteStudent);

    app.post("/api/question", createQuestion);
    app.get("/api/question", findAllQuestions);
    app.get("/api/question/:qid", findQuestionById);
    app.put("/api/question/:qid", updateQuestion);
    app.delete("/api/question/:qid", deleteQuestion);

    app.post("/api/student/:sid/question/:qid/answer", studentAnswerQuestion);
    app.get("/api/answer", findAllAnswers);
    app.get("/api/answer/:aid", findAnswerById);
    app.get("/api/question/:qid/answer", getAllAnswersForQuestion);
    app.get("/api/student/:sid/answer", getAllAnswersForStudent);
    app.get("/api/student/:sid/question/:qid/answer", getAnswersForStudentAndQuestion);
    app.get("/api/question/:qid/student/:sid/answer", getAnswersForStudentAndQuestion);

};
