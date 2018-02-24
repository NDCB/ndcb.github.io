/** */
class Article extends WebDocument {
    /**
     * Constructs an article. //TODO
     * @param {Object} article
     * @param {String} article.headline
     * @param {String} article.description
     * @param {String[]} article.path
     * @param {String} article.changeFrequency
     * @param {String} article.publicationDate the date of publication of this
     * article in ISO 8601 format (https://en.wikipedia.org/wiki/ISO_8601).
     * @param {String} article.latestModificationDate the latest modification
     * date of this article in ISO 8601 format
     * (https://en.wikipedia.org/wiki/ISO_8601).
     * @param {String[]} article.authors
     * @param {String[]} article.plugins
     */
    constructor({
        headline,
        description,
        path,
        changeFrequency = DEFAULT_CHANGE_FREQUENCY,
        priority = DEFAULT_PRIORITY,
        publicationDate,
        latestModificationDate,
        authors,
    }) {
        super({
            headline,
            description,
            path,
            changeFrequency,
            priority,
        });
        this._publicationDate = publicationDate;
        this._latestModificationDate = latestModificationDate;
        this._authors = authors;
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
     * @return {Person[]} the authors of this article.
     */
    get authors() {
        //TODO:...
    }
}

module.exports = {Article};
