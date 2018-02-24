/** */
class Person {
    /**
     * 
     * @param {*} param0 
     */
    constructor({
        slug,
        fullName,
        profiles,
    }) {
        this.slug = slug;
        this.fullName = fullName;
        this._profiles = profiles;
    }

    /**
     * 
     * @param locale 
     */
    biography(website, locale) {

    }

    profilePictureUrl(website) {

    }

    /**
     * Retrieves the social profile identification of this person from the
     * given key social media.
     * @param {String} key the key of the social profile.
     * @throws {Error}
     * @return {String}
     */
    profile(key) {
        let profile = this._profiles[key];
        if (profile) {
            return profile;
        } else {
            throw new Error('No social media profile of key \'' + key +
                '\' for ' + this.fullName);
        }
    }

}