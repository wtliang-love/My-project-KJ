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

    // 购物车数据
    home.gouwuche();

    // 左侧楼梯特效
    $(window).on('scroll',function(){
        home.louti();
    })

    
    

    
});

