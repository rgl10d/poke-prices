console.log("It's working! It's working!");



$("#srch-button").on("click", function (event) {
    $("#display-card").html("");
    userSearch = $("#srch-bar").val();
    pokemoncardURL = "https://api.pokemontcg.io/v1/cards?name=" + userSearch;
    event.preventDefault();
    $.ajax({
        url: pokemoncardURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        for(i=0; i < response.cards.length; i++){
            cardImage = $("<img>").attr("src", response.cards[i].imageUrl);
            $("#display-card").append(cardImage);
        }
    });
});
