const app = new Vue({
    el: "#root",

    data: {

        navLinks: [
            "home",
            "about",
            "services",
            "process",
            "team",
            "blog"
        ],

        servicesCards:[
            {
                service: 'Audit & Assurance',                
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                icon:'fas fa-project-diagram'
            },
            {
                service: 'Financial Advisory',                
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                icon:'fas fa-briefcase'
            },
            {
                service: 'Analytics and M&A',                
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                icon:'fas fa-chart-bar'
            },
            {
                service: 'Middle Marketing',                
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                icon:'fas fa-paper-plane'
            },
            {
                service: 'Legal Consulting',                
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                icon:'fas fa-globe'
            },
            {
                service: 'Regulatory Risk',                
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                icon:'fas fa-inbox'
            },
        ],

        processSteps: [
            {
                number:"01",
                name:"Collection of information",
                description:"Lorem ipsum dolor sit amet consectetur.",
            },
            {
                number:"02",
                name:"Strategic planning",
                description:"Lorem ipsum dolor sit amet consectetur.",
            },
            {
                number:"03",
                name:"Assignment of responsabilities",
                description:"Lorem ipsum dolor sit amet consectetur.",
            },
            {
                number:"04",
                name:"Formatting process",
                description:"Lorem ipsum dolor sit amet consectetur.",
            },
            {
                number:"05",
                name:"Continuity formalization",
                description:"Lorem ipsum dolor sit amet consectetur.",
            },
        ],

        professionals: [
            {
                pic:"./dist/images/team-1.jpg",
                name:"David Cooper",
                role:"cto & co.funder"
            },
            {
                pic:"./dist/images/team-3.jpg",
                name:"Oliver Jones",
                role:"chief procurement"
            },
            {
                pic:"./dist/images/team-2.jpg",
                name:"Emma Lopez",
                role:"chief marketing"
            },
            {
                pic:"./dist/images/team-4.jpg",
                name:"T. Johnson",
                role:"ceo & president"
            },
        ],

        newsPics: [
            {
                pic:"./dist/images/news-1.jpg",
                description:"Increasing creativity is possible for everyone",
            },
            {
                pic:"./dist/images/news-2.jpg",
                description:"Because market research is part of the business plan",
            },
            {
                pic:"./dist/images/news-3.jpg",
                description:"Working from home is now a trend",
            },
        ],

        linksCols: [
            {
                colName:"About",
                links:[
                    "The Company",
                    "Institutional",
                    "Social & Events",
                    "Innovation",
                    "Environment",
                    "Technologies"
                ]
            },
            {
                colName:"Services",
                links:[
                    "Audit & Assurance",
                    "Financial Advisory",
                    "Analytics and M&A",
                    "Middle Marketing",
                    "Legal Consulting",
                    "Regulatory Risk"
                ]
            },
            {
                colName:"Support",
                links:[
                    "Responsability",
                    "Terms of Use",
                    "About Cookies",
                    "Privacy Policy",
                    "Accesibility",
                    "Information"
                ]
            },
        ]
    },

    methods: {}
});