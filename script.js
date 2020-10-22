console.log("It's working! It's working!");



$("#nav-search-btn").on("click", function (event) {
    $("#display-card").html("");
    userSearch = $("#this-is-a-search-bar").val();
    pokemoncardURL = "https://api.pokemontcg.io/v1/cards?name=" + userSearch;
    event.preventDefault();
    console.log(userSearch);
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
