require.config({
    paths: {
        jquery: './jquery',
        shop: './lib/shopping'
    },
    shim:{
    }
});


require(['jquery','shop'], function($,shop) {
    shop.render();


});