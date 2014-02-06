module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: [{
			        expand: true,
			        cwd: 'src/webapp/Frontend/static/sass',
			        src: ['main.scss'],
			        dest: 'src/webapp/Frontend/static/css',
			        ext: '.css'
			      }]
			}
		},
		watch: {
			css: {
				files: 'src/webapp/Frontend/static/sass/main.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['sass']);	
}