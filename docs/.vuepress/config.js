module.exports = {
    title: 'SuperBiger',
    description: '碎碎念（叨逼叨~',
    base: '/blog/',
    themeConfig: {
        repo: 'https://github.com/superbiger/blog',
        displayAllHeaders: true,
        nav: [
            // { text: 'LeetCode', link: '/leetcode/'},
            // { text: 'System', link: '/system/' },
            // { text: 'DevOps', link: '/devops/' },
            // { text: 'Product', link: '/product/' },
            { text: 'Blog', link: '/detail/' }
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated'
    },
    ga: 'UA-125028289-1',
    markdown: {
        lineNumbers: true
    }
}