    document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("contact-form").addEventListener("submit", async function(e) {
      e.preventDefault();

      const form = e.target;
      const popup = document.getElementById("contact-popup");

      // Honeypot check
      if (form._gotcha.value) return;

      const formData = new FormData(form);

      try {
        const response = await fetch("https://formspree.io/f/xnjoavyn", {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" }
        });

        if (response.ok) {
          popup.style.display = "block";
          form.reset();

          setTimeout(() => {
            popup.style.display = "none";
          }, 3000);
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Network error — please try again later.");
      }
    });
    document.getElementById("subscribe-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const popup = document.getElementById("subscribe-popup");

  // Honeypot check
  if (form._gotcha.value) return;

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xzdkpglj", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      popup.style.display = "block";
      form.reset();
      setTimeout(() => popup.style.display = "none", 3000);
    } else {
      alert("Subscription failed — please try again.");
    }
  } catch {
    alert("Network error — please try again later.");
  }
});