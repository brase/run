module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: [{
			        expand: true,
			        cwd: 'src/webapp/Frontend/static/sass',
			        src: ['*.scss'],
			        dest: 'src/webapp/Frontend/static/css',
			        ext: '.css'
			      }]
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['sass']);	
}