/**
 * Created by SMITDOSHI on 6/6/18.
 */
var voteApp = angular
    .module("VoteAPP",[])
    .controller("voteController", function ($scope) {
        $scope.totalCount = 0;
        $scope.maleCount = 0;
        $scope.femaleCount=0;
        $scope.malePercent=0;
        $scope.femalePercent=0;

        $scope.maleCountFunc = function(){
            $scope.maleCount++;
            $scope.totalCount++;
            $scope.malePercent=(($scope.maleCount/$scope.totalCount)*100).toFixed(2);

        };

        $scope.femaleCountFunc = function(){
          $scope.femaleCount++;
          $scope.totalCount++;
          $scope.femalePercent=(($scope.femaleCount/$scope.totalCount)*100).toFixed(2);

        };
});