
console.log($.cookie)
var php_sess_id = $.cookie('PHPSESSID');

// console.log(php_sess_id);
// console.log(location);
if (!php_sess_id && location.pathname != '/login') {
    location.pathname = '/login';
}

// var userinfo = $.cookie('userInfo');

// var userinfoobj = JSON.parse(userinfo || '{}');


// var format = '<div class="avatar img-circle">'+
//              '<img src="'+(userinfoobj.tc_avatar|| '/assets/images/default.png')+'">'+
//              '</div>'+
//              '<h4>'+(userinfoobj.tc_name || '匿名用户')+'</h4>';

//              $( '.aside .profile' ).html( format );      

