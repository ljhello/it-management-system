
require.config({
    baseUrl:'/assets',
    paths:{
        less: 'libs/less.js/less',
        jquery: 'libs/jquery/jquery',
        cookie: 'libs/jquery-cookie/jquery.cookie',
        template: 'libs/artTemplate/template-web',
        bootstrap: 'libs/bootstrap/js/bootstrap',
        Nprogress: 'libs/nprogress/nprogress',
        form:    'libs/jquery-form/jquery.form',
        datepicker: 'libs/bootstrap-datepicker/js/bootstrap-datepicker',
        zhcn:   'libs/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        region: 'libs/jquery-region/jquery.region',
        uploadify: 'libs/uploadify/jquery.uploadify',
        validate:  'libs/validate-master/jquery-validate',
        ckeditor:   'libs/ckeditor/ckeditor',
        Jcrop:    'libs/Jcrop-WIP-2.x/js/Jcrop',



        
        common:'js/common',
        login:'js/login',
        logout:'js/logout',
        
        teacherlist:'js/teacher/teacherlist',
        teacherAdd:'js/teacher/teacheradd',
        settings: 'js/setting/setting',
        courseadd:'js/course/courseadd',
        addstep1:'js/course/addstep1',
        addstep2:'js/course/addstep2',
        tools:'js/tools'


    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        zhcn:{
            deps:['datepicker']
        },
        uploadify:{
            deps:['jquery']
        },
        validate:{
            deps:['jquery'] 
        },
        Jcrop:{
            deps:['jquery']
        },
        ckeditor:{
            exports: 'CKEDITOR'
        }
    }
})

require(['common','less','logout']);