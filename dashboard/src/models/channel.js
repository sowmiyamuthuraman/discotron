/**
 * Represents a channel, dashboard side
 */
window.Discotron.Channel = class {
    /**
     * @constructor
     * @param {string} name Name of the channel
     * @param {string} id Discord channel id
     * @param {string} type Type of the channel. See discord.js documentation (dm, group, text, voice, category, news, store)
     */
    constructor(name, id, type) {
        this._name = name;
        this._id = id;
        this._type = type;
    }

    /**
     * @returns {string} Channel name
     */
    get name() {
        return this._name;
    }

    /**
     * @returns {string} Channel id
     */
    get id() {
        return this._id;
    }

    /**
     * @returns {string} Type of the channel. See discord.js documentation (dm, group, text, voice, category, news, store)
     */
    get type() {
        return this._type;
    }
};