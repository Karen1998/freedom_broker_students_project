import '@styles/main.css';

const init = () => {
  // Application entry point
};

document.addEventListener('DOMContentLoaded', init);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
