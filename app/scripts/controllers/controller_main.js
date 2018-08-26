(function() {
  'use strict';

  app.controller('control_main', control_main);

  control_main.$inject = ['service_youtube', '$state'];

  function control_main(service_youtube, $state) {
    let control = this;
    let servicio = service_youtube;

    control.reco = [];

    activate();
    //Obtiene los videos recomendados
    function reco(cod) {
      servicio
        .reco(cod, 6)
        .then(result => {
          control.reco = result.data.items;
        })
        .catch(err => {
          console.log('Error', err);
        });
    }
    // Redirecciona hacia el video que quiere ver el usuario
    control.watch_video = dato => {
      $state.go('watch', { cod: dato.id.videoId });
      // Se guarda el id del video para tener en cuanta cual fue el ultimo video visto
      localStorage.cod = dato.id.videoId;
    };

    function activate() {
      reco(localStorage.cod);
    }
  }
})();
