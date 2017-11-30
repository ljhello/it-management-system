define(['tools','jquery','template','ckeditor','form'],function(tools,$,template,CKEDITOR){

   tools.expandMenu(0);
  
   tools.setMenu('/course/add');

    var urlcsobj=tools.getSreach();
    // console.log(urlcsobj);
    
    $.ajax({
        url:'/api/course/basic',
        type:'get',
        data:{cs_id:urlcsobj['cs_id']},
        success:function(data){
          if(data.code==200){
              // console.log(data);
            var html=template('coursestep1',data.result);
            $('.steps').html(html);
            CKEDITOR.replace('coursedes');
          }
        }
    });

    $('.steps').on('change','#coursefl',function(){
      // alert(1);
      $.ajax({
        url:"/api/category/child",
        type:'get',
        data:{cg_id:this.value},
        success:function(data){
          // console.log(data);
          if(data.code==200){
            var res=data.result.map(function(item){
                return '<option value="'+item.cg_id+'">'+item.cg_name+'</option>';
            })
            res.unshift('<option value="">请选择</option>');
            $('#sonoption').html(res.join(''));
          }
        }
      })

    });

    $('.steps').on('submit','#coursejbinfo',function(){
      for ( var k in CKEDITOR.instances ) {
        CKEDITOR.instances[ k ].updateElement();
      }
      
      // $(this).ajaxSubmit({
      //   url:'/api/course/update/basic',
      //   type:'post',
      //   success:function(data){
      //      console.log(data);
      //   }
      // })

      $( this ).ajaxSubmit({
        url: '/api/course/update/basic',
        type: 'post',
        success: function ( info ) {
          if ( info.code == 200 ) {
            // console.log( info );
            location.href = '/course/add_step2?cs_id=' + info.result.cs_id;
          } 
        }
      });


      return false;

    })

    


})