
// Based on https://www.bram.us/2020/04/26/the-quest-for-the-perfect-dark-mode-using-vanilla-javascript/
const setColorMode = (mode) => {
  if (mode) {
    document.documentElement.setAttribute('data-force-color-mode', mode);
    window.localStorage.setItem('color-mode', mode);
    document.querySelector('#toggle-darkmode').checked = (mode === 'dark');
  } else {
    document.querySelector('#toggle-darkmode').checked = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}

document.querySelector('#toggle-darkmode').addEventListener('click', (e) => {
  setColorMode(e.target.checked ? 'dark' : 'light');
});

