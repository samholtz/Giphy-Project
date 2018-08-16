$(document).ready(function () {
    var topics = ["shaq", "michael jordan", "russel westbrook", "derrick rose", "chris paul", "dwayne wade", "donovan mitchell", "lebron james", "kobe bryant", "scottie pippen"];

    topics.forEach(function (player) {
        // 1. **
        var playerButton = $("<button>");
        playerButton.attr("data-person", player)
        playerButton.text(player)
        $("#players").append(playerButton)

    });


    $("button").on("click", function () {
        var person = $(this).attr("data-person");


        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            person + "&api_key=3BuWSkvS4uvukx5JINQT5m9bVuXi5naC";


        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                var results = response.data;
                console.log(results);

                for (var i = 0; i < 10; i++) {
                    var gifDiv = $("<div class='item'>");
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var personImage = $("<img class='gif'>");

                    // 3.**
                    personImage.attr("src", results[i].images.fixed_height_still.url);

                    personImage.attr("data-state", "still");
                    personImage.attr("data-still", results[i].images.fixed_height_still.url);
                    personImage.attr("data-animate", results[i].images.fixed_height.url);

                    gifDiv.append(p);
                    gifDiv.append(personImage);

                    $("#gifsGoHere").prepend(gifDiv);
                };

                $(".gif").on("click", function () {

                    var state = $(this).attr("data-state");
                    console.log(state);

                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }

                });

                function submitButton() {
                    // 1. create button based off search
                    // 2. call api
                    // 3. save attributes to image
                }

            });
    });
});







