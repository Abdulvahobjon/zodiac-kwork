// Mavzuni saqlash uchun localStorage'dan foydalanish
const themeSelector = document.getElementById('theme-selector');
const rootElement = document.documentElement; // html element

// LocalStorage'dan mavzuni olish
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    rootElement.classList.toggle('dark', savedTheme === 'dark');
    themeSelector.value = savedTheme;
  } else {
    // Agar saqlangan tema bo'lmasa, tizimning mavzusini o'rnatamiz
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    rootElement.classList.toggle('dark', isSystemDark);
    themeSelector.value = isSystemDark ? 'dark' : 'light';
  }
}

// Tema o'zgarishini boshqarish
themeSelector.addEventListener('change', (event) => {
  const selectedTheme = event.target.value;
  rootElement.classList.toggle('dark', selectedTheme === 'dark');
  localStorage.setItem('theme', selectedTheme);
});

// Sayt yuklanganda mavzuni o'qish
loadTheme();


function limitInput(input) {
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2); // Faqat birinchi 2 raqamni qoldiradi
    }
}