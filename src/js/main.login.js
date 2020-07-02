require.config({
    paths: {
        jquery: './jquery',
        login: './lib/login'
    },
    shim:{
    }
});


require(['jquery','login'], function($,login) {
    login.render();

    $('#submit').on('click',function () {  
        
        login.login();
    })
});

