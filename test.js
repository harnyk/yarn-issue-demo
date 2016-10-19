var t = require('grunt-webpack/tasks/webpack');

var gruntMock = {
    registerMultiTask: function () {}
};

t(gruntMock); //should not throw error
