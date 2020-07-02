let baseUrl = "http://localhost/My-project-KJ/"
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
        },

        login:function () {
            let userName = $('.login_mid input:eq(0)').val();
            let password = $('.login_mid input:eq(1)').val();
            if(userName && password){
                $.ajax({
                    type: "post",
                    url: `${baseUrl}interface/login.php`,
                    data: {
                        userName:userName,
                        password:password
                    },
                    dataType: "json",
                    success: function (response) {
                        if(response){
                            localStorage.setItem('userName',response.user_name)
                            alert('登陆成功')
                            location.href = `${baseUrl}src/html/home.html`
                        }else{
                            alert('用户名或密码不正确，请重试')
                        }
                    }
                });
            }
        }
    }
})