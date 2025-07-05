const button = document.getElementById('toggleButton');  
// Sidebar Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

if (menuToggle && sidebar && closeBtn) {
  menuToggle.addEventListener('click', function() {
    sidebar.classList.add('active');
  });

  closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
  });
}confirm('are you from jharkhand ?');
