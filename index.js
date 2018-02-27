const argv = require('yargs').argv;
const harp = require('harp');
const browserSync = require('browser-sync');

// Modules available to the templating engine
global.moment = require('moment');

global.Locale = require('./lib/locale').Locale;
global.Website = require('./lib/website').Website;
global.COLORS = require('./lib/website').COLORS;
global.Person = require('./lib/person').Person;
global.WebDocument = require('./lib/webdocument').WebDocument;
global.Article = require('./lib/article').Article;
global.Page = require('./lib/page').Page;
global.PAGE_TYPES = require('./lib/page').TYPES;
global.Category = require('./lib/category').Category;

/**
 * The directory of the project.
 */
const PROJECT_DIRECTORY = require('./package.json').projectConfiguration
    .directory;

/**
 * The default locale of the project.
 */
const DEFAULT_LOCALE = require(PROJECT_DIRECTORY + '_data.json').website
    .defaultLocale;

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
