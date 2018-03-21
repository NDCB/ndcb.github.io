/**
 * The default configuration of a category.
 */
const DEFAULT_CONFIGURATION = {
    themeColor: 'grey',
    thumbnailFile: 'thumbnail-dark',
};

/**
 * A category contains web documents and subcategories.
 */
class Category {
    /**
     * Constructs a defined category.
     * @param {Object} category the category data.
     * @param {Website} category.website the website featuring this category.
     * @param {String} category.headline the headline of the category.
     * @param {String} category.slug the slug of the category.
     * @param {String[]} category.path the path of the category.
     * @param {String} category.themeColor the color the the category's theme.
     * @param {String} category.thumbnailPath the absolute path of the
     * category's thumbnail image.
     */
    constructor({
        website,
        headline,
        slug,
        path,
        themeColor,
        thumbnailPath,
    }) {
        this.website = website;
        if (!website) {
            throw new Error('No defined website for the category.');
        }
        this.headline = headline;
        this.slug = slug;
        this.path = path;
        this.themeColor = themeColor;
        this.thumbnailPath = thumbnailPath;
        this.link = new Link({website: website, path: path});
    }

    /**
     * @return {WebDocument[]} the documents at the root of this category.
     */
    get documents() {
        let documents = [];
        let path = this.path;
        let data = this.website.data(path);
        for (let pageSlug in data.pages || {}) {
            if (data.pages.hasOwnProperty(pageSlug)) {
                documents.push(Page.parse(
                    this.website, path.concat(pageSlug)));
            }
        }
        for (let articleSlug in data.articles || {}) {
            if (data.articles.hasOwnProperty(articleSlug)) {
                documents.push(Article.parse(
                    this.website, path.concat(articleSlug)));
            }
        }
        return documents;
    }

    /**
     * @return {WebDocument[]} all the documents of this category.
     */
    get recursiveDocuments() {
        let documents = this.documents;
        let subcategories = this.subcategories;
        for (let subcategory of subcategories) {
            documents = documents.concat(subcategory.recursiveDocuments);
        }
        return documents;
    }

    /**
     * @return {Locale} the locale of this category.
     */
    get locale() {
        return Locale.parse(this.website, this.path);
    }

    /**
     * Retrieves the subcategories of this category.
     * @return {Category[]} the subcategories of this category.
     */
    get subcategories() {
        let subcategories = [];
        let data = this.website.data(this.path);
        if (data.categories) {
            for (let categorySlug of data.categories) {
                subcategories.push(Category.parse(this.website,
                    this.path.concat(categorySlug)));
            }
        }
        return subcategories;
    }

    /**
     * @return {Figure[]} the figures at the root of this category.
     */
    get figures() {
        let figures = [];
        let figuresFolder = this.locale.variables.redaction.figures.folder;
        let figuresPath = this.path.concat(figuresFolder);
        let figuresData = this.website.data(figuresPath).figures;
        for (let figureSlug in figuresData) {
            if (figuresData.hasOwnProperty(figureSlug)) {
                let figureData = figuresData[figureSlug];
                figureData.path = figuresPath.concat(figureSlug);
                figureData.website = this.website;
                figures.push(new Figure(figureData));
            }
        }
        return figures;
    }

    /**
     * Parses a category at the given path.
     * @param {Website} website the website featuring this category.
     * @param {String[]} path the path of the category.
     * @return {Category} the parsed category.
     */
    static parse(website, path) {
        let category = Category.configuration(website, path);
        category.website = website;
        category.path = path;
        category.slug = path[path.length - 1];
        category.locale = Locale.parse(website, path[0]);
        return new Category(category);
    }

    /**
     * Traverses the path leading to a category and returns its configuration,
     * overriding the parameters along the way.
     * @param {Website} website the website featuring this category.
     * @param {String[]} path the path of the category.
     * @return {Object} the configuration of the category at the specified path.
     */
    static configuration(website, path) {
        let configuration = Object.assign({}, DEFAULT_CONFIGURATION);
        let rootData = website.data(path.slice(0, 2));
        configuration = Object.assign(configuration, rootData.category);
        for (let i = 2; i < path.length; i++) {
            rootData = website.data(path.slice(0, i + 1));
            if (rootData.category) {
                configuration = Object.assign(configuration, rootData.category);
            }
        }
        configuration.thumbnailPath = website.thumbnailsFolder
        + configuration.thumbnailFile;
        return configuration;
    }
}

module.exports = {
    Category,
};
