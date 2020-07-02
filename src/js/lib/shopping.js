let baseUrl = "http://localhost/My-project-KJ/"

define(['jquery'], function ($) {
    return {
        render: function (callback) {

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




            let shop = JSON.parse(localStorage.getItem('shop'));
            if(shop){
                let idlist = shop.map(elm => elm.id).join();
                $.ajax({
                    type: "post",
                    url: `${baseUrl}interface/shopping.php`,
                    data: {
                        idlist: idlist
                    },
                    dataType: "json",
                    success: function (response) {

                        response.forEach(response => {
                            let src = JSON.parse(response.image)[0].src
                            let arr = shop.filter(val => val.id == response.shop_id);
                            let tempSrc = `
                            <ul>
                                <li><input type="checkbox" checked="true" value="${response.shop_now_price * arr[0].num}"></li>
                                <li>
                                    <img src="${baseUrl}${src}" alt="">
                                    <p>
                                        <span>${response.shop_name}</span>
                                        <span>${response.shop_name}</span>
                                        <span>${response.shop_noun}</span>
                                    </p>
                                </li>
                                <li>${response.shop_now_price}</li>
                                <li><input type="number" id="shop_num" value="${arr[0].num}"></li>
                                <li class="total">${response.shop_now_price * arr[0].num}</li>
                                <li>
                                    <a href="${baseUrl}src/html/shopping.html" id="shopDel${response.shop_id}">删除</a>
                                    <a href="#" id="shopMovf${response.shop_id}">移到收藏夹</a>
                                </li>
                            </ul>
                            `
                            $('#shop_noun').append(tempSrc);
                        });

                        
                        
                        callback && callback()
                    }
                });
            }


            // 登陆后用户名
            if(localStorage.getItem('userName')){
                $('.login a').html(`欢迎 ${localStorage.getItem('userName')}`)
                $('.reg a').html('退出').on('click',function(){
                    localStorage.setItem('userName','')
                    location.reload();
                    return false;
                })
            }
            
        },
        delete: function (idStr) {
            let id = idStr.slice(7, 8)
            let shop = JSON.parse(localStorage.getItem('shop'));

            shop = JSON.stringify(shop.filter(function (elem) {
                if (elem.id != id) {
                    return elem;
                }
            }))

            localStorage.setItem('shop', shop)

        },



        gouwuche: function () {
            $('.shopping_car').append(`<a href="#"><i class="iconfont icon-icon_gouwuche"></i>购物车(${JSON.parse(localStorage.getItem('shop')).length})</a>`)

        },



        total: function () {
            let total = 0;
            $.each($(".shop_noun input[checked]"), (i, elem) => {
                if($(elem).prop('checked')){
                    total = total + Number($(elem).val())
                }
                
            })
            $('#shop_total').html(`￥${total}`);
            
        }
    }
})