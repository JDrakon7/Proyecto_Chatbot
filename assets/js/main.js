let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");
let classList = profileDropdownList.classList;

const toggle = () => classList.toggle("active");
window.addEventListener("click", function (e) {
  if (!btn.contains(e.target)) classList.remove("active");
});


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
    window.location.href = '/index.html'
  });