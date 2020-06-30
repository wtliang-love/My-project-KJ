require.config({
    paths: {
        jquery: './jquery',
        login: './lib/login'
    },
    shim:{
    }
});


require(['login'], function(login) {
    login.render();
});

