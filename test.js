function removeBanner() {
  const bannerElement = document.getElementById('rec551273201')
  const divElement = document.querySelector(".calendar-widget")

  bannerElement.style.visibility= 'hidden'
  divElement.style.visibility = 'visible'
}

const lastViewKey = 'lastView';

function blockHiding() {
  localStorage.setItem(lastViewKey, new Date().toString())
  const key = 'numberOfViews';
  const numberOfViews = localStorage.getItem(key)
  if (!numberOfViews) {
    localStorage.setItem(key, 1)
    return
  }
  const newNumberOfViews = Number(numberOfViews) + 1
  localStorage.setItem(key, newNumberOfViews)

  if (newNumberOfViews <= 3) {
    return;
  }
  removeBanner()
}

blockHiding()






