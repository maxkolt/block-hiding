const clientStartDay = 'clientStartDay';
const lastViewKey = 'lastView';
const date = new Date().getTime()
const clientStart = Date.parse(localStorage.getItem(clientStartDay))
const key = 'numberOfViews';
const numberOfViews = localStorage.getItem(key)
const newNumberOfViews = Number(numberOfViews) + 1

function blockHiding() {
  localStorage.setItem(lastViewKey, new Date().toString())
  localStorage.setItem(key, newNumberOfViews)

  if (!numberOfViews) {
    localStorage.setItem(key, 1)
    localStorage.setItem(clientStartDay, new Date().toString())
    document.getElementById('rec551273201').style.display = 'block'
  } else if (date - clientStart >= 24 * 3600 * 1000) {
    localStorage.setItem(key, 1)
    localStorage.setItem(clientStartDay, new Date().toString())
    document.getElementById('rec551273201').style.display = 'block'
  } else if (numberOfViews <= 2 && date - clientStart < 24 * 3600 * 1000) {
    localStorage.getItem(clientStartDay)
    document.getElementById('rec551273201').style.display = 'block'
  } else if (numberOfViews > 2 && date - clientStart < 24 * 3600 * 1000) {
    localStorage.getItem(key)
    localStorage.getItem(clientStartDay)
    document.getElementById('rec553381877').style.display = 'block'
    document.getElementById('rec551273201').style.display = 'none'
  }
}
window.addEventListener("DOMContentLoaded", blockHiding)




