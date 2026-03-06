const output = document.getElementById("textInput");
const button = document.getElementById("startBtn");

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'vi-VN';
recognition.continuous = false;
recognition.interimResults = false;

recognition.onstart = () => {
  button.textContent = "🎤 Đang nghe...";
  button.disabled = true;
};

recognition.onend = () => {
  button.textContent = "🎤 Bấm để nói";
  button.disabled = false;
};

recognition.onerror = (event) => {
  console.error("Lỗi:", event.error);
  output.textContent = "Lỗi nhận diện giọng nói: " + event.error;
};

recognition.onresult = (event) => {
  const text = event.results[0][0].transcript;
  output.value = text;
  output.innerHTML = `<strong>Bạn đã nói:</strong> ${text}`;
};

button.addEventListener("click", () => {
  recognition.start();
});