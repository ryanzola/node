$(() => {
    $('#send').click(() => {
        var message = {
            name: $('#name').val, 
            message: $('#message').val
        }
        postMessage(message);
    });
    getMessages();
})

function addMessages(message) {
    $('#messages')
    .append(
        `<h4>${message.name}</h4>
        <p>${message.message}</p>
        `);
}

function getMessages() {
    $.getJSON('http://localhost:3000/messages', (data) => {
        data.forEach(addMessages);
    })
}

function postMessage(message) {
    $.post('http://localhost:3000/messages', message, (data) => {
        data.forEach(addMessages);
    })
}