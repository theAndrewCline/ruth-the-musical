const navElements = document.querySelector('nav');

navElements.addEventListener('click', () => {

  let destinationId = event.target.getAttribute('id');
  let destination = document.querySelector(destinationId);

console.log('destination')

  destination.scrollIntoView({behavior: 'smooth' });
})