const validateEmoji = require('./validateEmoji');
const reactionsConfig = require('../config/reactionsConfig.json');

module.exports = () => {
    if (reactionsConfig.anyUser !== Boolean(reactionsConfig.anyUser)) {
        return false;
    }

    if (!validateEmoji(reactionsConfig.anyUserReaction)) {
        return false;
    }

    for (const user of reactionsConfig.whitelist) {
        if (!validateEmoji(user.reaction)) {
            return false;
        }
    }

    return true;
};