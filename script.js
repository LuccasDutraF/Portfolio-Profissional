// Theme toggle
const btn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if(saved === 'light'){ document.documentElement.classList.add('light'); }
btn.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light':'dark');
});
