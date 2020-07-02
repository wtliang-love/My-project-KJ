require.config({
    paths: {
        jquery: './jquery',
        shop: './lib/shopping'
    },
    shim:{
    }
});


require(['jquery','shop'], function($,shop) {
    shop.render(function(){

        shop.total();

        $('#shop_noun').on('click',function(e){
            if(typeof $(e.target).attr('id') == 'string'){
                if($(e.target).attr('id').slice(0,7) == 'shopDel'){
                    shop.delete($(e.target).attr('id'));
                }
            }
        })

        // $('.shop_content').on('click',function(){
        //     $(".shop_content input[checked]").prop('checked',$(".shop_content input[checked]:first").prop('checked'));
        // })

        
        
    });
    shop.gouwuche();

});