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
        ]
    },

    methods: {}
});