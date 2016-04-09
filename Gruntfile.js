module.exports = function(grunt){

  grunt.initConfig({


    /**
    *
    * auto_install
    * Permet d'installer les packages depuis le package.json
    *
    */
    auto_install: {
      local: {},
      subdir: {
        options: {
          cwd: 'subdir',
          stdout: true,
          stderr: true,
          failOnError: true,
          npm: '--production'
        }
      }
    },


    /**
    *
    * Autoprefixe le CSS
    *
    */
    autoprefixer: {
      your_target: {
        options: {
          browsers: ['last 2 versions','Firefox > 20'], // 'ie 8', 'ie 9'
          diff: 'css/file.css.patch'
        },
      },
      main: {
        expand: true,
        src: 'css/app.css'
      },
    },





  });

  grunt.loadNpmTasks('grunt-auto-install');
  grunt.loadNpmTasks('grunt-autoprefixer');
  //grunt.registerTask('default', ['concat']);
  grunt.registerTask('default', ['autoprefixer']);
  // créer une tache à executer, ici on execute Concat puis Uglify
};
