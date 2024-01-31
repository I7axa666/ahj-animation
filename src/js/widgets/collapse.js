export default class Collapse {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onBtn = this.onBtn.bind(this);
  }

  bindToDom() {
    this.divCollapse = document.createElement('div');
    this.divCollapse.classList.add('collapse');
    this.divCollapse.innerHTML = Collapse.markup;
    this.parentEl.appendChild(this.divCollapse);
    this.btn = this.parentEl.querySelector('.btn-collapse');
    this.text = this.parentEl.querySelector('.text');
    this.btn.addEventListener('click', this.onBtn);
  }

  static get markup() {
    return `
		<button class="btn-collapse">Collapse</button>
		<div class="text">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
			Aliquid quasi quisquam sequi ducimus distinctio aperiam minus 
			eaque facere asperiores, vel doloremque quos autem hic 
			corporis cum omnis numquam error iure.</p>
		</div>
		`;
  }

  onBtn(event) {
    event.preventDefault();
    if (this.text.classList.length < 2) {
      this.text.classList.add('open');
    } else if (this.text.classList.contains('open')) {
      this.text.classList.replace('open', 'close');
    } else {
      this.text.classList.replace('close', 'open');
    }
  }
}
