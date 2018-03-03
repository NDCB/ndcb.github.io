/**
 * Model of a locale, used to separate the content of the website based off of
 * country and language codes.
 */
class Locale {
    /**
     * Constructs a locale.
     * @param {Object} locale
     * @param {Website} locale.website the website featuring this locale.
     * @param {String} locale.languageName the localized name of the language of
     * this locale.
     * @param {String} locale.languageCode the ISO 639-1 language code of this
     * locale.
     * @param {String} locale.countryName the localized name of the country of
     * this locale.
     * @param {String} locale.countryCode the ISO 3166-1-alpha-2 code of the
     * country of this locale.
     * @param {Object} locale.variables the localized variables of this locale.
     */
    constructor({
        website,
        languageName,
        languageCode,
        countryName,
        countryCode,
        variables,
    }) {
        this.website = website;
        this.languageName = languageName;
        this.languageCode = languageCode;
        this.countryName = countryName;
        this.countryCode = countryCode;
        this.variables = variables;
    }

    /**
     * @return {String} the slug of this locale.
     */
    get slug() {
        return this.languageCode + '-' + this.countryCode;
    }

    /**
     * @return {String[]} the path of this locale.
     */
    get path() {
        return [this.slug];
    }

    /**
     * @return {Category[]} the root categories of this locale.
     */
    get categories() {
        let categories = [];
        let data = this.website.data(this.path);
        if (!data.categories) {
            return categories;
        }
        let categoriesSlug = data.categories;
        for (let i = 0; i < categoriesSlug.length; i++) {
            let categorySlug = categoriesSlug[i];
            categories.push(Category.parse(this.website,
                this.path.concat(categorySlug)));
        }
        return categories;
    }

    /**
     * @return {Page[]} the pages at the root of this locale.
     */
    get pages() {
        let pages = [];
        let data = this.website.data(this.path);
        let pagesData = data.pages || {};
        for (let pageSlug in pagesData) {
            if (pagesData.hasOwnProperty(pageSlug)) {
                pages.push(Page.parse(this.website,
                    this.path.concat([pageSlug])));
            }
        }
        return pages;
    }

    /**
     * Parses a locale of a given slug from the root data of the website.
     * @param {Website} website the website featuring the locale.
     * @param {String[]} path the path from which to parse the locale.
     * @return {Locale|Null} the parsed locale.
     */
    static parse(website, path) {
        let locales = website._locales;
        let slug = path[0];
        if (locales[slug]) {
            locales[slug].website = website;
            return new Locale(locales[slug]);
        } else {
            return null;
        }
    }
}

module.exports = {
    Locale,
};
