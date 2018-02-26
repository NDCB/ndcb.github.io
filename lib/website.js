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
     * @param {Locale} website.defaultLocale the default locale of the website.
     * @param {String} website.defaultThumbnail the default thumbnail file.
     * @param {String} website.thumbnailsFolder the folder of the article
     * thumnails.
     * @param {String} website.themeColor the theme color of the website.
     * @param {String} website.faviconFolder the relative path of the favicon
     * folder.
     * @param {Object} website.authentifications the website's authentifications
     * to various services.
     * @param {Object} website.socialProfiles the website's social profiles to
     * various social media.
     */
    constructor({
        root,
        name,
        shortName,
        url,
        sourceUrl,
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
     * Retrieves the data of a directory at the specified path.
     * @param {String[]} path the path of directory.
     * @return {Object} the directory hierarchy.
     */
    directory(path = []) {
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
     * Slugifies a text for URLs.
     * @param {String} text the text to be slugified.
     * @return {String} the slugified text.
     */
    static slugify(text) {
        text = text.toLowerCase();
        // Remove apostrophes
        text = text.replace(/\u0027/g, '');
        // Remove commas, periods, question marks and exclamation points
        text = text.replace(/\u002C|\u002E|\u003F|\u0021/g, '');
        // Replace accented 'a's
        text = text.replace(/[\u00E0-\u00E5]/gi, 'a');
        // Replace accented 'e's
        text = text.replace(/[\u00E8-\u00EB]/gi, 'e');
        // Replace accented 'i's
        text = text.replace(/[\u00EC-\u00EF]/gi, 'i');
        // Replace accented 'o's
        text = text.replace(/[\u00F2-\u00F6]/gi, 'o');
        // Replace accented 'u's
        text = text.replace(/[\u00F9-\u00FC]/gi, 'u');
        // Remove excess spaces
        text = text.trim().replace(/  +/g, ' ');
        // Replace spaces with dashes
        text = text.replace(/ /g, '-');
        return text;
    }
}

module.exports = {
    Website,
    COLORS,
};
