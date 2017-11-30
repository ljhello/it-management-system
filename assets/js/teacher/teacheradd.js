
define(['jquery','template','form','zhcn','validate'],function($,template){
    // location.search查看url地址的参数
//   alert(location.search.length)
var rctId=/tc_id=(\d+)/;
  var seacher=location.search;
  if(seacher.length>0){
      modifyTeacher();
  }else{
     addTeacher();
  }

//   截取tc_id的正则表达式




  function addTeacher(){
       var html=template('teacherAdd',{
           tc_way:"讲师添加",
           tc_join_value:"添加"
       });
       $("#teacherAddlist").html(html);


       $( '#formajax' ).validate({
		description: {
			required: {
				required: '请填写完整信息'
            },
            requiredName:{
                required: '请输入姓名'
            },
            requiredPass:{
                required: '请输入密码'
            }
		}
	});


       //绑定添加事件

       $("#teacherAddlist").on('submit','#formajax',function(){
            
        //   var formData=$(this).serialize();
        // //   console.log(formdata);
        //     $.ajax({
        //         url:"/api/teacher/add",
        //         type:'post',
        //         data:formData,
        //         success:function(data){
        //           if(data.code==200){
        //             alert('添加成功');
        //             location.pathname='/teacher/list';
        //           }
        //         }
        //     })



           $(this).ajaxSubmit({
               url:'/api/teacher/add',
               type:'post',
               success:function(data){
                   if(data.code==200){
                       alert('form提交success');
                       location.pathname='/teacher/list';

                   }
               }
           })  










           return false;

       })





  };
// 修改信息
  function modifyTeacher(){
      var tc_id=rctId.exec(seacher)[1];
    //   console.log(tc_id);

    

    $.ajax({
        url:"/api/teacher/view",
        type:"post",
        data:{tc_id:tc_id},
        success:function(data){
            // console.log(data);
           if(data.code==200){
               
               data.result.tc_way='讲师编辑';
               data.result.tc_join_value='编辑';
            //    console.log(data.result);

            var html=template('teacherAdd',data.result);
            $("#teacherAddlist").html(html);
            $( '#formajax' ).validate({
                description: {
                    required: {
                        required: '请填写完整信息'
                    },
                    requiredName:{
                        required: '请输入姓名'
                    },
                    requiredPass:{
                        required: '请输入密码'
                    }
                }
            });
            
           }

        }

    })

     
    $("#teacherAddlist").on('submit','#formajax',function(){

        // var formData=$(this).serialize();

        // $.ajax({
        //     url:"/api/teacher/update",
        //     type:'post',
        //     data:formData,
        //     success:function(data){
        //         // console.log(data);
        //        if(data.code==200){
        //            alert('修改成功');
        //            location.pathname='/teacher/list';
        //        }

        //     }
        // })

        $(this).ajaxSubmit({
            url:"/api/teacher/update",
            type:'post',
            success:function(data){
                if(data.code==200){
                    alert('修改success');
                    location.pathname='/teacher/list';
                }
            }
        })


        return false;
    })



  };

 
})