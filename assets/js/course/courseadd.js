define(['tools','jquery','validate','form'],function(tools,$){

  tools.expandMenu(0);

  $('#courseadd').validate();

  $('#courseadd').submit(function(){

    $(this).ajaxSubmit({
        url:'/api/course/create',
        type:'post',
        success:function(data){
          if(data.code==200){
              alert('课程添加成功');
              location.href='/course/add_step1?cs_id='+data.result.cs_id;
          }
        }

    })
    return false;
  })
 

})