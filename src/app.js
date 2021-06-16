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
        ]
    },

    methods: {}
});