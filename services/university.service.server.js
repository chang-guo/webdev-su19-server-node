module.exports = function (app) {
    let universityDao = require('../data/daos/university.dao.server');

    function createStudent(req, res) {
        res.send(universityDao.createStudent(req.body.student));
    }
    function updateStudent(req, res) {
        res.send(universityDao.updateStudent(req.params['sid'], req.body.student));
    }

    function deleteStudent(req, res) {
        res.send(universityDao.deleteStudent(req.params['sid']));
    }

    function findAllStudents(req, res) {
        res.send(universityDao.findAllStudents())
    }

    function findStudentById(req, res) {
        res.send(universityDao.findStudentById(req.params['sid']))
    }

    function findAllQuestions(req, res) {
        res.send(universityDao.findAllQuestions())
    }

    function findQuestionById(req, res) {
        res.send(universityDao.findQuestionById(req.params['qid']))
    }

    function findAllAnwsers(req, res) {
        res.send(universityDao.findAllAnwsers())
    }

    function findAnswerById(req, res) {
        res.send(universityDao.findAnswerById(req.params['aid']))
    }


    app.post("/api/students", createStudent);
    app.get("/api/students", findAllStudents);
    app.get("/api/students/:sid", findStudentById);
    app.put("/api/students/:sid", updateStudent);
    app.delete("/api/students/:sid", deleteStudent);

    app.get("/api/questions", findAllQuestions);
    app.get("/api/questions/:qid", findQuestionById);
    app.get("/api/answers", findAllAnwsers);
    app.get("/api/answers/:aid", findAnswerById);
};
