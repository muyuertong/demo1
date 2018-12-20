window.onload=function(){
    $('.btn').click(function () {
        $.ajax('/api/getIt',{
            type: 'get',
            success: function (result) {
                alert(result.data + "🐖")
            }
        });
    })
};