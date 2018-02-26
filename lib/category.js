/**
 * A class contains web documents and subcategories.
 */
class Category {
    /**
     * Constructs a defined category.
     * @param {Object} category the category data.
     * @param {String} category.headline the headline of the category.
     * @param {String} category.slug the slug of the category.
     * @param {String[]} category.path the path of the category.
     * @param {String} category.themeColor the color the the category's theme.
     * @param {String} category.thumbnailPath the absolute path of the
     * category's thumbnail image.
     */
    constructor({
        headline,
        slug,
        path,
        themeColor,
        thumbnailPath,
    }) {
        this.headline = headline;
        this.slug = slug;
        this.path = path;
        this.themeColor = themeColor;
        this.thumbnailPath = thumbnailPath;
    }

    /**
     * @param {Website} website the website featuring this category.
     * @return {WebDocument[]} the documents at the root of this category.
     */
    documents(website) {
        let documents = [];
        let path = this.path;
        let data = website.data(path);
        for (let pageSlug in data.pages || {}) {
            if (data.pages.hasOwnProperty(pageSlug)) {
                documents.push(Page.parse(website, path.concat([pageSlug])));
            }
        }
        for (let articleSlug in data.articles || {}) {
            if (data.articles.hasOwnProperty(articleSlug)) {
                documents.push(Article.parse(
                    website, path.concat([articleSlug])));
            }
        }
        return documents;
    }

    /**
     * @param {Website} website the website featuring this category.
     * @return {WebDocument[]} all the documents of this category.
     */
    recursiveDocuments(website) {
        let documents = this.documents(website);
        let subcategories = this.subcategories(website);
        for (let i = 0; i < subcategories.length; i++) {
            documents = documents.concat(
                subcategories[i].recursiveDocuments(website));
        }
        return documents;
    }

    /**
     * @return {String} the string literal of this category's locale.
     * @throws {Error} if the category has unexpectedly no locale.
     */
    get localeSlug() {
        let path = this.path;
        if (path.length >= 2) {
            return path[0];
        } else {
            throw new Error('Category has no locale.');
        }
    }

    /**
     * @param {Website} website the website featuring this category.
     * @return {Locale} the locale of this category.
     */
    locale(website) {
        return Locale.parse(website, this.localeSlug);
    }

    /**
     * Retrieves the subcategories of this category.
     * @param {Website} website the website featuring this category.
     * @return {Category[]} the subcategories of this category.
     */
    subcategories(website) {
        let subcategories = [];
        let data = website.data(this.path);
        if (data.categories) {
            for (let i = 0; i < data.categories.length; i++) {
                subcategories.push(Category.parse(website,
                    this.path.concat([data.categories[i]])));
            }
        }
        return subcategories;
    }

    /**
     * Parses a category at the given path.
     * @param {Website} website the website featuring this category.
     * @param {String[]} path the path of the category.
     * @return {Category} the parsed category.
     */
    static parse(website, path) {
        let category = Category.configuration(website, path);
        category.path = path;
        category.slug = path[path.length - 1];
        category.locale = Locale.parse(website, path[0]);
        return new Category(category);
    }

    /**
     * Traverses the path leading to a category and returns its configuration,
     * overriding the the parameters along the way.
     * @param {Website} website the website featuring this category.
     * @param {String[]} path the path of the category.
     * @return {Object} the configuration of the category at the specified path.
     */
    static configuration(website, path) {
        let rootData = website.data(path.slice(0, 2));
        let configuration = rootData.category;
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
