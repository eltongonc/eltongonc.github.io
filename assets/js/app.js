( function(global) {
    "use strict";

    var options = (function(){
        self.sections = document.querySelectorAll('section')
        return {
            sections: self.sections,
            initRoute: checkExisting(location.hash)
        }
    })();


    // start app
    var app = {
        init: function(){
            routes.init();
        }
    };


    // create routes
    var routes = {
        init: function(){
            let { initRoute } = options;

            showSelected(initRoute)
            this.hashChange();
        },

        // change the route
        hashChange: function(){
            // source: https://developer.mozilla.org/nl/docs/Web/API/WindowEventHandlers/onhashchange
            window.onhashchange = function() {
                let  currentSection  = checkExisting(location.hash)
                // No need for new var just for this, btw use let/const consistently - Dave Bitter
                sections.toggle(currentSection);
            };
        },
    };


    // handles the sections
    var sections = {
        toggle: function(route){
            var selectedRoute = route;

            showSelected(selectedRoute)
            this.loadContent();
        },

        loadContent: function(){
            console.log("Content");
        }
    };


    app.init();

    // Shows only one section
    function showSelected(route) {
        let { sections } = global;

        // I replaced the for loop with a nice clean forEach Function - Dave Bitter
        sections.forEach(function (sec) {
            sec.classList.add("hidden");
        });

        route.classList.remove("hidden");
    }

    // Checks if a route exists
    function checkExisting(hash) {
        let { sections } = global
        let replacedHash = hash.replace("#","");
        let route, initRoute = "#webapp";

        sections.forEach((section)=>{
            if (section.id == replacedHash) {
                route = location.hash
            }
        })

        route == null || route == "" ? route = initRoute : route;

        return document.querySelector(route);
    }
})(this);
