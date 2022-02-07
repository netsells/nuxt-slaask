const { resolve } = require('path');
const merge = require('lodash.merge');

module.exports = function(moduleOptions) {
    const settings = merge(
        moduleOptions,
        this.options.slaask,
    );

    this.addPlugin({
        src: resolve(__dirname, 'plugin.js'),
        fileName: 'slaask.client.js',
        options: {
            settings,
        },
    });
};

module.exports.meta = require('../package.json');
