namespace App {
 let app = angular.module ('App', ['ui.router']);

 app.config ([
   '$stateProvider',
   ($stateProvider: angular.ui.IStateProvider) => {
     $stateProvider
       .state ('home', {
         url: '/',
         template: 'Home page',
         controller: App.HomeController,
        })
        ;
     $stateProvider
         .state ('about', {
           url: '/about',
           template: 'About page',
           controller: App.AboutController,
         })
       ;
     $stateProvider
       .state ('contacts', {
         url: '/contact',
         template: 'Contacts page',
         controller: App.ContactController,
       })
       ;
     $stateProvider
       .state ('calculator', {
         url: '/calculator',
         templateUrl: 'templates/calculator.html',
         controller: App.CalculatorController,
         controllerAs: 'calculatorController'
         })
       ;
   }
 ]);
}
