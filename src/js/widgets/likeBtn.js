import randomInteger from '../randomInteger';

export default class LikeBtn {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onBtn = this.onBtn.bind(this);
    this.position = [
      {
        0: 25, 25: 0, 50: 25, 75: 50, 100: 25,
      },
      {
        0: 25, 25: 25, 50: 50, 75: 0, 100: 25,
      },
      {
        0: 25, 25: 25, 50: 0, 75: 50, 100: 25,
      },
      {
        0: 25, 25: 50, 50: 25, 75: 0, 100: 25,
      },
    ];
  }

  bindToDom() {
    this.divLike = document.createElement('div');
    this.divLike.classList.add('like-container');

    this.btn = document.createElement('button');
    this.btn.classList.add('like-btn');
    this.btn.textContent = 'Like';

    this.divLike.appendChild(this.btn);
    this.parentEl.appendChild(this.divLike);

    this.btn.addEventListener('click', this.onBtn);
  }

  onBtn(event) {
    event.preventDefault();

    const divHeart = document.createElement('div');
    divHeart.classList.add('heart');
    const verticalPosition = 200;
    const horizontalPosition = 25;
    let opacity = 1;
    divHeart.style.transform = `translate(${horizontalPosition}px, ${verticalPosition}px)`;
    this.divLike.appendChild(divHeart);

    let index = 0;
    const track = randomInteger(0, 3);
    const keys = Object.keys(this.position[track]);

    const interval = setInterval(() => {
      const key = keys[index];
      const value = this.position[track][key];
      divHeart.style.transform = `translate(${value}px, ${verticalPosition - verticalPosition * key / 100}px)`;
      divHeart.style.opacity = opacity;
      opacity -= 0.25;
      index++;
      if (index === keys.length) {
        divHeart.remove();
        clearInterval(interval);
      }
    }, 100);
  }
}
