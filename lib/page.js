/**
 * Model of a page type.
 */
class PageType {
    /**
     * Constructs a page type.
     * @param {string} name the name of the page type.
     * @param {number} priority the priority of the page type for the sitemap
     * index.
     * @param {string} icon the icon of the page type.
     */
    constructor(name, priority, icon) {
        this.name = name;
        this.priority = priority;
        this.icon = icon;
    }

    /**
     * Fetches a defined page type of a given name.
     * @param {string} name the name of the type to fetch.
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
     * @param {string} name the name of the type to validate.
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
    new PageType('index', 0.5, 'home'),
    new PageType('about', 0.4, 'info-circle'),
    new PageType('search', 0.1, 'search'),
    new PageType('privacy-policy', 0.3, 'lock'),
    new PageType('sitemap', 0.4, 'sitemap'),
    new PageType('locales', 0.1, 'globe'),
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
     * @prop {Website} page.website the website featuring this page.
     * @prop {string} page.headline the headline of the article.
     * @prop {string} page.description the description of the article.
     * @prop {string[]} page.path the path of the article.
     * @prop {string} page.changeFrequency the change frequency of the
     * article.
     * @prop {string[]} page.plugins the array of plugin identifications.
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
