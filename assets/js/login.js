


define(['jquery','cookie'],function($){


    $('#formid').on('submit',function(){
    
        
               var formdata=$(this).serialize();
        
               $.ajax({
                   url:'/api/login',
                   type:"post",
                   data:formdata,
                   success:function(data){
                       console.log(data);
                       if(data.code==200){
                           $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                           location.pathname="/";
                       }
                   }
               })
        
                return false;
        
            })



})