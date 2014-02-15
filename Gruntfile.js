module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        copy:{
          main: {
              files:[{
                      expand: true,
                      src: ['bower_components/sass-bootstrap/lib/*.scss'],
                      dest: 'src/webapp/static/sass/bootstrap',
                      flatten: true
                  },{
                      expand: true,
                      cwd: 'bower_components',
                      src: ['sass-bootstrap/dist/js/bootstrap.js', 'jquery/jquery.js', 'angular/angular.js', 'angular-resource/angular-resource.js', 'angular-route/angular-route.js'],
                      dest: 'src/webapp/static/js/assets/',
                      flatten: true
                  },{
                  expand: true,
                  src: ['bower_components/sass-bootstrap/dist/fonts/*'],
                  dest: 'src/webapp/static/fonts/',
                  flatten: true
              }]
          }
        },
        uglify:{
            options:{
                sourceMap: true,
                mangle: false
            },
            build:{
                src: ['src/webapp/static/js/assets/**.js'],
                dest: 'src/webapp/static/js/app.js'
            }
        },
		sass: {
			dist: {
				files: [{
			        expand: true,
			        cwd: 'src/webapp/frontend/static/sass',
			        src: ['main.scss'],
			        dest: 'src/webapp/frontend/static/css',
			        ext: '.css'
			      },
                    {
                    expand: true,
			        cwd: 'src/webapp/static/sass',
			        src: ['main.scss'],
			        dest: 'src/webapp/static/css',
			        ext: '.css'
                    }]
			}
		},
		watch: {
			css: {
				files: ['src/webapp/frontend/static/sass/*.scss','src/webapp/static/sass/*.scss'],
				tasks: ['sass']
			},
      js:{
        files: ['src/**/*.js'],
        tasks: ['uglify']
      }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['sass', 'copy', 'uglify']);
}