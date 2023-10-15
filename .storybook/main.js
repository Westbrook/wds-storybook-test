import { mergeConfigs } from '@web/dev-server';

/** @type { import('storybook-builder-wds').StorybookConfigWds } */
const config = {
    stories: [
        '../dist/stories/**/*.stories.{js,md,mdx}',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: '@web/storybook-framework-web-components',
    },
    wdsFinal(config) {
        const final = mergeConfigs(config, {
            clearTerminalOnReload: true,
            watch: true,
            middlewareMode: false,
        });
        return final;
    },
};

export default config;