(function() {
  'use strict';

  angular
    .module('asset')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
