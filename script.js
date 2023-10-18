// Hamburger Navigation

function toggleMenu() {
  const menu = document.querySelector(".hamburger-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Showcase Movie Info
let previewMovies = document.querySelector(".showcase");
let previewBox = previewMovies.querySelectorAll(".preview");

document.querySelectorAll(".all-movies .movie").forEach(movie => {
  movie.onclick = () => {
    previewMovies.style.display = 'flex';
    let name = movie.getAttribute("data-name");
    previewBox.forEach(preview => {
      let target = preview.getAttribute("data-target");
      if(name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector(".fa-xmark").onclick = () => {
    close.classList.remove('active');
    previewMovies.style.display = 'none';
  };
});

// Fade
/* Fade Effects */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } 
      else {
        entry.target.classList.remove('show');
      }
  });
});

const hiddenElements3 = document.querySelectorAll('.hidden');
hiddenElements3.forEach((el) => observer.observe(el));  
