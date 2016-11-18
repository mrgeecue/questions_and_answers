var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider){
$routeProvider
    .when('/index', {
        templateUrl: 'static/partials/home.html',
    })
    .when('/',{
        templateUrl: 'static/partials/questions.html'
    })
    .when('/new_question',{
        templateUrl: '/static/partials/new_question.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

            // QUESTIONFACTORY
app.factory("questionFactory", function(){
    var factory = {};
    var questions = [
        {question: "What is Brendan's favorite ice cream flavor?"},
        {question: "How high can Howard jump?"},
        {question: "What's the time limit at a buffet?"},
        {question: "Best Exercise for flabby arms"},
    ];
    var error = {message:''};
    // 2nd) create the user list to pass to the controller
    factory.index = function(callback){
        callback(questions);
    }

    factory.create= function(question){
        if(question.length <10){
            error.message = "That's not a long enough question. It must be 10 characters long";
            return false;
        }   else {
                questions.push(question);
                console.log('**************')
        }
    };
    factory.delete= function($index){
        questions.splice($index, 1);
    }
    return factory;
});

        // ANSWER FACTORY
app.factory("answerFactory", function(){
    var factory = {};
    var answers = [];

    // 2nd) create the user list to pass to the controller
    factory.index = function(callback){
        callback(questions);
    }

    factory.create= function(answer){
        questions.push(answer);
        console.log('these are the answers')
    }
    factory.delete= function($index){
        questions.splice($index, 1);
    }
    return factory;
});


            // CONTROLLERS
app.controller('HomeController', function($scope) {
    $scope.create = function(){
        nameFactory.create($scope.newName)
        $scope.newName = {};  //this resets our form
    }
});


            // Questions Controller
app.controller('QuestionsListController', ['$scope', 'questionFactory', function($scope, questionFactory) {
    function setQuestions(data){
        $scope.questions = data;
        $scope.newQuestion = {};
    }
    $scope.questions = [];
    // when the controller is loaded, fetch the question list
    questionFactory.index(setQuestions);
    // pass new question into the factory
    $scope.create = function(){
        questionFactory.create($scope.newQuestion)
        $scope.newQuestion = {};  //this resets our form
    }
    // delete question info from the factory
    $scope.delete= function($index){
        questionFactory.delete($index);
    }
}]);

            // ANSWERS CONTROLLER
app.controller('AnswersController', ['$scope', 'answerFactory', function($scope, answerFactory) {
    function setAnswerss(data){
        $scope.answers = data;
        $scope.newAnswer = {};
    }
    $scope.answers = [];
    // when the controller is loaded, fetch the question list
    answerFactory.index(setAnswers);
    // pass new question into the factory
    $scope.create = function(){
        answerFactory.create($scope.newAnswer)
        $scope.newAnswer = {};  //this resets our form
    }
    // delete question info from the factory
    $scope.delete= function($index){
        answerFactory.delete($index);
    }
}]);
