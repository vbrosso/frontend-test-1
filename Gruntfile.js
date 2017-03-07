module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },

      js : {
        files : {
          'public/javascripts/main.min.js' : [ 'public/javascripts/main.js' ]
        }
      }
    }, // uglify
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'public/stylesheets/style.min.css': ['public/stylesheets/style.css']
        }
      }
    }, //cssmin
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'public/index_prod.html': 'public/index.html'
        }
      }
    } //htmlmin
  });

    // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');


  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'cssmin', 'htmlmin' ] );

};