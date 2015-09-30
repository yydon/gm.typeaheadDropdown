angular.module('gm.typeaheadDropdown', ['gm.typeaheadDropdown.tpl', 'ui.bootstrap'])
.directive('typeaheadDropdown', function() {
	return {
		templateUrl:'templates/typeaheadDropdown.tpl.html',
		scope: {
			model:'=ngModel',
			getOptions:'&options',
			config:'=?',
			required:'=?ngRequired'
		},
		replace:true,
		controller: ['$scope', '$q', function($scope, $q) {
			$scope.config = angular.extend({
				modelLabel:"text",
				optionLabel:"text",
				editable:true,
				required:false
			}, $scope.config);
			
			$q.when($scope.getOptions())
			.then(function(options) {
				$scope.options = options;
			});
			
			$scope.onSelect = function($item, $model, $label) {
				if (!$scope.model) $scope.model = {};
				angular.extend($scope.model, $item);
				$scope.model[$scope.config.modelLabel] = $item[$scope.config.optionLabel];
			}
		}]
	}
})