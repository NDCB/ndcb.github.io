/**
 * Model of a website.
 */
class Website {
    /**
     * Constructs a website.
     * @param {Object} website the website data.
     * @param {Object} website.root the root data of the website.
     * @param {String} website.name the name of the website.
     * @param {String} website.url the URL of the website.
     * @param {String} website.sourceUrl the source URL of the website.
     * @param {String} website.thumbnailsFolder the folder of the article
     * thumnails.
     * @param {Object} website.authentifications the website's authentifications
     * to various services.
     * @param {Object} website.socialProfiles the website's social profiles to
     * various social media.
     * @param {Locale} website.defaultLocale the default locale of the website.
     */
    constructor({
        root,
        name,
        url,
        sourceUrl,
        thumbnailsFolder,
        authentifications,
        socialProfiles,
        defaultLocale,
    }) {
        this.root = root;
        this.name = name;
        this.url = url;
        this.sourceUrl = sourceUrl;
        this.thumbnailsFolder = thumbnailsFolder;
        this.authentifications = authentifications;
        this.socialProfiles = socialProfiles;
        this.defaultLocale = defaultLocale;
    }

    /**
     * Sets the default locale of this website to the locale whose slug
     * corresponds to the given locale slug.
     * @param {String} localeSlug the locale slug.
     */
    set defaultLocale(localeSlug) {
        this._defaultLocale = Locale.parse(localeSlug);
    }

    /**
     * @return {Locale} the default locale of this website.
     */
    get defaultLocale() {
        return this._defaultLocale;
    }

    /**
     * Retrieves the data of a directory at the specified path.
     * @param {String[]} path the path of directory.
     * @return {Object} the directory hierarchy.
     */
    directory(path) {
        let directory = this.root;
        for (let i = 0; i < path.length; i++) {
            directory = directory[path[i]];
        }
        return directory;
    }

    /**
     * Retrieves the contents of a directory at the specified path.
     * @param {String[]} path the path of directory.
     * @return {Object} the contents of the directory at the given path.
     */
    contents(path) {
        return this.directory(path)._contents;
    }

    /**
     * Retrieves the data of a directory at the specified path.
     * @param {String[]} path the path of directory.
     * @return {Object} the data of the directory at the given path.
     */
    data(path) {
        return this.directory(path)._data;
    }
}

module.exports = {
    Website,
};
