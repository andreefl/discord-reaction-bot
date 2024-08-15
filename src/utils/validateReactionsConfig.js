const fs = require('node:fs');
const path = require('node:path');
const validateEmoji = require('./validateEmoji');

module.exports = () => {
    const configPath = path.join(__dirname, '../config');
    const configFiles = fs.readdirSync(configPath).filter(file => file.endsWith('.json') && file.startsWith('reactionsConfig'));

    if ( configFiles.length != 1) {
        return false;
    }

    const reactionsConfig = require('../config/reactionsConfig.json');

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