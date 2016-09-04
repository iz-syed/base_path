module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: ['js/lib/jquery.min.js',  'js/lib/appeared.js', 'js/lib/bootstrap.min.js', 'js/lib/jquery.matchHeight-min.js', 'js/lib/jquery.parallax-1.1.3.js', 'js/lib/jquery-ui.min.js', 'js/lib/slick.min.js', 'js/lib/smoothscroll.js', 'js/main.js'],
        dest: 'js/build/global.min.js'
      }
    },
    watch: {
      files:['js/*.js'],
      tasks:['uglify']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'watch']);

};