expander.directive('expander',function(dateFilter){
    console.log(dateFilter(new Date(),'M/d/yy h:mm:ss a'));
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : {
            title : '=expanderTitle' 
        },
        template : '<div>'
                 + '<div class="title" ng-click="toggle()">{{title}}</div>'
                 + '<div class="body" ng-show="showMe" ng-transclude></div>'
                 + '</div>',
        link: function(scope, element, attr){
            scope.title = "test";
            scope.showMe = false;
            scope.toggle = function(){
                scope.showMe = !scope.showMe;
            }
        }
    }
})
