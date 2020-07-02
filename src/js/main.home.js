require.config({
    paths: {
        jquery: './jquery',
        slider:'./lunbo/jquery.slider',
        home: './lib/home'
    },
    shim:{
        slider:['jquery']
    }
});

require(['slider'], function(slider) {
    // slider.render()
});

require(['home'], function(home) {
    
    home.render();

    home.gouwuche();
});

