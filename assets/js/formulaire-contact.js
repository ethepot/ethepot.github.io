const form = document.querySelector('form');
const msg = document.querySelector('.message') || document.createElement('div');

// Si l'élément message n'existe pas, on le crée et l'ajoute après le formulaire
if (!document.querySelector('.message') && form) {
  msg.className = 'message';
  form.parentNode.insertBefore(msg, form.nextSibling);
}

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