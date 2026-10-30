function copyContactEmail() {
  const emailEl = document.getElementById('emailText');
  if (!emailEl) return;

  const email = emailEl.innerText;
  navigator.clipboard.writeText(email).then(() => {
    const feedback = document.getElementById('copyFeedback');
    const btn = document.getElementById('copyBtn');

    if (feedback) feedback.classList.add('show');
    if (btn) btn.textContent = 'Copied!';

    setTimeout(() => {
      if (feedback) feedback.classList.remove('show');
      if (btn) btn.textContent = 'Copy Email';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy email:', err);
  });
}
