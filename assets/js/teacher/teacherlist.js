define(['jquery','template','bootstrap'],function($,template){

     $.ajax({
         url:"/api/teacher",
         type:"get",
         success:function(data){
          // console.log(data);
          var obj={}
          obj['list']=data.result;
        //   console.log(list);
          var html=template('teacherlist',obj);
          // console.log(html);
          $(".tbody").html(html);
         }
     })

// 过滤器

var rhometown = /\|/g;
template.defaults.imports.formatHomeTown=function(hometown){
      return hometown.replace(rhometown,' ');
}


  $('.table').on('click','.showinfo',function(){
     var tc_id= $(this).parent('td').attr('data-tc-id') ;
      
     $.ajax({
       url:"/api/teacher/view",
       type:"get",
       data:{tc_id:tc_id},
       success:function(data){
         if(data.code==200){
           var html=template("personnalinfo",data.result);
           
            $('.tbodyinfo').html(html);
         }
       }
     })

      

  })

  // 注销和启用的切换
    var statusvalue=['启用','注销'];
  $('.table').on('click','.status',function(){
    var tc_id= $(this).parent('td').attr('data-tc-id') ;
    var tc_status=$(this).attr('data-tc-status');
       var that=this;
    $.ajax({
      url:"/api/teacher/handle",
      type:'post',
      data:{
        tc_id:tc_id,
        tc_status:tc_status
      },
      success:function(data){
        if(data.code==200){
          // console.log( $(that).attr('data-tc-status'))
          $(that).attr('data-tc-status',data.result.tc_status).text(statusvalue[data.result.tc_status]);
           
        }
      }
    })




  })







})



