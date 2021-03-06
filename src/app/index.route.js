(function() {
  'use strict';

  angular
    .module('augularWorkplace')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

        .state('product', {
            url: '/product',
            templateUrl: 'app/product/product.html',
            controller: 'ProductController',
            controllerAs: 'product'
        })

        .state('galleries', {
            url: '/galleries',
            templateUrl: 'app/galleries/galleries.html',
            controller: 'GalleriesController',
            controllerAs: 'galleries'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'app/contact/contact.html',
            controller: 'ContactController'
        })

        .state('product-finder', {
            url: '/product/product-finder',
            templateUrl: 'app/product/product-finder/product-finder.html',
            controller: 'SearchController',
            controllerAs: 'search'
        })

         .state('solid-chip', {
            url: '/product/solid-chip',
            templateUrl: 'app/product/solid-chip/solid-chip.html',
            controller: 'ProductController',
             controllerAs: 'product'
        })

        .state('solid-lead', {
            url: '/product/solid-lead',
            templateUrl: 'app/product/solid-lead/solid-lead.html',
            controller: 'ProductController',
            controllerAs: 'product'
        })

        .state('chip-type', {
            url: '/product/chip-type',
            templateUrl: 'app/product/chip-type/chip-type.html',
            controller: 'ProductController',
            controllerAs: 'product'
        })

        .state('high-rip', {
            url: '/product/high-rip',
            templateUrl: 'app/product/high-rip/high-rip.html',
            controller: 'ProductController',
            controllerAs: 'product'
        })

        .state('miniature', {
            url: '/product/miniature',
            templateUrl: 'app/product/miniature/miniature.html',
            controller: 'ProductController',
            controllerAs: 'product'
        })

        .state('snap-in', {
            url: '/product/snap-in',
            templateUrl: 'app/product/snap-in/snap-in.html',
            controller: 'ProductController',
            controllerAs: 'product'
        })

        .state('special-app', {
            url: '/product/special-app',
            templateUrl: 'app/product/special-app/special-app.html',
            controller: 'ProductController',
            controllerAs: 'product'
        });


    $urlRouterProvider.otherwise('/');
  }

})();
