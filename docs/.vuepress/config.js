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
                    { text: 'Network', link: '/starter/network/' },
                    { text: 'OO', link: '/starter/oo/' },
                    { text: 'SQL', link: '/starter/sql/' },
                    { text: 'UML', link: '/starter/uml/' }
                ]
            },
            { 
                text: 'DevOps',
                items: [
                    { text: 'Vim', link: '/devops/vim/' },
                    { text: 'Linux', link: '/devops/linux/' },
                    { text: 'Docker', link: '/devops/docker/' },
                    { text: 'Nginx', link: '/devops/nginx/' },
                    { text: 'Ansible', link: '/devops/ansible/' },
                    { text: 'Prometheus', link: '/devops/prometheus/' },
                    { text: 'Kubernetes', link: '/devops/kubernetes/' },
                    { text: 'Opentracing', link: '/devops/opentracing/' },
                    { text: 'Git', link: '/devops/git/' }
                ]
            },
            { 
                text: 'Work',
                items: [
                    { text: 'Product', link: '/work/product/' },
                    { text: 'Frontend', link: '/work/frontend/' },
                    { text: 'Backend', link: '/work/backend/' },
                    { text: 'Data', link: '/work/data/' }
                ]
            },
            {
                text: 'Recommend',
                items: [
                    { text: 'Paper', link: '/recommend/paper/' },
                    { text: 'Book', link: '/recommend/book/' },
                    { text: 'Website', link: '/recommend/website/' },
                    { text: 'Project', link: '/recommend/project/'}
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