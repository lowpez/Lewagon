const card = document.querySelector(".circular")
const mainLink = document.querySelector('.main-link')
 
card.addEventListener("click", handleClick)
 
function handleClick(event) {
  mainLink.click();
}