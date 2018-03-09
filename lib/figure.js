/**
 * Model of a figure.
 */
class Figure {
    /**
     * Constructs a figure.
     * @param {Object} figure the data of the figure.
     * @param {Website} figure.website the website featuring the figure.
     * @param {String[]} figure.path the path of the figure.
     * @param {String} figure.title the title of the figure.
     * @param {String} figure.alt the alternative text of the figure.
     * @param {String[]} figure.authors the identification strings of the
     * figure's authors.
     * @param {String[]} figure.articles the slugs of the articles featuring the
     * figure.
     */
    constructor({
        website,
        slug,
        path,
        title,
        alt,
        authors = [],
        articles = [],
    }) {
        this.website = website;
        this.path = path;
        this.title = title;
        this.alt = alt;
        this.authors = authors;
        this.articles = articles;
        this.link = new Link({website: website, path: path});
    }

    /**
     * @param {String[]} authors the identification strings of the figure's
     * authors.
     */
    set authors(authors) {
        // TODO, define this._authors with Person.parse()
    }

    /**
     * @return {Person[]} the authors of this figure.
     */
    get authors() {
        return this._authors;
    }

    /**
     * @return {Locale} the locale of this figure.
     */
    get locale() {
        return Locale.parse(this.website, this.path);
    }

    /**
     * @return {String} the slug of this figure.
     */
    get slug() {
        return this.path[this.path.length - 1];
    }
}

module.exports = {
    Figure,
};
