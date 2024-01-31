export default class Chat {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onBtn = this.onBtn.bind(this);
    this.closeBtn = this.closeBtn.bind(this);
  }

  bindToDom() {
    this.divCircle = document.createElement('div');
    this.divCircle.classList.add('circle');

    this.parentEl.appendChild(this.divCircle);

    this.chatDiv = document.createElement('div');
    this.chatDiv.classList.add('chat-container');
    this.chatDiv.innerHTML = Chat.markup;

    this.parentEl.appendChild(this.chatDiv);

    const x = this.chatDiv.querySelector('span');
    x.addEventListener('click', this.closeBtn);
    this.divCircle.addEventListener('click', this.onBtn);
  }

  static get markup() {
    return `
        <label for="textarea"><h3>Напишите нам</h3></label><span>X</span>
        <textarea id="textarea" class="text-area" rows="10"></textarea>
        <button class="send-btn">Отправить</button>
	`;
  }

  onBtn(event) {
    event.preventDefault();

    this.chatDiv.classList.add('open-chat');
    this.divCircle.classList.add('close-circle');
  }

  closeBtn(event) {
    event.preventDefault();
    this.chatDiv.classList.replace('open-chat', 'close-chat');
    this.divCircle.classList.replace('close-circle', 'open-circle');
    this.chatDiv.classList.remove('close-chat');
    this.divCircle.classList.remove('open-circle');
  }
}
