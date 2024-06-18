import {defineConfig, squooshImageService} from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    site: "https://docs.node.net.au",
    base: "",
    image: {
        service: squooshImageService()
    },
    integrations: [starlight({
        title: 'Node ISP - Docs',
        logo: {
            src: './src/assets/logo.svg',
            replacesTitle: true
        },
        customCss: ['./src/tailwind.css'],
        social: {
            github: 'https://github.com/node-isp'
        },
        sidebar: [{
            label: 'Welcome to NodeISP',
            link: "/",
            attrs: {
                style: 'font-size: var(--sl-text-sm)!important; font-weight:normal!important;'
            }
        }, {
            label: 'Getting Started',
            autogenerate: {
                directory: 'getting-started'
            }
        }, {
            label: "Configuration",
            autogenerate: {
                directory: 'configuration'
            }
        }]
    }), tailwind({
        applyBaseStyles: false
    })],
    output: "static",
});
