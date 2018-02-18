/**
 * The array of valid change frequencies for the sitemap indexing.
 * See: https://www.sitemaps.org/protocol.html.
 */
const CHANGE_FREQUENCIES = [
    "always",
    "hourly",
    "daily",
    "weekly",
    "monthly",
    "yearly",
    "never"
];

/** 
 * The default change frequency of a web document for the sitemap indexing.
 */
const DEFAULT_CHANGE_FREQUENCY = CHANGE_FREQUENCIES[4]; //monthly

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
     * @returns {String} the headline of this web document.
     */
    get headline() {
        return this._headline;
    }

    /**
     * @returns {String} the filename of this web document.
     */
    get slug() {
        let path = this.path;
        return path[path.length - 1];
    }

    /**
     * @returns {String} the description of this web document.
     */
    get description() {
        return this._description;
    }

    /**
     * @returns {String[]} the path of this web document.
     */
    get path() {
        return this._path;
    }

    /**
     * @returns {String} the relative path of this web document.
     */
    get relativePath() {
        return this._relativePath;
    }

    /**
     * @returns {String} the URL of this web document.
     */
    get url() {
        return this._url;
    }

    /**
     * @returns {Locale} the locale of this web document.
     */
    get locale() {
        return this._locale;
    }

    /**
     * @returns {String} the change frequency of this document for the sitemap 
     * indexing.
     */
    get changeFrequency() {
        return this._changeFrequency;
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
     * @returns {Boolean} whether or not a given change frequency literal is 
     * valid.
     */
    private static validChangeFrequency(changeFrequency) {
        return CHANGE_FREQUENCIES.includes(changeFrequency);
    }

    /**
     * @returns {Number} the priority of this web document for the sitemap 
     * indexing.
     */
    get priority() {
        return this._priority;
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
     * @returns {Boolean} whether or not a given priority is valid.
     */
    private static validPriority(priority) {
        return priority >= MINIMUM_PRIORITY && priority <= MAXIMUM_PRIORITY;
    }

}