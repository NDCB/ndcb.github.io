/**
 * The types of pages.
 */
const PAGE_TYPES = [
    'index',
    'about',
    'search',
    'privacy-policy',
    'sitemap',
    'locales',
    '404',
];

/**
 * The default type of pages.
 */
const DEFAULT_TYPE = PAGE_TYPES[0];

/**
 * Describes a page featured on the website.
 */
class Page extends WebDocument {
    /**
     * Constructs a page.
     * @param {Object} page the page data.
     * @param {Website} page.website the website featuring this page.
     * @param {String} page.headline the headline of the article.
     * @param {String} page.description the description of the article.
     * @param {String[]} page.path the path of the article.
     * @param {String} page.changeFrequency the change frequency of the
     * article.
     * @param {String[]} page.plugins the array of plugin identifications.
     */
    constructor({
        website,
        headline,
        description,
        path,
        changeFrequency,
        priority,
        plugins,
        type = DEFAULT_TYPE,
    }) {
        super({
            website,
            headline,
            description,
            path,
            changeFrequency,
            priority,
            plugins,
        });
        this.type = type;
    }

    /**
     * @param {String} type the new type of this page.
     */
    set type(type) {
        if (Page.validType(type)) {
            this._type = type;
        } else {
            this._type = DEFAULT_TYPE;
        }
    }

    /**
     * Validates a page type.
     * @param {String} type the type to validate.
     * @return {Boolean} whether or not the given type is valid.
     */
    static validType(type) {
        return PAGE_TYPES.includes(type);
    }

    /**
     * @return {String} the type of this page.
     */
    get type() {
        return this._type;
    }
}

module.exports = {
    Page,
    PAGE_TYPES,
};
