$(document).ready(() => {

//======================== *********Trip-From ******** submition event===========
    

$('#create-next-trip').modal({

        complete: function (){

            // event.preventDefault(); 
            var username = $('#usernm').val().trim();      
            var destination = $('#destination').val().trim();
            var dateStart = $('#date-start').val();
            var dateEnd = $('#date-end').val();
            var budget = $("#budget").val();

            var UserInput = {

             username,

             destination,

             dateStart,
             
             budget 

            }

            console.log(destination);
            console.log(dateStart);
            console.log(dateEnd);
            console.log(budget);

            

          //GET data from the API unsing User input -------------------------------------
        APIdata(destination);
    
        
        // result();

        }//callback function


})// modal event  end

    function APIdata(destination){
       

       $.ajax({
                url: "/user/" + destination, 
                method: "GET",
                success: function(data) {
                    console.log(data);
                }
            });
       
    }
        
    //=========================Results page=========================================
          // Post Form values to the server to save it in the DB
    function result(){
        //********************

        $.ajax({
                url: "/user/trip-result",
                method: "POST",
                data: UserInput,
                success: function(data) {
                    //data that was saved in the DB
                    console.log("data from POST success ", data);
                }
            });

          // GET data from DB to Populate it to the User

        $.ajax({
                url: "/user/trip-result",
                method: "GET",
                // data: // whatever we are pulling out from database to generate results page,
                success: function(data) {
                    console.log("data from GET success ", data);
                }
            });


        //*******************
    }










//********************************* === modal manipulation === ********************************************************

    $('.modal').modal();
     
     var $user = {};

    $('#create-account').modal({
      
      complete: function() { 

            var name = $('#name').val().trim();
            var username = $('#username-acc').val().trim();
            var email = $('#email').val();
            var password = $('#password-confirmation').val() //needs some encryption

            
            if (username && email && password) {

                alert('Closed');
                 $user= {
                    name,
                    username,
                    password,
                    email
                };

            console.log('new user: ', $user);

            register();

         
            }else {
                alert("Sorry! Can't create empty account");
            }

        } // Callback for Modal close
    });
//=================Create *****Account model****** values for the User table DB=================  
  function register() {
       // body...
  
    $.ajax({
            url: "/user/account/registration",
            method: "POST",
            data: $user,
            success: function(data) {
                //data that was saved in the DB
                console.log("data from user POST success ", data);
                }
            });

    $.ajax({
            url: "/user/account/registration",
            method: "GET",
            // data: // whatever we are pulling out from database to generate results page,
            success: function(data) {
                console.log("data from user GET success ", data);
                }
            });
 } 
//========================================== *Account modal end* ===========================================


//======================= ********Login model******* values========================================================
        var auth = {};

        $("#modal_log").modal({

            complete: function (){

                 // login event for authentification!
                var username = $('#user-name').val().trim();
                var password = $('#password').val(); //needs some encryption

                 auth = {

                    username,
                    password
                }

                console.log('username ', username, ' password ', password);

                login();
                
            }

        })

function login() {
    // body...

   
    $.ajax({
            url: "/user/account/login",
            method: "POST",
            data: auth,
            success: function(data) {
                //data that was saved in the DB
                console.log("data from login POST success ", data);
                }
            });

    $.ajax({
            url: "/user/account/login",
            method: "GET",
            // data: // whatever we are pulling out from database to generate results page,
            success: function(data) {
                alert("Success! You're logged in");
                }
            });
}
           
      

 //================================================================================================================

//********************************* === modal manipulation end === ********************************************************


 //======================Search bar values for a random results==============================
   ;
     
       //needs an event handler

     $('#search-button').on("click", function(event) {

  // Cancel the default action, if needed
          event.preventDefault();
            var search = $('#search').val()
            
            console.log(search);

             $.ajax({
                url: "/user/" + search, 
                method: "GET",
                success: function(data) {
                    console.log(data);



                   var title=  $('#title');
                   var content =  $('#content')
                   var newcard =  $('#newcard')

                   title.html("<h1>" + data.Hotel.Headline+ "</h1>");
                }
            });

               
          
       
           
         
});

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