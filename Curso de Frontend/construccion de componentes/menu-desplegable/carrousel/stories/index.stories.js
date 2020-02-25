export default { title: 'Button' };

export const withText = () => '<button class="btn">Alvaro Alvarez</button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};