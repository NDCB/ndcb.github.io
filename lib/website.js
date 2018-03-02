/**
 * The array of all theme colors.
 */
const COLORS = [
    'turquoise',
    'green',
    'blue',
    'purple',
    'dark',
    'yellow',
    'orange',
    'red',
    'light',
    'grey',
];

/**
 * Model of a website.
 */
class Website {
    /**
     * Constructs a website.
     * @param {Object} website the website data.
     * @param {Object} website.root the root data of the website.
     * @param {String} website.name the name of the website.
     * @param {String} website.shortName the short name of the website.
     * @param {String} website.url the URL of the website.
     * @param {String} website.sourceUrl the source URL of the website.
     * @param {Object} website.locales the locales' data of the website.
     * @param {Locale} website.defaultLocale the default locale of the website.
     * @param {String} website.defaultThumbnail the default thumbnail file.
     * @param {String} website.thumbnailsFolder the folder of the article
     * thumnails.
     * @param {String} website.themeColor the theme color of the website.
     * @param {String} website.faviconFolder the relative path of the favicon
     * folder.
     * @param {Object} website.authentifications the website's authentifications
     * to various services encoded in base64.
     * @param {Object} website.socialProfiles the website's social profiles to
     * various social media.
     */
    constructor({
        root,
        name,
        shortName,
        url,
        sourceUrl,
        locales,
        defaultLocale,
        defaultThumbnail,
        thumbnailsFolder,
        themeColor,
        faviconFolder,
        authentifications,
        socialProfiles,
    }) {
        this.root = root;
        this.name = name;
        this.shortName = shortName;
        this.url = url;
        this.sourceUrl = sourceUrl;
        this._locales = locales;
        this.defaultLocale = defaultLocale;
        this.defaultThumbnail = defaultThumbnail;
        this.thumbnailsFolder = thumbnailsFolder;
        this.themeColor = themeColor;
        this.faviconFolder = faviconFolder;
        this.authentifications = authentifications;
        this.socialProfiles = socialProfiles;
    }

    /**
     * Sets the default locale of this website to the locale whose slug
     * corresponds to the given locale slug.
     * @param {String} localeSlug the locale slug.
     */
    set defaultLocale(localeSlug) {
        this._defaultLocale = Locale.parse(this, [localeSlug]);
    }

    /**
     * @return {Locale} the default locale of this website.
     */
    get defaultLocale() {
        return this._defaultLocale;
    }

    /**
     * @return {Locale[]} the locales of this website.
     */
    get locales() {
        let locales = [];
        let data = this._locales;
        for (let localeSlug in data) {
            if (data.hasOwnProperty(localeSlug)) {
                locales.push(Locale.parse(this, [localeSlug]));
            }
        }
        return locales;
    }

    /**
     * Converts relative path fragments of the website to a relative path.
     * Removes the locale from the relative path if it corresponds to this
     * website's default locale.
     * @param {String[]} path the relative path to convert.
     * @return {String} the relative path.
     */
    relativePath(path) {
        if (path[0] == this.defaultLocale.slug) {
            return '/' + path.slice(1).join('/');
        } else {
            return '/' + path.join('/');
        }
    }

    /**
     * Converts relative path fragments of the website to a URL.
     * @param {String[]} path the relative path to convert.
     * @return {String} the URL.
     */
    toUrl(path) {
        return this.url + this.relativePath(path);
    }

    /**
     * Retrieves the data of a directory at the specified path.
     * @param {String[]} path the path of directory.
     * @return {Object} the directory hierarchy.
     */
    directory(path = []) {
        let directory = this.root;
        for (let fragment of path) {
            directory = directory[fragment];
        }
        return directory;
    }

    /**
     * Retrieves the contents of a directory at the specified path.
     * @param {String[]} path the path of directory.
     * @return {Object} the contents of the directory at the given path.
     */
    contents(path = []) {
        return this.directory(path)._contents;
    }

    /**
     * Retrieves the data of a directory at the specified path.
     * @param {String[]} path the path of directory.
     * @return {Object} the data of the directory at the given path.
     */
    data(path = []) {
        return this.directory(path)._data;
    }

    /**
     * Decodes an authentification that was encoded in base64.
     * @param {String} authentification the encoded authentification.
     * @return {String} the decoded authentification.
     */
    static decodeAuthentification(authentification) {
        return Buffer.from(authentification, 'base64').toString();
    }
}

module.exports = {
    Website,
    COLORS,
};
