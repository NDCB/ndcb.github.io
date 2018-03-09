/**
 * Model of a figure.
 */
class Figure {
    /**
     * Constructs a figure.
     * @param {Object} figure the data of the figure.
     * @param {Website} figure.website the website featuring the figure.
     * @param {String[]} figure.path the path of the figure.
     * @param {String} alt the alternative text of the figure.
     * @param {String[]} authors the identification strings of the figure's
     * authors.
     */
    constructor({
        website,
        slug,
        path,
        alt,
        authors,
    }) {
        this.website = website;
        this.path = path;
        this.alt = alt;
        this.authors = authors;
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
