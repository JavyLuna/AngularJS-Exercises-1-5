(function () {
    'use strict';

    angular
        .module('bookStore')
        .controller('TabController',TabController);

    TabController.$inject = ['book','nextBook'];
    function TabController(book,nextBook) {
        var $ctrl = this;
        $ctrl.book = book;
        console.log(nextBook);
        $ctrl.nextBook = nextBook;
    }
})();