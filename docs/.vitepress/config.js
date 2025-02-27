import nav from "./nav.mjs"
import sidebar from "./sidebar.mjs"


export default {
    base: '/vitepress_blog/',
    title: 'IT BLOG',
    description: 'Online Judge 文档',
    cleanUrls: true,
    lastUpdated: true,
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/lstLST123/vitepress_blog/tree/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        siteTitle: "IT BLOG",
        logo: "/favicon.png",
        socialLinks: [
            {icon: "github", link: "https://github.com/vuejs/vitepress"}
        ],
        head: [['link', {rel: 'icon', href: '/vitepress_blog/favicon.ico'}]],
        nav: nav,
        sidebar: sidebar,
        search: {
            provider: 'local'
        }
    },
}