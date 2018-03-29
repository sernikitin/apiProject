
    //stock API
    var symbol = "placeholder"
    //stock API
    function info() {
        var company = symbol;
        console.log(company);
        var queryURL = "https://api.iextrading.com/1.0/stock/"+ company + "/initial-load?last=3";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            var results = response.company;
            console.log(results)
            var compName = results.companyName
            var compDescription =results.description
            var compExchange = results.exchange
            var compIndustry =results.industry
            var compSector= results.sector
            var compWebsite =results.website


            $("#info").append(compName).addClass("<div>").attr("class","new")


            // for ( var i =0; i<results.length; i++){
            //     var locationComp = $("<div class ='new'>")
            //     var moveTo= results[i].company;
            //     console
            //     locationComp.append(moveTo);
            //     $("#info").append(locationComp);
            // }
            

        });
    }
    
    $(".grab").on("click", function(){
        symbol = $(".userInput").val();
         info();
     })
    
       
            
        


//line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [20, 15, 25, 89, 12, 33, 66]
            }
        ]
    },
    options: {
        responsive: true
    }    
});
            

