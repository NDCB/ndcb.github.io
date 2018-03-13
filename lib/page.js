/**
 * Model of a page type.
 */
class PageType {
    /**
     * Constructs a page type.
     * @param {String} name the name of the page type.
     * @param {Number} priority the priority of the page type for the sitemap
     * index.
     */
    constructor(name, priority) {
        this.name = name;
        this.priority = priority;
    }

    /**
     * Fetches a defined page type of a given name.
     * @param {String} name the name of the type to fetch.
     * @return {Type} the type of the given name.
     * @throws {Error} if there is no type of the given name in
     * {@code PAGE_TYPES}.
     * @see PAGE_TYPES the array of defined page types.
     */
    static of(name) {
        for (let TYPE of PageType.TYPES) {
            if (TYPE.name === name) {
                return TYPE;
            }
        }
        throw new Error('No defined type of name \'' + name + '\'.');
    }

    /**
     * Verifies that there exists a page type of a given name.
     * @param {String} name the name of the type to validate.
     * @return {Boolean} whether there is a page type of the given name.
     * @see PAGE_TYPES the array of defined page types.
     */
    static valid(name) {
        for (let TYPE of PageType.TYPES) {
            if (TYPE.name == name) {
                return true;
            }
        }
        return false;
    }
}

/**
 * The types of pages.
 */
PageType.TYPES = [
    new PageType('index', 0.5),
    new PageType('about', 0.4),
    new PageType('search', 0.1),
    new PageType('privacy-policy', 0.3),
    new PageType('sitemap', 0.4),
    new PageType('locales', 0.1),
    new PageType('404', 0.1),
];

/**
 * The default type of pages.
 */
PageType.DEFAULT = PageType.of('index');

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
        type = PageType.DEFAULT.name,
    }) {
        type = PageType.of(type);
        if (!priority) {
            priority = type.priority;
        }
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
}

module.exports = {
    Page,
    PageType,
};
