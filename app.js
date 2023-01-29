$(document).ready(function () {
    const APIKEY = "63b7c054969f06502871ab6f";
    getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  

    $("#contact-submit").on("click", function (e) {
      e.preventDefault();
  
      let contactName = $("#contact-name").val();
      let contactEmail = $("#contact-email").val();
      let contactMessage = $("#contact-msg").val();
      let jsondata = {
        "name": contactName,
        "email": contactEmail,
        "message": contactMessage
      };
  

      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-2a8f.restdb.io/rest/contact",
        "method": "POST", 
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          $("#contact-submit").prop( "disabled", true);
          $("#add-contact-form").trigger("reset");
        }
      }
  
      //Send ajax request over to restDB and print response of the RESTDB storage to console.
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#contact-submit").prop( "disabled", false);
        $("#add-update-msg").show().fadeOut(3000);
        getContacts();
      });
    });
  
  
    //let's create a function to allow you to retrieve all the information in your contacts
    //by default we only retrieve 10 results
    function getContacts(limit = 10, all = true) {
  
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-2a8f.restdb.io/rest/contact",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      //[STEP 8]: Make our AJAX calls
      //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
      //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
      $.ajax(settings).done(function (response) {
        
        let content = "";
  
        for (var i = 0; i < response.length && i < limit; i++) {

          content = `${content}<tr id='${response[i]._id}'><td>${response[i].name}</td>
          <td>${response[i].email}</td>
          <td>${response[i].message}</td>
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-msg='${response[i].message}' data-name='${response[i].name}' data-email='${response[i].email}'>Update</a></td></tr>`;
  
        }
        $("#contact-list tbody").html(content);
  
        $("#total-contacts").html(response.length);
      });
  
  
    }
  
    $("#contact-list").on("click", ".update", function (e) {
      e.preventDefault();
      let contactName = $(this).data("name");
      let contactEmail = $(this).data("email");
      let contactMsg = $(this).data("msg");
      let contactId = $(this).data("id");
      console.log($(this).data("msg"));
  
      $("#update-contact-name").val(contactName);
      $("#update-contact-email").val(contactEmail);
      $("#update-contact-msg").val(contactMsg);
      $("#update-contact-id").val(contactId);
      $("#update-contact-container").show();
  
    });

    $("#update-contact-submit").on("click", function (e) {
      e.preventDefault();

      let contactName = $("#update-contact-name").val();
      let contactEmail = $("#update-contact-email").val();
      let contactMsg = $("#update-contact-msg").val();
      let contactId = $("#update-contact-id").val();
  
      console.log($("#update-contact-msg").val());
      console.log(contactMsg);

      updateForm(contactId, contactName, contactEmail, contactMsg);
    });
  

    function updateForm(id, contactName, contactEmail, contactMsg) {
  
      var jsondata = { "name": contactName, "email": contactEmail, "message": contactMsg };
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://interactivedev-2a8f.restdb.io/rest/contact/${id}`,//update based on the ID
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
  
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#update-contact-container").fadeOut(5000);

        getContacts();
      });
    }
  
  })