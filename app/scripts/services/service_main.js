(function() {
  'use strict';

  app.service('service_youtube', service_youtube);

  service_youtube.$inject = ['$http', '$q', 'URL'];
  function service_youtube($http, $q, URL) {
    var control = this;

    control.search_video = search_video;
    control.detail_video = detail_video;
    control.reco = reco;

    function search_video(dato, max = 30) {
      var defered = $q.defer();
      $http
        .get(URL.search + dato + '&maxResults=' + max)
        .then(function(response) {
          defered.resolve(response);
        })
        .catch(function(error) {
          defered.reject(error);
        });
      return defered.promise;
    }

    function reco(dato, max = 30) {
      var defered = $q.defer();
      $http
        .get(URL.reco + dato + '&maxResults=' + max)
        .then(function(response) {
          defered.resolve(response);
        })
        .catch(function(error) {
          defered.reject(error);
        });
      return defered.promise;
    }

    function detail_video(dato) {
      var defered = $q.defer();
      $http
        .get(URL.get + dato)
        .then(function(response) {
          defered.resolve(response);
        })
        .catch(function(error) {
          defered.reject(error);
        });
      return defered.promise;
    }
  }
})();
