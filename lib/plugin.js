/* eslint-disable */
import merge from 'lodash.merge';

export default function({ app }) {
    const settings = merge(<%= JSON.stringify(options.settings, null, 4) %>, app.$config.slaask);

    if (!settings.key) {
        //eslint-disable-next-line no-console
        console.error('[Slaask] No key provided. Aborting.');
        return;
    }

    window._slaaskSettings = settings;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.slaask.com/chat_loader.js';

    document.body.appendChild(script);
};
