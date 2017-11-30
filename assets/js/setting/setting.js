define(['jquery','template','ckeditor','datepicker','form','zhcn','region','uploadify','validate'], function($,template,CKEDITOR) {
    
    $.ajax({
        url:"/api/teacher/profile",
        type:'get',
        success:function(data){
            if(data.code==200){
                // console.log(data);
                var html=template('settinginfo',data.result);
                $('.settings').html(html);
            
           //上传头像
            $("#forminfoself").validate({
                description:{
                    required:{
                        required:'请输入完整的信息'
                    }
                }
            })
   

           $('#upfile').uploadify({
               swf:"/assets/libs/uploadify/uploadify.swf",
               uploader:"/api/uploader/avatar",
               fileObjName:'tc_avatar',
               onUploadSuccess:function(_,filename){
                //    console.log(filename);
                   $('#picview').attr('src',JSON.parse(filename).result.path);

               },
               buttonText:'',
               width:'120px',
               height:"120px"
           })
             





               $('.hometown').region({
                   url:"/assets/libs/jquery-region/region.json"
               })



               CKEDITOR.replace( 'tc_introduce' );
            }
        }
    });

    $(".settings").on('submit','.form-horizontal',function(){
      
        for ( var k in CKEDITOR.instances ) {
            CKEDITOR.instances[ k ].updateElement();
        }

       //添加家乡信息

       var tc_hometown=$('select').find(':selected').map(function(){
           return $(this).text();
          
       }).toArray().join('|');

    //    console.log(tc_hometown)
       
    $(this).ajaxSubmit({
        url:"./api/teacher/modify",
        type:"post",
        data:{tc_hometown:tc_hometown},
        success:function(data){
          if(data.code==200){
              alert('保存成功');
          }
        }
    })
         
       return false;

    })




    
});