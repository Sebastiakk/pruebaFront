(function() {
  'use strict';

  app.controller('control_detail_video', control_detail_video);

  control_detail_video.$inject = ['service_youtube', '$stateParams', '$state'];

  function control_detail_video(service_youtube, $stateParams, $state) {
    let control = this;
    let servicio = service_youtube;

    control.video = {};
    control.reco = [];
    control.state = true;

    activate();

    // replaza \n por <br>
    control.texto = text => {
      let new_text = text;
      new_text = new_text.replace(/\n/g, '<br>');
      console.clear();
      return new_text;
    };

    // Obtiene los detalles del video y genera un iframe en el div con el id "video"
    function detail_video() {
      let id = $stateParams.cod;
      servicio
        .detail_video(id)
        .then(result => {
          control.video = result.data.items[0];
          $('#video').html(
            `<div class="video-container"><iframe width="853" height="480" src='https://www.youtube.com/embed/${
              control.video.id
            }?rel=0&amp;showinfo=0' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>`
          );
          reco();
        })
        .catch(err => {
          console.log('Error', err);
        });
    }
    // Obtiene los videos recomendados y los guada en array "control.reco"
    function reco() {
      let id = $stateParams.cod;
      servicio
        .reco(id)
        .then(result => {
          control.reco = result.data.items;
          control.state = false;
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
      detail_video();
    }
  }
})();
