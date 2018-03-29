$(document).ready(function () {


    //stock API
    function info() {

        var queryURL = "https://api.iextrading.com/1.0/stock/aapl/batch?types=quote,news,chart&range=1m&last=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
        });
    }
    function searchForGif(response) {
        // $("#dopring").empty()
        var results = response.data;
        console.log(results)

    }


    info()




});