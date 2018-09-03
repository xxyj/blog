module.exports = {
    base: '/blog/',
    title: 'SuperBiger',
    description: '碎碎念（叨逼叨~',
    head: [
        ['link', { rel: 'icon', href: '/headicon.jpeg' }]
    ],
    themeConfig: {
        repo: 'https://github.com/superbiger/blog/issues',
        repoLabel: 'Discuss',
        displayAllHeaders: true,
        nav: [
            // { text: 'Starter', link: '/starter/' },
            { text: 'LeetCode', link: '/leetcode/'},
            // { text: 'System', link: '/system/' },
            { 
                text: 'DevOps',
                items: [
                    { text: 'Vim', link: '' },
                    { text: 'Docker', link: '' },
                    { text: 'Nginx', link: '' },
                    { text: 'Ansible', link: '' },
                    // { text: 'Kubernetes', link: '' },
                    { text: 'Opentracing', link: '' },
                    { text: 'Git', link: '' }
                ]
            },
            // { text: 'Product', link: '/product/' },
            // { text: 'Frontend', link: '/frontend/' },
            // { text: 'Design', link: '/design/' },
            // { text: 'Book', link: '/book/' },
            // { text: 'Paper', link: '/paper/' },
            { text: 'Blog', link: '/detail/' },
            { 
                text: 'Others',
                items: [
                    { text: '我的作品', link: '/production/' },
                    // { text: '招聘信息', link: '' },
                    { text: 'GitHub', link: 'https://github.com/superbiger' }
                ]
            }
        ],
        sidebar: 'auto',
        lastUpdated: 'Last Updated'
    },
    ga: 'UA-125028289-1',
    markdown: {
        lineNumbers: true
    }
}