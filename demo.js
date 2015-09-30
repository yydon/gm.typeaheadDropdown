angular.module('demo', ['gm.typeaheadDropdown'])
.controller('DemoCtrl', ['$scope', function($scope) {
	$scope.options = [
		{
			text:"Mary", id:1
		},
		{
			text:"Jane", id:2
		},
		{
			text:"John", id:3
		},
		{
			text:"Fred", id:4
		}
	];
	
	$scope.options2 = [
		{
			title:"The Fellowship of the Ring"
		},
		{
			title:"The Two Towers"
		},
		{
			title:"The Return of the King"
		},
		{
			title:"The Hobbit"
		}
	];
	
	$scope.selectedOption2 = {
		book:"The Hobbit"
	}
	
	$scope.config = {
		modelLabel:'book',
		optionLabel:'title'
	};
}]);