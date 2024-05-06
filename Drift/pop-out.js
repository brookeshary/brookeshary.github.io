function togglePopOut() {
  var popOut = document.getElementById('popOutWindow');
  var computedStyle = window.getComputedStyle(popOut);
  if (computedStyle.display === 'none') {
      popOut.style.display = 'block';
  } else {
      popOut.style.display = 'none';
  }
}