const navElements = document.querySelector('nav');

navElements.addEventListener('click', () => {

  let destinationId = event.target.getAttribute('id');
  let destination = document.querySelector(destinationId);

  window.scroll({top:destination.offsetTop, left: 0, behavior: 'smooth' });
})