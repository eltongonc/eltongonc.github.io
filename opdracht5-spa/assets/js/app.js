( function() {

    var section = document.querySelectorAll('section');
    var hash = "#home";

    var app = {
        init: function(){
            routes.init()
        }
    }

    var routes = {
        init: function(){

            console.log("Router initialized");
            this.hashChange(hash)
        },
        hashChange: function(hash){
            sections.toggle(hash)
        }

    };



    var sections = {
        toggle: function(route){
            var selectedRoute = document.querySelector(route);

            for (var i = 0; i < section.length; i++) {
                section[i].classList.add("hidden")
            }

            selectedRoute.classList.remove("hidden")

        }
    }




    app.init();


})()
