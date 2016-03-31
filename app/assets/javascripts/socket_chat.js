// file: app/assets/javascripts/socket_chat.js
// please type it yourself, do NOT copy & paste

window.ws = new WebSocket("ws://" + window.document.location.host)
// ws.onmessage = function(message) {
// 	console.log("received:", message)
// };

ws.onmessage = function(message) {
      var data = JSON.parse(message.data)
      // use data.content and data.user in the html text below:
      var messageHtml = "<h3>chat message</h3>"
      $(".messages").append(messageHtml)
      // add some javascript animation here usng jQuery if you want
    }

function setupForm() {
    $("form#new_message").on("submit", function(event) {
      event.preventDefault();
      var content = $("#message_content").val();
      var user    = "user";
      // let's use JSON to convert an object into string
      ws.send(JSON.stringify({ content: content, user: user }));
      // clear the input text:
      $("#message_content").val('')
  });
}

  // use page:change to be compatible with turbolinks
  $(document).on("page:change", function(){
    setupForm();
  })