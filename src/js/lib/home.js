let baseUrl = "http://localhost/My-project-KJ/"

define(['jquery'], function ($) {
    return {
        render: function () {

            // 引入轮播图
            $(function () {
                $('.banner_pic').slider({
                    delay: 2000,
                    viewWidth: innerWidth,
                    viewHeight: 500
                });
                //使轮播图无视文档宽度始终居中
                $('.banner_pic').css('left', -0.5 * innerWidth)
            });

            // 登陆后用户名
            if(localStorage.getItem('userName')){
                $('.login a').html(`欢迎 ${localStorage.getItem('userName')}`)
                $('.reg a').html('退出').on('click',function(){
                    localStorage.setItem('userName','')
                    location.reload();
                    return false;
                })
            }

            

            $.ajax({
                type: "get",
                url: `${baseUrl}interface/getall.php`,
                dataType: "json",
                success: function (response) {
                    console.log(response)
                    var tempType = '';
                    response.forEach(elem => {
                        tempType += 
                        `
                        <div class="col-md-2">
                            <a href="${baseUrl}src/html/product.html?id=${elem.shop_id}"><img src="${baseUrl}${JSON.parse(elem.image)[0].src}" alt=""></a>
                            <h4>${elem.shop_name}</h4>
                            <p>${elem.shop_noun}</p>
                            <span>￥${elem.shop_now_price}</span>
                        </div> 
                    `
                    });
                    $('#dianshi').append(tempType);
                }
            });


        },


        gouwuche:function(){
            $('.shopping_car').append(`<a href="${baseUrl}/src/html/shopping.html"><i class="iconfont icon-icon_gouwuche"></i>购物车(${JSON.parse(localStorage.getItem('shop')).length})</a>`) 
    
        }
    }
})