

var counter = 10;
var interval;

function intro() {
    $("#quiz").hide();
}

$(document).ready(function(){
    intro();

    $("#start").on("click",function() { 
        $(".jumbotron").hide();
        $("#quiz").show();
        interval = setInterval(timer, 1000);
        
    });
});

function timer() {
    counter--;
    if (counter === 0) {
        clearInterval(interval);
    }
    $("#display").html("<h1>"+ counter +"</h1>");
   
}

$("#submit").on("click", function () {
    
    var q1 = $("input[name=q1]:checked").val();
    return q1;
    console.log(q1);
    $("#score").html(q1)

});

// get user input












// $(document).ready(function (){

// })



// $(document).ready(function () {
//     intro();

//     $("#start").on("click", function () {
//         $("#quiz").show();
//         $("#startPage").hide();
//         setTimer = setInterval(timer, 1000);
//     });
// }

//  function timer() {
//         count--;
//         if (count === 0) {
//             clearInterval(setTimer);
//         }
//         console.log(count);
//         $("#display").html("<h1>" + count + "</h1>");

//     }



