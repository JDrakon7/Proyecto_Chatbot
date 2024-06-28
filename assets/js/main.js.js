
const data = await response.json();
const botMessage = data.response;

const response = await fetch('/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ message })
});


document.getElementById('send-btn').addEventListener('click', async () => {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (!message) return;
  
    const chatContainer = document.querySelector('.chat_container');
    chatContainer.innerHTML += `<div class="chat outgoing"><div class="chat-content"><p>${message}</p></div></div>`;
  
  
    chatContainer.innerHTML += `<div class="chat incoming"><div class="chat-content"><p>${botMessage}</p></div></div>`;
    input.value = '';
  });
  