/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('asset')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('environment',
	{
		host:'http://10.115.19.223:8091'
	})
})();
