export const initTheme = () => {
  if (typeof window !== 'undefined') {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

