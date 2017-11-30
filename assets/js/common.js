

define(['jquery','template','Nprogress','tools','cookie'],function($,template,Nprogress,tools){

    $('.loading').hide();

   $('.aside a + ul').prev().click(function(){
       $(this).next().toggle();
   })



 $(document).ajaxStart(function(){
     $('.loading').show();
    
    Nprogress.start();
 })
$(document).ajaxStop(function(){
    $('.loading').fadeOut(500);
    Nprogress.done();
})

 


    var php_sess_id = $.cookie('PHPSESSID');
    
    // console.log(php_sess_id);
    // console.log(location);
    if (!php_sess_id && location.pathname != '/login') {
    
        location.pathname = '/login';
    }
    
    
    
    if(location.pathname != '/login'){
    
        var userinfo = $.cookie('userInfo');
        
        var userinfoobj = JSON.parse(userinfo || '{}');
        
        
        var format = template('userinfotem',userinfoobj);
        
            $( '.aside .profile' ).html( format );  
    
    }

 
 
    
   tools.setMenu();


})



