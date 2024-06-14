document.getElementById('send-btn').addEventListener('click', async () => {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (!message) return;
  
    const chatContainer = document.querySelector('.chat_container');
    chatContainer.innerHTML += `<div class="chat outgoing"><div class="chat-content"><p>${message}</p></div></div>`;
  
    const response = await fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });
  
    const data = await response.json();
    const botMessage = data.response;
  
    chatContainer.innerHTML += `<div class="chat incoming"><div class="chat-content"><p>${botMessage}</p></div></div>`;
    input.value = '';
  });
  
                                          

const themeButton = document.querySelector("#theme-btn");
const themeColor = localStorage.getItem("themeColor");

document.body.classList.toggle("light-mode", themeColor === "light_mode");
themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  localStorage.setItem("themeColor", themeButton.innerText);
  themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
});

const sendButton = document.querySelector("#send-btn");
sendButton.addEventListener("click", handleOutgoingChat);

const submit_button = document.getElementById('submit-button')

submit_button.addEventListener('click', (event) => {
  event.preventDefault()
  window.location.href = './templates/index.html'
});