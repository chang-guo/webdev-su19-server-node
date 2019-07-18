let students = require('../students');
let questions = require('../questions');
let answers = require('../answers');

module.exports = {
    findStudentById(id) {
        return students.find(s => s._id === id)
    },

    createStudent(student) {
        students.push(student);
        return student;
    },

    updateStudent(sid, student) {
        let oldStudent = this.findStudentById(sid);
        oldStudent.firstName = student.firstName;
        oldStudent.lastName = student.lastName;
        oldStudent.username = student.username;
        oldStudent.password = student.password;
        oldStudent.gradYear = student.gradYear;
        oldStudent.scholarship = student.scholarship;
        return oldStudent;
    },

    deleteStudent(sid) {
        students = students.filter(s => s._id !== sid);
    },

    createQuestion(question) {
        questions.push(question);
        return question
    },

    updateQuestion(qid, question) {
        let oldQuestion = this.findQuestionById(qid);
        oldQuestion.question = question.question;
        oldQuestion.type = question.type;
        oldQuestion.points = question.points;
        switch (question.type) {
            case "TRUE_FALSE":
                oldQuestion.isTrue = question.isTrue;
                break;
            case "MULTIPLE_CHOICE":
                oldQuestion.choices = question.choices;
                oldQuestion.correct = question.correct;
        }
        return oldQuestion;
    },

    deleteQuestion(qid) {
        questions = questions.filter(q => q._id !== qid);
    },

    answerQuestion(studentId, questionId, answer) {
        let question = this.findQuestionById(questionId);
        if (question.type === "TRUE_FALSE") {
            answers.push({
                _id: answer.id,
                student: studentId,
                question: questionId,
                trueFalseAnswer: answer.answer
            })
        } else {
            answers.push({
                _id: answer.id,
                student: studentId,
                question: questionId,
                multipleChoiceAnswer: answer.answer
            })
        }
    },

    findAllStudents() {
        return students
    },

    findAllQuestions() {
        return questions
    },

    findQuestionById(id) {
        return questions.find(q => q._id === id)
    },

    findAllAnwsers() {
        return answers
    },

    findAnswerById(id) {
        return answers.find(a => a._id === id)
    },

    findAnswersByStudent(studentId) {
        return answers.filter(a => a.student === studentId)
    },

    findAnswersByQuestion(questionId) {
        return answers.filter(a => a.question === questionId)
    },

    findAnswersByStudentAndQuestion(sid, qid) {
        return answers.filter(a => a.question === qid && a.student === sid)
    }
};

