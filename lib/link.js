/**
 * A link is a reference to a web page.
 */
class Link {
    /**
     * Constructs a link.
     * @param {Object} link the data of the link.
     * @param {Website} link.website the website of this link.
     * @param {String[]} link.path the path fragments of this link.
     */
    constructor({
        website,
        path,
    }) {
        this.website = website;
        this._path = path;
    }

    /**
     * @return {String} the URL of this link in the website.
     */
    get url() {
        return this.website.url + this.relativePath;
    }

    /**
     * @return {String} the relative path of this link in the website.
     */
    get relativePath() {
        let path = this._path;
        if (path[path.length - 1] == 'index') {
            path.splice(path.length - 1, 1);
        }
        if (environment == 'production' &&
                path[0] == this.website.defaultLocale.slug) {
            return '/' + path.slice(1).join('/');
        } else {
            return '/' + path.join('/');
        }
    }
}

module.exports = {
    Link,
};
