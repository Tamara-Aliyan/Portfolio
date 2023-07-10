// portofilo filter

const filterButtons = document.querySelectorAll('.filter-button');
const items = document.querySelectorAll('.item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    
    filterButtons.forEach(button => {
      button.classList.remove('active');
    });
    button.classList.add('active');
    
    items.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// to top
const toTop=document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
  if(window.scrollY>100){
    toTop.classList.add("active");
  }
  else{
    toTop.classList.remove("active");
  }
});
