module.exports = function(grunt) {
    const tasks = {scope: ['devDependencies', 'dependencies']};
    const options = {
        config: { src: "src/tasks/*.js" },
        watch: {       
            files: ['src/styles/*.css','src/styles/*.less'], 
            tasks: ['cssmin','less'],
            scripts: { 
                files: ['src/scripts/**/*'], 
                tasks: ['concat'] 
            } 
        }
    };
    const configs = require('load-grunt-configs')(grunt, options);
    require('load-grunt-tasks')(grunt, tasks);
    grunt.initConfig(configs);
    grunt.registerTask('default', ['cssmin', 'uglify', 'concat']);

}