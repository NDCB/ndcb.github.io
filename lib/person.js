/** */
class Person {
    /**
     * 
     * @param {*} param0 
     */
    constructor({
        website,
        slug,
        fullName,
        profiles,
    }) {
        this.website = website;
        this.slug = slug;
        this.fullName = fullName;
        this.profiles = profiles;
    }

    /**
     * 
     * @param locale 
     */
    biography(locale) {

    }

    profilePictureUrl() {

    }

    /**
     * Retrieves the social profile identification of this person from the
     * given key social media.
     * @param {string} key the key of the social profile.
     * @throws {Error}
     * @return {string}
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

module.exports = {
    Person,
};
