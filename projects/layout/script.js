const navigateBack = () => {
  if (document.referrer) {
    window.history.back()
  } else {
    window.location.href = '../../index.html#home'
  }
};
