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
                    { text: 'Preface', link: '/starter/preface/' },
                    { text: 'Language', link: '/starter/language/' },
                    { text: 'Algorithm', link: '/starter/algorithm/' },
                    { text: 'OO', link: '/starter/oo/' },
                    { text: 'SQL', link: '/starter/sql/' },
                    { text: 'UML', link: '/starter/uml/' }
                ]
            },
            { 
                text: 'DevOps',
                items: [
                    { text: 'Docker', link: '/devops/docker/' },
                    { text: 'Nginx', link: '/devops/nginx/' },
                    { text: 'Git', link: '/devops/git/' }
                ]
            },
            { 
                text: 'Work',
                items: [
                    { text: 'Product Manager', link: '/work/product/' },
                    { text: 'Frontend Engineer', link: '/work/frontend/' },
                    { text: 'Backend Engineer', link: '/work/backend/' },
                ]
            },
            {
                text: 'Recommend',
                items: [
                    { text: 'Book', link: '/recommend/book/' },
                    { text: 'Project', link: '/recommend/project/'}
                ]
            },
            { 
                text: 'Others',
                items: [
                    { text: 'LeetCode', link: '/others/leetcode/' },
                    // { text: 'My Work', link: '/others/production/' }
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