import './style.css'
import './main.css'
import './media.css'

const toggleButton = document.querySelector('button.actions_button') as HTMLButtonElement;
const slide = document.querySelector('.additional') as HTMLDivElement;

if (toggleButton && slide) {
  toggleButton.addEventListener('click', () => {
    toggleButton.style.display = 'none';
    slide.style.transition = 'all 300ms';
    slide.classList.remove('additional--hidden')
  });
}
