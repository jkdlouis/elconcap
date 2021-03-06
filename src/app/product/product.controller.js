(function() {
    angular
        .module('augularWorkplace')
        .controller('ProductController', ProductController);

    function ProductController (){
        var vm = this;
        vm.solidChip = false;
        vm.solidLead = false;
        vm.chipType = false;
        vm.miniature = false;
        vm.snapIn = false;
        vm.specialApp = false;

    vm.galleries = [
            {
                image: 'assets/images/factories/factory-1.jpg',
                alt: 'Elcon Technology Facility'
            },
            {
                image: 'assets/images/factories/factory-2.jpg',
                alt: 'Elcon Technology Facility'
            },
            {
                image: 'assets/images/factories/factory-4.jpg',
                alt: 'Elcon Technology Facility'
            },
            {
                image: 'assets/images/factories/factory-6.jpg',
                alt: 'Elcon Technology Facility'
            },
            {
                image: 'assets/images/factories/factory-8.jpg',
                alt: 'Elcon Technology Facility'
            },
            {
                image: 'assets/images/factories/factory-9.jpg',
                alt: 'Elcon Technology Facility'
            },
            {
                image: 'assets/images/factories/factory-11.jpg',
                alt: 'Elcon Technology Facility'
            },
            {
                image: 'assets/images/factories/factory-12.jpg',
                alt: 'Elcon Technology Facility'
            },
            {
                image: 'assets/images/factories/factory-13.jpg',
                alt: 'Elcon Technology Facility'
            },
            {
                image: 'assets/images/factories/factory-14.jpg',
                alt: 'Elcon Technology Facility'
            },
            {
                image: 'assets/images/factories/factory-15.jpg',
                alt: 'Elcon Technology Facility'
            },
            {
                image: 'assets/images/factories/factory-16.jpg',
                alt: 'Elcon Technology Facility'
            }
        ];
    }
})();
