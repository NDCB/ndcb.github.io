/**
 * A link is a reference to a web page.
 */
class Link {
    /**
     * Constructs a link.
     * @param {Object} link the data of the link.
     * @prop {Website} link.website the website of this link.
     * @prop {string[]} link.path the path fragments of this link.
     */
    constructor({
        website,
        path,
    }) {
        this.website = website;
        this.path = path;
    }

    /**
     * @return {string} the URL of this link in the website.
     */
    get url() {
        return this.website.url + this.relativePath;
    }

    /**
     * @return {string} the relative path of this link in the website.
     */
    get relativePath() {
        let path = this.path;
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
