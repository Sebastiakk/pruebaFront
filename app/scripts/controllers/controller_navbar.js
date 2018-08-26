(function() {
  'use strict';

  app.controller('control_barra', control_barra);

  control_barra.$inject = ['$state', '$stateParams'];

  function control_barra($state, $stateParams) {
    var control = this;
    control.estado_barra = true;
    // Redirecciona a la vista de busqueda con el texto a buscar
    control.buscar_video = () => {
      $state.go('search', { texto: control.buscar });
    };

    activate();

    function activate() {
      if ($stateParams.texto) {
        control.estado_barra = true;
        control.buscar = $stateParams.texto;
      }
    }
  }
})();
