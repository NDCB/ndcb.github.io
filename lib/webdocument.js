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
 * Describes a web document featured on the website.
 */
class WebDocument {
    /**
     * Constructs a web document. //TODO
     * @param {Object} webDocument
     */
    constructor({
        headline,
        description,
        path,
        changeFrequency = DEFAULT_CHANGE_FREQUENCY,
        priority = DEFAULT_PRIORITY,
        plugins = [],
    }) {
        this.headline = headline;
        this.description = description;
        this.path = path;
        this.changeFrequency = changeFrequency;
        this.priority = priority;
        this.plugins = plugins;
    }

    /**
     * @return {String} the filename of this web document.
     */
    get slug() {
        let path = this.path;
        return path[path.length - 1];
    }

    /**
     * @return {String} the relative path of this web document.
     */
    relativePath(website) {
        if (this.locale.slug == website.defaultLocale.slug) {
            return '/' + this.path.slice(1).join('/');
        } else {
            return '/' + this.path.join('/');
        }
    }

    /**
     * @return {String} the URL of this web document.
     */
    url(website) {
        return website.url + this.relativePath;
    }

    /**
     * @return {String} the string literal of this web document's locale.
     */
    get localeSlug() {
        let path = this.path;
        if (path.length >= 2) {
            return path[0];
        } else {
            return null;
        }
    }

    /**
     * @return {Locale} the locale of this web document.
     */
    get locale() {
        return Locale.parse(this.localeSlug);
    }

    /**
     * @return {Object} the data of the directory which contains this web
     * document.
     */
    directoryData(website) {
        return website.directory(this.path.slice(0, -1));
    }

    /**
     * @param {String} changeFrequency the new change frequency of this web
     * document.
     */
    set changeFrequency(changeFrequency) {
        if (WebDocument.validChangeFrequency(changeFrequency)) {
            this._changeFrequency = changeFrequency;
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
}

module.exports = {WebDocument};
