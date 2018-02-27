/**
 * Describes an article featured on the website.
 */
class Article extends WebDocument {
    /**
     * Constructs an article.
     * @param {Object} article the article data.
     * @param {Website} article.website the website featuring this article.
     * @param {String} article.headline the headline of the article.
     * @param {String} article.description the description of the article.
     * @param {String[]} article.path the path of the article.
     * @param {String} article.changeFrequency the change frequency of the
     * article.
     * @param {String[]} article.plugins the array of plugin identifications.
     * @param {String} article.publicationDate the date of publication of this
     * article in ISO 8601 format (https://en.wikipedia.org/wiki/ISO_8601).
     * @param {String} article.latestModificationDate the latest modification
     * date of this article in ISO 8601 format
     * (https://en.wikipedia.org/wiki/ISO_8601).
     * @param {String[]} article.authors the array of author identifications.
     */
    constructor({
        website,
        headline,
        description,
        path,
        changeFrequency,
        priority,
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
     * @return {String} the date of publication of this article in ISO 8601
     * format (https://en.wikipedia.org/wiki/ISO_8601).
     */
    get publicationDateCode() {
        return this._publicationDate;
    }

    /**
     * @return {String} the latest modificationdate of this article in ISO 8601
     * format (https://en.wikipedia.org/wiki/ISO_8601).
     */
    get latestModificationDateCode() {
        return this._latestModificationDate;
    }

    /**
     * @return {String} the publication date of this article formatted in
     * its locale.
     */
    get publicationDate() {
        return moment(this._publicationDate).locale(this.locale.slug)
            .format('LL');
    }

    /**
     * @return {String} the latest modification date of this article formatted
     * in its locale.
     */
    get latestModificationDate() {
        return moment(this._latestModificationDate).locale(this.locale.slug)
            .format('LL');
    }

    /**
     * @return {Person[]} the authors of this article.
     */
    get authors() {
        let authors = [];
        for (let i = 0; i < this._authors.length; i++) {
            //TODO: Conform with person parsing...
            authors.push(Person.parse(this._authors[i]));
        }
        return authors;
    }
}

module.exports = {
    Article,
};
