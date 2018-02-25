/** */
class Locale {
    /**
     * Constructs a locale.
     * @param {Object} locale
     * @param {String} locale.languageName the localized name of the language of
     * this locale.
     * @param {String} locale.languageCode the language code of this locale.
     * @param {String} locale.countryName the localized name of the country of
     * this locale.
     * @param {String} locale.countryCode the country code of this locale.
     * @param {Object} locale.variables the localized variables of this locale.
     */
    constructor({
        languageName,
        languageCode,
        countryName,
        countryCode,
        variables,
    }) {
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
     * Parses a locale of a given slug from the root data of the website.
     * @param {Website} website the website featuring this locale.
     * @param {String} slug the slug of the locale to parse.
     * @return {Locale} the parsed locale.
     * @throws {Error} if there are no defined locale of the given slug in the
     * website.
     */
    static parse(website, slug) {
        let locales = website.data().locales;
        if (locales[slug]) {
            return new Locale(locales[slug]);
        } else {
            throw new Error('No defined locale ' + slug + ' in ' + website);
        }
    }
}

module.exports = {
    Locale,
};
