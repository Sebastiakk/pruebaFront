(function() {
  'use strict';

  app.directive('cardVideo', cardVideo);

  cardVideo.$inject = ['$state'];

  function cardVideo($state) {
    var directive = {
      restrict: 'EA',
      template: template(),
      link: link,
      scope: {
        dato: '='
      }
    };
    return directive;

    function link(scope, element, attrs) {
      scope.ver = () => {
        $state.go('watch', { cod: scope.dato.id.videoId });
        localStorage.cod = scope.dato.id.videoId;
      };
    }

    function template() {
      var html = '';
      html += `<div class="card medium">
                  <div class="card-image">
                      <img ng-src="{{dato.snippet.thumbnails.high.url}}">
                      <span class="card-title">{{dato.snippet.title}}</span>
                  </div>
                  <div class="card-content">
                      <p>{{dato.snippet.description}}</p>
                  </div>
                  <div class="card-action">
                      <a ng-click="ver()" href="">Watch video</a>
                  </div>
              </div>`;
      return html;
    }
  }
})();
