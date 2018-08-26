(function() {
  'use strict';

  app.directive('spinn', spinn);

  spinn.$inject = [];

  function spinn() {
    var directive = {
      restrict: 'E',
      template: template(),
      link: link,
      scope: {
        state: '='
      }
    };
    return directive;

    function link(scope, element, attrs) {
      if (!scope.state) {
        scope.state = false;
      }
    }

    function template() {
      var html = '';
      html +=
        '<div style="margin:200px" ng-if="state">' +
        '<center>' +
        '<div class="sk-wave">' +
        '<div class="sk-rect sk-rect1" style="margin: 1px" ></div>' +
        '<div class="sk-rect sk-rect2" style="margin: 1px" ></div>' +
        '<div class="sk-rect sk-rect3" style="margin: 1px" ></div>' +
        '<div class="sk-rect sk-rect4" style="margin: 1px" ></div>' +
        '<div class="sk-rect sk-rect5" style="margin: 1px" ></div>' +
        '<h5>Loading...</h5>' +
        '</div>' +
        '</center>' +
        '</div>';

      return html;
    }
  }
})();
