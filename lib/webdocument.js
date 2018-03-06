/**
 * The array of valid change frequencies for the sitemap indexing.
 * See: https://www.sitemaps.org/protocol.html.
 */
const CHANGE_FREQUENCIES = [
    'always',
    'hourly',
    'daily',
    'weekly',
    'monthly',
    'yearly',
    'never',
];

/**
 * The recommended length of a web document description.
 */
const RECOMMENDED_DESCRIPTION_LENGTH = 155;

/**
 * The default change frequency of a web document for the sitemap indexing.
 */
const DEFAULT_CHANGE_FREQUENCY = CHANGE_FREQUENCIES[4]; // monthly

/**
 * The minimal priority of a web document for the sitemap indexing.
 */
const MINIMUM_PRIORITY = 0.0;

/**
 * The maximal priority of a web document for the sitemap indexing.
 */
const MAXIMUM_PRIORITY = 1.0;

/**
 * The default priority of a web document for the sitemap indexing.
 */
const DEFAULT_PRIORITY = 0.5;

/**
 * Describes a localized web document featured on the website.
 */
class WebDocument {
    /**
     * Constructs a web document.
     * @param {Object} webDocument the web document data.
     * @param {Website} webDocument.website the website featuring this web
     * document.
     * @param {String} webDocument.headline the headline of the web document.
     * @param {String} webDocument.description the description of the web
     * document.
     * @param {String[]} webDocument.path the path of the web document.
     * @param {String} webDocument.changeFrequency the change frequency of the
     * web document.
     * @param {Number} webDocument.priority the priority of the web document.
     * @param {String[]} webDocument.plugins the array of plugins used for this
     * web document.
     */
    constructor({
        website,
        headline,
        description,
        path,
        changeFrequency = DEFAULT_CHANGE_FREQUENCY,
        priority = DEFAULT_PRIORITY,
        plugins = [],
    }) {
        this.website = website;
        if (!website) {
            throw new Error('No defined website for the web document.');
        }
        this.headline = headline;
        if (!headline) {
            console.warn('No defined headline for ' + path);
        }
        this.description = description;
        this.path = path;
        if (!path) {
            throw new Error('No defined path for the web document.');
        }
        this.changeFrequency = changeFrequency;
        this.priority = priority;
        this.plugins = plugins;
        this.link = new Link({website: website, path: path});
    }

    /**
     * @param {String} description the new description of this web document.
     */
    set description(description) {
        if (!description) {
            console.warn('No defined description for the web document.');
        } else if (description.length > RECOMMENDED_DESCRIPTION_LENGTH) {
            console.warn('Web document description exceeds the recommended' +
                ' amount of ' + RECOMMENDED_DESCRIPTION_LENGTH
                + ' characters.');
        }
        this._description = description;
    }

    /**
     * @return {String} the description of this web document.
     */
    get description() {
        return this._description;
    }

    /**
     * @return {String} the filename of this web document.
     */
    get slug() {
        let path = this.path;
        return path[path.length - 1];
    }

    /**
     * @return {Locale} the locale of this web document.
     */
    get locale() {
        return Locale.parse(this.website, this.path);
    }

    /**
     * @return {Object} the data of the directory which contains this web
     * document.
     */
    get directoryData() {
        return this.website.directory(this.path.slice(0, -1));
    }

    /**
     * @param {String} changeFrequency the new change frequency of this web
     * document.
     */
    set changeFrequency(changeFrequency) {
        if (WebDocument.validChangeFrequency(changeFrequency)) {
            this._changeFrequency = changeFrequency;
        } else {
            this._changeFrequency = DEFAULT_CHANGE_FREQUENCY;
        }
    }

    /**
     * @param {String} changeFrequency the change frequency to validate.
     * @return {Boolean} whether or not a given change frequency literal is
     * valid.
     */
    static validChangeFrequency(changeFrequency) {
        return CHANGE_FREQUENCIES.includes(changeFrequency);
    }

    /**
     * @return {String} the change frequency of this document for the
     * sitemap indexing.
     */
    get changeFrequency() {
        return this._changeFrequency;
    }

    /**
     * @param {Number} priority the new priority of the document.
     */
    set priority(priority) {
        if (WebDocument.validPriority(priority)) {
            this._priority = priority;
        } else {
            this._priority = DEFAULT_PRIORITY;
        }
    }

    /**
     * @param {Number} priority the priority to validate.
     * @return {Boolean} whether or not a given priority is valid.
     */
    static validPriority(priority) {
        return priority >= MINIMUM_PRIORITY && priority <= MAXIMUM_PRIORITY;
    }

    /**
     * @return {Number} the priority of this document in the sitemap
     * indexing.
     */
    get priority() {
        return this._priority;
    }

    /**
     * @return {Category} the category featuring this web document.
     */
    get category() {
        if (this.path.length > 2) {
            return Category.parse(this.website, this.path.slice(0, -1));
        }
    }

    /**
     * Parses a web document of a given path.
     * @param {Website} website the website featuring this web document.
     * @param {String[]} path the path of the web document.
     * @return {Article|Page|Null} the parsed web document.
     */
    static parse(website, path) {
        let documentSlug = path[path.length - 1];
        let data = website.data(path.slice(0, -1));
        let articles = data.articles || {};
        let pages = data.pages || {};
        if (articles[documentSlug]) {
            articles[documentSlug].website = website;
            articles[documentSlug].path = path;
            return new Article(articles[documentSlug]);
        } else if (pages[documentSlug]) {
            pages[documentSlug].website = website;
            pages[documentSlug].path = path;
            return new Page(pages[documentSlug]);
        } else {
            return null;
        }
    }
}

module.exports = {
    WebDocument,
};
