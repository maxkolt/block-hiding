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

blockHiding()










// const getModalParam = () => (JSON.parse(localStorage.getItem(bannerElement)) || {});
// const countModalShowing = getModalParam()?.count || 0;
// const firstTimeOpeningModal = getModalParam()?.time;
// const onReloadPage = document.addEventListener("DOMContentLoaded", () => {
//   const currentDate = +new Date();
//   if (firstTimeOpeningModal && ((currentDate - firstTimeOpeningModal) >= 24 * 3600 * 1000)) {
//     localStorage.setItem(bannerElement, JSON.stringify({count: 1, time: currentDate}));
//     return;
//   }
//
//   if (!countModalShowing) {
//     localStorage.setItem(bannerElement, JSON.stringify({...getModalParam(), time: currentDate}));
//   }
// })

