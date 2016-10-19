module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webpack: {
            dev: {
                entry: "./app.js",
                output: {
                    path: "build/",
                    filename: "[hash].js",
                },

                stats: {
                    colors: false,
                    modules: true,
                    reasons: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', ['webpack']);
};
