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

        $('.shop_head').on('click',function(){
            $(".shop_content input[checked]").prop('checked',$(".shop_content input[checked]:first").prop('checked'));
            shop.total();
        })
        $('.shop_bottom').on('click',function(){
            $(".shop_content input[checked]").prop('checked',$(".shop_content input[checked]:last").prop('checked'));
            shop.total();
        })
        $('.shop_noun input[checked]').on('click',function(){
            $('#shop_total').html('');
            shop.total();
        })

        
        
    });
    shop.gouwuche();

});