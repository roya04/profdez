const closeBtn = document.getElementById('menuClose');
const menuBtn = document.getElementById('menuIcon');
const menu = document.getElementById('menu');
const bottom_overlay=document.getElementById('bottom-overlay')
menuBtn.addEventListener('click', function () {
    menu.classList.add('active')
    bottom_overlay.classList.add('active')

  });
  closeBtn.addEventListener('click', function () {
    menu.classList.remove('active')
    bottom_overlay.classList.remove('active')



  });
  function toggleList(listId) {
    var list = document.getElementById(listId);

    if (!list.classList.contains('open')) {
        list.classList.add('open');
        list.style.maxHeight = list.scrollHeight + 'px';
    } else {
        list.classList.remove('open');
        list.style.maxHeight = '0';
    }
}
window.addEventListener('scroll', function () {
    var header = document.getElementById('header');

    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
