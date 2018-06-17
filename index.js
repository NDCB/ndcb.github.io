const argv = require('yargs').argv;
const harp = require('harp');
const browserSync = require('browser-sync');

// TODO: Écrire un 'pug custom filter' qui fait appel à mathjax-node
// TODO: Retirer `jax: ["input/TeX","output/HTML-CSS"]` de la configuration mathjax sur les pages pour avoir les .css

// a simple TeX-input example
let mjAPI = require("mathjax-node");
mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
  },
});
mjAPI.start();

let yourMath = "x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}";

let result = mjAPI.typeset({
  math: yourMath,
  equationNumbers: "AMS",
  format: "TeX", // or "inline-TeX", "MathML"
  html: true,      // or svg:true, or html:true
}, function(data) {
    console.log(data);
});

console.log(result);



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
const REQUIRED_MODULES = require('./modules.json').modules;
for (let REQUIRED_MODULE of REQUIRED_MODULES) {
    console.log('Loading ' + REQUIRED_MODULE);
    Object.assign(global, require(REQUIRED_MODULE));
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
global.mathjax = require('mathjax-node');

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
    let ip = argv.ip || 'localhost';
    let port = argv.port || '9000';
    let adress = ip + ':' + port;
    harp.server(PROJECT_DIRECTORY, {
            ip: ip,
            port: port,
        },
        function() {
            configureEnvironment();
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
 * Configures the working environment.
 */
const configureEnvironment = function() {
    if (argv['NODE_ENV'] != null) {
        global.environment = argv['NODE_ENV'];
    } else if (process.env.NODE_ENV != null) {
        global.environment = process.env.NODE_ENV;
    } else {
        global.environment = 'development';
    }
    process.env.NODE_ENV = global.environment;
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
