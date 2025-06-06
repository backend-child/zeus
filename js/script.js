document.getElementById('waitlist-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  alert(`Thanks for joining, ${email}! We'll notify you when Zeus launches.`);
});


  

// const hamburger = document.getElementById("hamburger");
//   const navLinks = document.getElementById("nav-links");

//   hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("show");

//     // Animate hamburger icon
//     hamburger.classList.toggle("open");
//   });

