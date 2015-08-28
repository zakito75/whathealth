var datelastdweet = 0;
setInterval(recup, 5000);    

function recup() {
    $.ajax({
         url : "https://dweet.io:443/get/latest/dweet/for/cohealth",
        type: "GET",
        dataType: "json",
        success : function(response, statut) {

                      console.log(response);

                      var dweet = response.with[0].content;
                      //dweet.gps
                      //dweet.id
                      //dweet.message
                      var datedweet = response.with[0].created;


                      if ( datedweet!= datelastdweet) {
                          alert(dweet.id +" a déclenché une " + dweet.message + " depuis la position : " + dweet.gps);
                          datelastdweet = datedweet;
                      };

                  }
           });
       }