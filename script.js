function removeBanner() {
  console.log('hello:')
  const bannerElement = document.getElementById('rec551273201')
  console.log(bannerElement)
  bannerElement.remove()
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

// removeBanner()

blockHiding()
