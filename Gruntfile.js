module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: [{
			        expand: true,
			        cwd: 'src/webapp/frontend/static/sass',
			        src: ['main.scss'],
			        dest: 'src/webapp/frontend/static/css',
			        ext: '.css'
			      }]
			}
		},
		watch: {
			css: {
				files: 'src/webapp/frontend/static/sass/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['sass']);	
}