define(['jquery', 'template', 'tools','uploadify','Jcrop', 'form'], function ($, template, tools) {

    tools.expandMenu(0);
    tools.setMenu('/course/add');

    var urlcsobj = tools.getSreach();

    $.ajax({
        url: '/api/course/picture',
        type: 'get',
        data: { cs_id: urlcsobj['cs_id'] },
        success: function (data) {
            console.log(data);
            if (data.code == 200) {
                var html = template('piccourse', data.result);
                $('.steps').html(html);

                //图片的上传和裁切
               
                handpicupcq(data.result);
               if(data.result.cs_cover_original){
                   jcropImage();

                


               }
               

            }
        }
    })

   

    function handpicupcq(result) {

       
        $('#btn-upload').uploadify({
            swf: '/uploadify.swf',
            uploader: '/api/uploader/cover',
            fileObjName: 'cs_cover_original',
            buttonClass: 'btn btn-success btn-sm',
            onUploadSuccess: function (_, filename) {
               $('.preview').html('').append(
                  $('<img/>').attr('src',JSON.parse(filename).result.path).attr('crossorigin', 'anonymous')
               );
               $('#cq-btn').prop('disabled',false);
                 jcropImage();

            },
            itemTemplate: '<span></span>',
			buttonText: '选择图片',
			width: '70',
            height: 'auto',
            formData:{
            cs_id:result.cs_id
            },
            onInit: function () {
                $('#btn-upload').css({
                    overflow:'hidden'
                }).find('div').removeClass('uploadify-button');
			}
        })
    }


    function jcropImage(){
        $('.preview img').Jcrop({
            aspectRatio: 2,
           
        },function(){
            var jcrop_api = this;

            var w = jcrop_api.ui.stage.width,
            h = jcrop_api.ui.stage.width / 2,
            x = 0,
            y = (jcrop_api.ui.stage.height - h) / 2;

            jcrop_api.newSelection();
			jcrop_api.setSelect( [ x, y, w, h ] );
  			jcrop_api.initComponent('Thumbnailer', { 
  				width: 240, height: 120, 
  				target: '.thumb' });

        })
    }




})