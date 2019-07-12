const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const changeBackgroundColorButton = document.getElementById('changeBackgroundColorButton');
const myTextInput = document.getElementById('myTextInput');
const changeBackgroundColorInput = document.getElementById('changeBackgroundColorInput');
const pageBody = document.getElementById('body');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

changeBackgroundColorButton.addEventListener('click', () => {
  pageBody.style.backgroundColor = changeBackgroundColorInput.value;
});