$(document).ready(() => {
    
//======================== *********Trip-From ******** submition event===========
    $("#form-submit").on("submit", (event) => { 
        // event.preventDefault();       
        var destination = $('#destination').val().trim();
        var dateStart = $('#date-start').val();
        var dateEnd = $('#date-end').val();
        var budget = $("#budget").val();

        var obj={
         destination,
         
         budget 

        }

        console.log(destination);
        console.log(dateStart);
        console.log(dateEnd);
        console.log(budget);

      //GET data from the API unsing User input -------------------------------------

        $.ajax({
            url: "/user/" + destination,
            method: "GET",
            success: function(data) {
                console.log(data);
            }
        });

//=========================Results page=========================================
      // Post Form values to the server to save it in the DB

        $.ajax({
            url: "/api/results",
            method: "POST",
            data: obj,
            success: function(data) {
                console.log("success");
            }
        });

      // GET data from DB to Populate it to the User

        $.ajax({
            url: "/api/results",
            method: "get",
            data: // whatever we are pulling out from database to generate results page,
            success: function(data) {
                console.log("success");
            }
        });
});//event ends

//======================= ********Login model******* values========================================

        $("#modal1").on('submit', (event) => {
            // login event for authentification!
            var userName = $('#user-name').val().trim();
            var passWord = $('#password').val() //needs some encryption
        })

 //=================================================================================


 //======================Create *****Account model****** values for the User table DB==============================

//******

        $("#modal2").on('submit', (event) => {
            // login event for authentification!
            var userName = $('#user-name').val().trim();
            var email = $('#email').val();
            var passWord = $('#password').val() //needs some encryption
        })





 //====================================================================================================













 //======================Search bar values for a random results==============================

        $('#search').val() //needs an event handler

 //====================================================================================================


        //============================= EVENTS API ==================================================
        // var eventqueryURL = "https://cryptic-headland-94862.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?city=" + destination + "&size=3&apikey=YxwPs1JETjjGeZ5DldVNzdgWDxSziGCo";

        // $.ajax({
        //     url: eventqueryURL,
        //     method: "GET"
        // }).done((result) => {
        //     var eventBody = result;
        //     console.dir(eventBody._embedded);
        // })

    
});//DOM