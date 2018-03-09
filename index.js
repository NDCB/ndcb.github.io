const argv = require('yargs').argv;
const harp = require('harp');
const browserSync = require('browser-sync');

/**
 * The directory of the project.
 */
const PROJECT_DIRECTORY = require('./package.json').projectConfiguration
    .directory || './public/';

/**
 * The default locale of the project.
 */
const DEFAULT_LOCALE = require(PROJECT_DIRECTORY + '_data.json').website
.defaultLocale;

global._locales = require(PROJECT_DIRECTORY + '_locales.json');
global._persons = require(PROJECT_DIRECTORY + '_persons.json');

// Local modules available to the templating engine
const requiredModules = require('./modules.json').modules;
for (let requiredModule of requiredModules) {
    Object.assign(global, require(requiredModule));
}

// Node modules
global.util = require('util');
global.slug = require('slug');
global.slug.defaults.mode = 'urlsafe';
global.slug.defaults.modes['urlsafe'] = {
    replacement: '-',
    symbols: true,
    remove: null,
    lower: true,
    charmap: slug.charmap,
    multicharmap: slug.multicharmap,
};
global.moment = require('moment');

/**
 * Logs a message.
 * @param {String} message the message to log.
 */
const log = function(message) {
    console.log('--------------------------------');
    console.log(message);
    console.log('--------------------------------');
};

/**
 * Compiles the website.
 */
const compile = function() {
    global.environment = 'production';
    log('Compiling');
    let i = argv.i || PROJECT_DIRECTORY;
    let o = argv.o || './www/';
    harp.compile(i, o, function(error) {
        if (error) {
            log('Compilation failed');
            console.log(JSON.stringify(error, null, '\t'));
        } else {
            log('Compilation successful');
        }
    });
};

/**
 * Runs the website on a local server.
 */
const server = function() {
    global.environment = 'development';
    let ip = argv.ip || 'localhost';
    let port = argv.port || '9000';
    let adress = ip + ':' + port;
    harp.server(PROJECT_DIRECTORY, {
            ip: ip,
            port: port,
        },
        function() {
            browserSync({
                proxy: adress,
                open: 'local',
                files: PROJECT_DIRECTORY,
                startPath: DEFAULT_LOCALE + '/',
            });
            log('Server running at ' + adress
                + '\n' + 'Press Ctrl+C to stop the server');
        });
};

/**
 * Launches the command specified in the console.
 */
switch (argv._[0]) {
    case 'server':
        server();
        break;
    case 'compile':
        compile();
        break;
};
