$(document).ready(function () {

    // function displayPic() {

    //     var queryURL = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=EUR&interval=1min&apikey=8YSO02BC18I74O6D";
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).done(function (response) {
    //         console.log(response)
    //     });
    // }
    // function searchForGif(response) {
    //     // $("#dopring").empty()
    //     var results = response.data;
    //     console.log(results)

    // }


    // $("#add-pic").on("click", function (event) {
    //     event.preventDefault();
    //     displayPic()


    // });


    var limit = 10000;    //increase number of dataPoints by increasing the limit
    var y = 100;    
    var data = [];
    var dataSeries = { type: "line" };
    var dataPoints = [];
    for (var i = 0; i < limit; i += 1) {
        y += Math.round(Math.random() * 10 - 5);
        dataPoints.push({
            x: i,
            y: y
        });
    }
    dataSeries.dataPoints = dataPoints;
    data.push(dataSeries);
    
    //Better to construct options first and then pass it as a parameter
    var options = {
        zoomEnabled: true,
        animationEnabled: true,
        title: {
            text: "Try Zooming - Panning"
        },
        axisY: {
            includeZero: false
        },
        data: data  // random data
    };
    
    $("#chartContainer").CanvasJSChart(options);
    


});