let baseUrl = "http://localhost/My-project-KJ/"

define(['jquery'], function ($) {
    return {
        render: function (callback) {
            let id = location.search.split('=')[1]
            $.ajax({
                type: "get",
                url: `${baseUrl}interface/getitem.php`,
                data:{
                    id:id
                },
                dataType: "json",
                success: function (response) {
                    let tempSrc = `
                    <img src="${baseUrl}${JSON.parse(response.image)[0].src}" alt="">
                    <img src="${baseUrl}${JSON.parse(response.image)[0].src}" alt="">
                    `;

                    let tempNoun = `
                    <h3>${response.shop_name}</h3>
                    <div>${response.shop_noun}</div>
                    <div class="price">
                        <p>
                          ￥${response.shop_now_price}
                          <span>￥${response.shop_price}</span>
                        </p>
                        <a href="javascript:;">
                          <span><i class="glyphicon glyphicon-qrcode"></i>手机购买</span>
                          <img src="../../images/home/img/phoneshop.png" alt="">
                        </a>
                      </div>
                      <div class="addressWrap">
                            <span>配送至:</span>
                            <div class="address-info">
                                <span>北京</span>
                                <span>北京市</span>
                                <span>延庆县</span>
                                <span>珍珠泉乡</span>
                            </div>
                            <div class="choose">
                              <span id="chooseUp" class="glyphicon glyphicon-menu-down"></span>
                                
    
                              <span class="stock">有货</span>
                            </div>
                        </div> 
    
                      <div class="num">
                        <p>数量</p>
                        <div>
                          <button type="button" class="btn btn-default input-group-btn">-</button>
                          <input type="number" class="num-input" id="number" data-id="957" value="1" min="1">
                          <button type="button" class="btn btn-default">+</button>
                        </div>
                        
                      </div>
                      <div class="shopcar">
                        <a class="btn btn-danger" href="javascript:;">立即购买</a>
                        <a class="btn btn-warning" id="shopCar" href="${baseUrl}src/html/shopping.html">加入购物车</a>
                      </div>
                    </div>
                    `

                    $('#pic-gb').append(tempSrc);
                    $('#product_noun').append(tempNoun)

                    callback && callback(response.shop_id,response.shop_now_price)
                }
            });


            // 登陆后用户名
            if(localStorage.getItem('userName')){
              $('.reg a:first').html(`欢迎 ${localStorage.getItem('userName')}`)
              $('.reg a:last').html('退出').on('click',function(){
                  localStorage.setItem('userName','')
                  location.reload();
                  return false;
              })
          }
        },



        addShopCar:function (id,price,num) {
            let shop = localStorage.getItem('shop');

            let product = {
                id: id,
                price: price,
                num: num
            }

            if (shop) { // 存在
                shop = JSON.parse(shop); // 将字符串转成数组
                
                if (shop.some(elm => elm.id == id)) {
                    
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = []; // 不存在新建数组
                shop.push(product); // 放入商品
            }

            localStorage.setItem('shop',JSON.stringify(shop))
        }

    }
})