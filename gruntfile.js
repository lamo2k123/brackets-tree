module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            options : {
                paths : ['less/']
            },
            production : {
                files : {
                    'styles/style.css' : 'less/bootstrap.less'
                }
            }
        },

        watch: {
            less : {
                files : ['less/*.less'],
                tasks : ['less:production']
            },
        
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less:production']);

};