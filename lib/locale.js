/** */
class Locale {
    /**
     * Constructs a locale. //TODO
     * @param {Object} locale
     */
    constructor({
        languageName,
        languageCode,
        countryName,
        countryCode,
        variables,
    }) {
        this._languageName = languageName;
        this._languageCode = languageCode;
        this._countryName = countryName;
        this._countryCode = countryCode;
        this._variables = variables;
    }

    /**
     * @return {String} the localized name of the language of this locale.
     */
    get languageName() {
        return this._languageName;
    }

    /**
     * @return {String} the localized name of the country of this locale.
     */
    get countryName() {
        return this._countryName;
    }

    /**
     * @return {String} the language code of this locale.
     */
    get languageCode() {
        return this._languageCode;
    }

    /**
     * @return {String} the country code of this locale.
     */
    get countryCode() {
        return this._countryCode;
    }

    /**
     * @return {String} the slug of this locale.
     */
    get slug() {
        return this.languageCode + "-" + this.countryCode;
    }

    /**
     * @return {Object} the localized variables of this locale.
     */
    get variables() {
        return this._variables;
    }

    /**
     * Parses a locale of a given slug from the root data of the website.
     * @param {String} slug the slug of the locale to parse. 
     */
    static parse(slug) {
        let locales = DEFAULT_ROOT._data.locales;
        if (locales[slug]) {
            return new Locale(locales[slug]);
        } else {
            return null;
        }
    }
}

module.exports = {Locale};
