module.exports = {
    title: 'SuperBiger',
    description: '碎碎念',
    base: '/blog/',
    themeConfig: {
        repo: 'https://github.com/superbiger/blog',
        displayAllHeaders: true,
        nav: [
            { text: '首页', link: '/' },
            { text: 'LeetCode', link: '/leetcode/'},
            { text: 'System', link: '/system/' },
            { text: 'DevOps', link: '/devops/' },
            { text: 'Product', link: '/product/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'About', link: '/about/' }
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated'
    },
    configureWebpack: {
        resolve: {
            alias: {
            '@alias': '/assets'
            }
        }
    }
}