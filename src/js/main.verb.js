require.config({
    paths: {
        jquery: './jquery',
        verb: './lib/verb'
    },
    shim:{
    }
});


require(['jquery','verb'], function($,verb) {
    verb.render();

    $('#submit').on('click',function(){
        verb.submit();
    })
    
});

