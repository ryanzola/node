var socket = io();

$(() => {
    $('#send').click(sendMessage);

    $(document).keypress(( e ) => {
        if ( e.which == 13 )
            sendMessage();
      });

    getMessages();
})

socket.on('message', addMessage);

function addMessage(message) {
    $('#messages').append(`
    <p class="message-name">${message.name}</p>
    <p class="message-content">${message.message}</p>
    `);

    updateScrollbar();
}

function getMessages() {
    $.get('http://localhost:3000/messages', (data) => {
        data.forEach(addMessage);
    })
}

function postMessage(message) {
    $.post('http://localhost:3000/messages', message)
}

function sendMessage() {
    var message = {
        name: $('#name').val(), 
        message: $('#message').val()
    };

    $('#message').val("");
    postMessage(message);
}

function updateScrollbar() {
    $("#messages").scrollTop($('#messages').prop("scrollHeight"));
  }