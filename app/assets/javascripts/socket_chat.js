// file: app/assets/javascripts/socket_chat.js
// please type it yourself, do NOT copy & paste

window.ws = new WebSocket("ws://" + window.document.location.host)
ws.onmessage = function(message) {
	console.log("received:", message)
};

