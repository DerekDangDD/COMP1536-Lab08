$(document).ready(function() {
  //Location of pokemon in the array. bulbasaur, charmander, squirtle = 0,1,2
  var selectedPokemon = 0;
  setDescription()
  //Selecting a pokemon
  document.getElementById("Bulbasaur").onclick = function(){
    selectedPokemon = 0;
    setDescription();
    console.log("pick me" + selectedPokemon);
    }
    document.getElementById("Charmander").onclick = function(){
    selectedPokemon = 1;
      setDescription();
    console.log("pick me" + selectedPokemon);
    }
      document.getElementById("Squirtle").onclick = function(){
    selectedPokemon = 2;
        setDescription()
    console.log("pick me" + selectedPokemon);
    }
      
    // Description button function
    $('#description-btn').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        setDescription()
      
    });
  //Sets the HTML description
  function setDescription(){
    $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data.Pokemon);
                var div = $("#info");
                let htmlStr = "<p>" + data.Pokemon[selectedPokemon].Description + "</p>";

                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
  }
  
      // gets the regional numbers
    $('#regionalNum-btn').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#info");
                let htmlStr = "<ul>";
                htmlStr += "<li>Central: " + data.Pokemon[selectedPokemon].Regional_Numbers.Central + "</li>";
                htmlStr += "<li>Johto: " + data.Pokemon[selectedPokemon].Regional_Numbers.Johto + "</li>";
                htmlStr += "<li>Kanto: " + data.Pokemon[selectedPokemon].Regional_Numbers.Kanto + "</li>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
      
    });
        // gets the stats
    $('#stats-btn').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#info");
                let htmlStr = "<ul>";
                htmlStr += "<li>Generation: " +data.Pokemon[selectedPokemon].Generation + "</li>";
                htmlStr += "<li>ID: " + data.Pokemon[selectedPokemon].ID + "</li>";
                htmlStr += "<li>Type: " + data.Pokemon[selectedPokemon].Type+ "</li>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
      
    });
  
          // gets the pictures
    $('#picture-btn').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data.Pokemon[selectedPokemon].Image.picture1);
                var div = $("#info");
                let htmlStr = "<img src='" + data.Pokemon[selectedPokemon].Image.picture1 +"'>"
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
      
    });


});
