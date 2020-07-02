let baseUrl = "http://localhost/My-project-KJ/"

define(['jquery'], function ($) {
    return {
        render: function () {
            $(function(){
                //使图片居中，无视图片大小
                $('.banner_pic').css({
                    'left': -0.5 * innerWidth,
                    'width': innerWidth,
                    'height': 580
                })
            })
        },

        submit:function(){
            let userName = $('.login_mid input:first').val();
            let password = $('.login_mid input:eq(1)').val()
            let repassword = $('.login_mid input:eq(2)').val();
            if(!repassword) {
                alert('请输入确认密码');
                return;
            }
            if(userName && password){
                if(password !== repassword) {
                    alert('两次输入的密码不相同')
                    $('.login_mid input:eq(2)').val('');
                    return;
                }
                $.ajax({
                    type: "post",
                    url: `${baseUrl}interface/verb.php`,
                    data: {
                        userName:$('.login_mid input:first').val(),
                        password:$('.login_mid input:eq(1)').val()
                    },
                    success: function (response) {
                        alert('注册成功');
                        location.href = (`${baseUrl}src/html/login.html`)
                    }
                });
            }else{
                alert('请补全信息')
            }
            
            

        }
    }
})