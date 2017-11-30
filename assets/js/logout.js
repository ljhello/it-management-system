define(['jquery'],function($){

    $(".btnout").click(function(){
        $.ajax({
            url:'/api/logout',
            type:"post",
            success:function(info){
             if(info.code==200){
                 location.pathname='/login';
             }

            }
        })
       
    })
})