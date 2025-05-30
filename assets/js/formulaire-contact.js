const form = document.querySelector('.contact-form form');
const msg = document.getElementById('form-message');
if(form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    msg.textContent = '';
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        msg.textContent = '✅ Merci, votre message a bien été envoyé !';
        msg.style.color = 'green';
        form.reset();
      } else {
        msg.textContent = '❌ Une erreur est survenue. Merci de réessayer.';
        msg.style.color = 'red';
      }
    } catch (err) {
      msg.textContent = '❌ Une erreur est survenue. Merci de réessayer.';
      msg.style.color = 'red';
    }
  });
}