/**
 * The default priority of articles.
 */
const DEFAULT_PRIORITY = 0.8;

/**
 * Describes an article featured on the website.
 */
class Article extends WebDocument {
    /**
     * Constructs an article.
     * @param {Object} article the article data.
     * @prop {Website} article.website the website featuring this article.
     * @prop {string} article.headline the headline of the article.
     * @prop {string} article.description the description of the article.
     * @prop {string[]} article.path the path of the article.
     * @prop {string} article.changeFrequency the change frequency of the
     * article.
     * @prop {string[]} article.plugins the array of plugin identifications.
     * @prop {string} article.publicationDate the date of publication of this
     * article in ISO 8601 format (https://en.wikipedia.org/wiki/ISO_8601).
     * @prop {string} article.latestModificationDate the latest modification
     * date of this article in ISO 8601 format
     * (https://en.wikipedia.org/wiki/ISO_8601).
     * @prop {string[]} article.authors the array of author identifications.
     */
    constructor({
        website,
        headline,
        description,
        path,
        changeFrequency,
        priority = DEFAULT_PRIORITY,
        plugins,
        publicationDate,
        latestModificationDate,
        authors,
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
        this._publicationDate = publicationDate;
        this._latestModificationDate = latestModificationDate;
        this._authors = authors;
    }

    /**
     * @return {string} the date of publication of this article in ISO 8601
     * format (https://en.wikipedia.org/wiki/ISO_8601).
     */
    get publicationDateCode() {
        return this._publicationDate;
    }

    /**
     * @return {string} the latest modificationdate of this article in ISO 8601
     * format (https://en.wikipedia.org/wiki/ISO_8601).
     */
    get latestModificationDateCode() {
        return this._latestModificationDate;
    }

    /**
     * @return {string} the publication date of this article formatted in
     * its locale.
     */
    get publicationDate() {
        return moment(this._publicationDate).locale(this.locale.slug)
            .format('LL');
    }

    /**
     * @return {string} the latest modification date of this article formatted
     * in its locale.
     */
    get latestModificationDate() {
        return moment(this._latestModificationDate).locale(this.locale.slug)
            .format('LL');
    }

    /**
     * @return {Boolean} whether or not this article is published.
     */
    get isPublished() {
        return this.publicationDateCode
            || 0 !== this.publicationDateCode.length;
    }

    /**
     * @return {Person[]} the authors of this article.
     */
    get authors() {
        let authors = [];
        for (let i = 0; i < this._authors.length; i++) {
            // TODO: Conform with person parsing...
            authors.push(Person.parse(this._authors[i]));
        }
        return authors;
    }
}

module.exports = {
    Article,
};
