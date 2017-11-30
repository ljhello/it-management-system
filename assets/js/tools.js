define(['jquery'],function($){
//    alert(1);
    var setMenu=function(urlpath){
        
        var pathname=urlpath || location.pathname;
        $('.navs li a').toArray().filter(e=>{
            return e.pathname==pathname;
        }).forEach(e=>{
          $(e).addClass('active');
        })
    }

    var expandMenu=function(i){
        // alert(1);
        $($('.aside a + ul')[i]).show();
    }

    var getSreach=function(){
        var tmp={};
        search=location.search;
        // console.log(search);
        if(search.length==0){
            return tmp;
        }
        search.slice(1).split('&').forEach(e=>{
            var kv=e.split('=');
            tmp[kv[0]]=kv[1];
        });
        return tmp;
    }

    return {
        setMenu:setMenu,
        expandMenu:expandMenu,
        getSreach:getSreach
    }

})