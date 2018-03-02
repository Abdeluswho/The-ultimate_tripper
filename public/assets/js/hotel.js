$(document).ready(() => {
<<<<<<< gf2

    //================== *********** Trip-From *********** Submition event ==============
=======
    
//======================== *********Trip-From ******** submition event===========
>>>>>>> master
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

<<<<<<< gf2
      //GET data from the API using User-Input --------------------------------------
=======
      //GET data from the API unsing User input -------------------------------------
>>>>>>> master

        $.ajax({
            url: "/user/" + destination,
            method: "GET",
            success: function(data) {
                console.log(data);
            }
        });

<<<<<<< gf2
        //===================== Results page ===============================
            //Post Form values to the server to save it in the DB
=======
//=========================Results page=========================================
      // Post Form values to the server to save it in the DB

>>>>>>> master
        $.ajax({
            url: "/api/results",
            method: "POST",
            data: obj,
            success: function(data) {
                console.log("success");
            }
        });

<<<<<<< gf2
        //GET data from DB to Populate it to the User

        $.ajax({
            url: "/api/results",
            method: "GET",
            data: "",//whatever we are pulling out from the database to generate results page,
            success: function (data) {
                console.log("success");
            }
        });
        
    }); //event ends

        //======================= ************ Login model ************ values =================

        $("#modal1").on("submit", (event) => {
            // login event for authentication!
            var userName = $("#user-name").val().trim();
            var password = $("#password").val() //needs some encryption
        });


        // ==================== Create ****** Account model values for the User table DB ===========
      
        $("#modal2").on('submit', (event) => {
            // login event for authentification 
            var userName = $("#user-name").val().trim();
            var email = $("#email").val();
            var password = $("#password").val() //needs some encryption
        });

=======
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
>>>>>>> master


        // ====================== Search bar valuse for a random results ===============

        $("#search").val() //needs an event handler
        

<<<<<<< gf2
    }); //DOM
=======
    
});//DOM
>>>>>>> master
