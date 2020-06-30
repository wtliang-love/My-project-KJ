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

            


            $.ajax({
                type: "get",
                url: `${baseUrl}interface/getall.php`,
                dataType: "json",
                success: function (response) {
                    var tempType = '';
                    response.forEach(elem => {
                    
                        console.log(elem)
                        tempType += 
                        `
                        <div class="col-md-2">
                            <a href="#"><img src="${baseUrl}${JSON.parse(elem.image)[0].src}" alt=""></a>
                            <h4>${elem.shop_name}</h4>
                            <p>${elem.shop_noun}</p>
                            <span>￥${elem.shop_now_price}</span>
                        </div> 
                    `
                    console.log(tempType)
                    
                    });
                    $('#wang').append(tempType);
                }
            });


        }
    }
})