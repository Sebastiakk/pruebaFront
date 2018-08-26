(function() {
  'use strict';

  app.controller('control_search', control_search);

  control_search.$inject = ['service_youtube', '$stateParams'];

  function control_search(service_youtube, $stateParams) {
    let control = this;
    let servicio = service_youtube;

    control.res_busqueda = [];

    activate();
    // Busca los videos por el texto
    function search_video(texto) {
      servicio
        .search_video(texto)
        .then(result => {
          control.res_busqueda = result.data.items;
        })
        .catch(err => {
          console.log('Error', err);
        });
    }

    function activate() {
      let texto = $stateParams.texto;
      search_video(texto);
    }
  }
})();
