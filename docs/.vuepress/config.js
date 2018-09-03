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
            { 
                text: 'Starter',
                items: [
                    { text: 'Preface', link: '' },
                    { text: 'Language', link: '' },
                    { text: 'Algorithm', link: '' },
                    { text: 'Network', link: '' },
                    { text: 'OO', link: '' },
                    { text: 'SQL', link: '' },
                    { text: 'UML', link: '' }
                ]
            },
            { 
                text: 'DevOps',
                items: [
                    { text: 'Vim', link: '' },
                    { text: 'Linux', link: '' },
                    { text: 'Docker', link: '' },
                    { text: 'Nginx', link: '' },
                    { text: 'Ansible', link: '' },
                    { text: 'Prometheus', link: '' },
                    { text: 'Kubernetes', link: '' },
                    { text: 'Opentracing', link: '' },
                    { text: 'Git', link: '' }
                ]
            },
            { 
                text: 'Work',
                items: [
                    { text: 'Product', link: '/product/' },
                    { text: 'Frontend', link: '/frontend/' },
                    { text: 'Backend', link: '/backend/' },
                    { text: 'Data', link: '/data/' }
                ]
            },
            {
                text: 'Recommend',
                items: [
                    { text: 'Paper', link: '/paper/' },
                    { text: 'Book', link: '/book/' },
                    { text: 'Website', link: '/website/' },
                    { text: 'Project', link: '/project/'}
                ]
            },
            { 
                text: 'Others',
                items: [
                    { text: 'LeetCode', link: '/others/leetcode/' },
                    { text: 'My Work', link: '/others/production/' }
                ]
            },
            { text: 'Blog', link: '/detail/' },
        ],
        sidebar: 'auto',
        lastUpdated: '上次更新时间'
    },
    ga: 'UA-125028289-1',
    markdown: {
        lineNumbers: true
    }
}