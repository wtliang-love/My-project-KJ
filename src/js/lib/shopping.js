let baseUrl = "http://localhost/My-project-KJ/"

define(['jquery'], function ($) {
    return {
        render: function () {
            
            $.ajax({
                type: "get",
                url: `${baseUrl}interface/getitem.php`,
                data: {
                    id: id
                },
                dataType: "json",
                success: function (response) {

                }
            });


        }
    }
})