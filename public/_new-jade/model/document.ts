/**
 * The array of valid change frequencies.
 * See: https://www.sitemaps.org/protocol.html.
 */
const CHANGE_FREQUENCIES = [
    "always",
    "hourly",
    "daily",
    "weekly",
    "monthly",
    "yearly",
    "never"
];

/** 
 * The default change frequency of a document.
 */
const DEFAULT_CHANGE_FREQUENCY = CHANGE_FREQUENCIES[4]; //monthly

/**
 * Describes a web document featured on the website.
 */
class WebDocument {

    get changeFrequency() {
        return this._changeFrequency;
    }

    set changeFrequency(value) {
        if (WebDocument.validChangeFrequency(value)) {
            this._changeFrequency = value;
        }
    }

    /**
     * Determines whether or not a given change frequency literal is valid.
     * @param changeFrequency the change frequency to validate.
     */
    private static validChangeFrequency(changeFrequency) {
        return CHANGE_FREQUENCIES.includes(changeFrequency);
    }

}