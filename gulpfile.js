var gulp = require('gulp');
var browserSync = require("browser-sync").create();

const { spawn, exec } = require('child_process');

var api = false;
var firstOut = true;
var chrome = false;

gulp.task('api', ['mongo'], function(cb){
    if(api){
        api.kill();
    }

    api = spawn('npm', ['run', 'api']);

	api.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);

		if(`${data}`.toString().indexOf('browserSync') === 0){
			if(browserSync.active){
				browserSync.reload();
			} else {
				browserSync.init({
			        proxy: "http://localhost:3000",
					port : 3002,
			    });
			}
		}
    });

    api.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    api.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    cb();
});

gulp.task('ng-serve', ['api'], function(){
    var ng = spawn('ng', ['serve']);

    ng.stdout.on('data', (data) => {
        console.log(`${data}`);
		if(!chrome){
			if(`${data}`.toString().indexOf('webpack: Compiled successfully') === 0){
				chrome = spawn('google-chrome', ['http://localhost:4200']);
			}
		}
    });

    ng.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    ng.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
});

gulp.task('atom', function(){
	spawn('atom', ['./.']);
});

gulp.task('mongo', function(){
	exec('echo \'63616e\' | sudo -kS service mongod start');
})

gulp.task('default', ['mongo', 'api', 'ng-serve', 'atom'],function(){

});
