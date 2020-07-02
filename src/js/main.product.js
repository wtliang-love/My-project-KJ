require.config({
    paths: {
        jquery: './jquery',
        bootstrap:'./bootstrap',
        product: './lib/product'
    },
    shim:{
        bootstrap:['jquery']
    }
});


require(['product'], function(product,) {
    product.render(function (id,price,num) {
        $('#shopCar').on('click',function () {
            product.addShopCar(id,price,$('#number').val());
        })
    });


    product.gouwuche();

});