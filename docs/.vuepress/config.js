module.exports = {
    base: '/blog/',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'SuperBiger',
            description: 'long-winded',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'SuperBiger',
            description: '碎碎念（叨逼叨~',
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/headicon.jpeg' }]
    ],
    themeConfig: {
        repo: 'https://github.com/superbiger/blog/issues',
        repoLabel: 'Discuss',
        displayAllHeaders: true,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                nav: [
                    { 
                        text: 'Starter',
                        items: [
                            { text: 'Preface', link: '/starter/preface/' },
                            { text: 'Language', link: '/starter/language/' },
                            { text: 'Algorithm', link: '/starter/algorithm/' },
                            { text: 'OO', link: '/starter/oo/' },
                            { text: 'SQL', link: '/starter/sql/' },
                            { text: 'UML', link: '/starter/uml/' },
                            { text: 'Animation', link: '/starter/animation/' }
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
                        text: 'Others',
                        items: [
                            { text: 'LeetCode', link: '/others/leetcode/' },
                            { text: 'My Work', link: '/others/mywork/' }
                        ]
                    }
                ]
            },
            '/zh/': {
                selectText: 'Languages',
                label: '简体中文',
                nav: [
                    { 
                        text: 'Starter',
                        items: [
                            { text: 'Preface', link: '/zh/starter/preface/' },
                            { text: 'Language', link: '/zh/starter/language/' },
                            { text: 'Algorithm', link: '/zh/starter/algorithm/' },
                            { text: 'OO', link: '/zh/starter/oo/' },
                            { text: 'SQL', link: '/zh/starter/sql/' },
                            { text: 'UML', link: '/zh/starter/uml/' },
                            { text: 'Animation', link: '/zh/starter/animation/' }
                        ]
                    },
                    { 
                        text: 'DevOps',
                        items: [
                            { text: 'Docker', link: '/zh/devops/docker/' },
                            { text: 'Nginx', link: '/zh/devops/nginx/' },
                            { text: 'Git', link: '/zh/devops/git/' }
                        ]
                    },
                    { 
                        text: 'Work',
                        items: [
                            { text: 'Product Manager', link: '/zh/work/product/' },
                            { text: 'Frontend Engineer', link: '/zh/work/frontend/' },
                            { text: 'Backend Engineer', link: '/zh/work/backend/' },
                        ]
                    },
                    { 
                        text: 'Others',
                        items: [
                            { text: 'LeetCode', link: '/zh/others/leetcode/' },
                            { text: 'My Work', link: '/zh/others/mywork/' },
                            { text: 'Recommend', link: '/zh/others/recommend/' }
                        ]
                    },
                    { text: 'Blog', link: '/zh/detail/' },
                ]
            }
        },
        sidebar: 'auto',
        lastUpdated: '上次更新时间'
    },
    ga: 'UA-125028289-1',
    markdown: {
        lineNumbers: true
    }
}