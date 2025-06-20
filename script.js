function toggleStartMenu() {
  document.getElementById('startMenu').classList.toggle('hidden');
}

function showWindow(id) {
  document.getElementById(id).classList.remove('hidden');
  document.getElementById('startMenu').classList.add('hidden');
}

function hideWindow(id) {
  document.getElementById(id).classList.add('hidden');
}

function updateClock() {
  const clockElem = document.querySelector('.clock');
  const now = new Date();
  // Format time as HH:MM:SS (or use toLocaleTimeString() for a localized format)
  clockElem.textContent = now.toLocaleTimeString();
}

// Update every second
setInterval(updateClock, 1000);
updateClock();