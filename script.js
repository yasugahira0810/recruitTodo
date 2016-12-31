angular.module('ToDo', [])
    .controller('TodoController', TodoController)
    .service('todoService', TodoService)
    .filter('customFilter', CustomFilter);
