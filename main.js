document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.getElementById("copyEmailBtn");
  const emailTarget = document.getElementById("emailTarget");

  if (copyBtn && emailTarget) {
    copyBtn.addEventListener("click", () => {
      const email = emailTarget.innerText.trim();
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "COPIED ✓";
        copyBtn.style.background = "#10b981";
        setTimeout(() => {
          copyBtn.innerText = originalText;
          copyBtn.style.background = "";
        }, 2200);
      }).catch(err => {
        console.error("Clipboard copy failed: ", err);
      });
    });
  }
});
