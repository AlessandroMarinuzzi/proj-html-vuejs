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
        ]
    },

    methods: {}
});