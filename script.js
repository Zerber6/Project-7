let input = document.querySelector('input');
input.addEventListener('keyup', (event) => {
  event.stopPropagation();
  let inputValue = event.target.value; 
  console.log(inputValue);
});