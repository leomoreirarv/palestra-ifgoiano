var gulp        = require("gulp"),
    connect     = require("gulp-connect"),
    watch       = require("gulp-watch"),
    arquivos    =   [
        "*.html",
        "**/*.html",
        "*.js",
        "**/*.js"
    ];

gulp.task("connect", function(){
   connect.server({
       port: 1234,
       livereload: true
   })
});

gulp.task("scripts", function(){
   gulp.src(arquivos)
       .pipe(connect.reload());
});

gulp.task("watch", function(){
   gulp.watch(arquivos, ["scripts"]);
});

gulp.task("default", ["connect", "scripts", "watch"]);