define(['jquery'], function ($) {
    return {
        render: function () {
            $(function () {
                //使图片居中，无视图片大小
                $('.banner_pic').css({
                    'left': -0.5 * innerWidth,
                    'width': innerWidth,
                    'height': 580
                })
            });


        }
    }
})