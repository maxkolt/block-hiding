function removeBanner() {
  const bannerElement = document.getElementById('rec551273201')
  const divElement = document.querySelector(".calendar-widget")

  // if(localStorage.last){
  //   if( (localStorage.last - Date.now() ) / (1000*60*60*24) >= 1){ //Date.now() is in milliseconds, so convert it all to days, and if it more than 1 day, show the div
  //     document.getElementById('bannerElement').style.display = 'block'; //Show the div
  //     localStorage.last = Date.now(); //Reset your timer
  //   }
  // }
  // else {
  //   localStorage.last = Date.now();
  //   document.getElementById().style.display = 'block';


  bannerElement.style.visibility = 'hidden'
  divElement.style.visibility = 'visible'
}

const clientStartDay = 'clientStartDay';

const lastViewKey = 'lastView';
let date = new Date().getTime()
let clientStart = Date.parse(localStorage.getItem(clientStartDay))

//let bla = clientStart.getTime()
console.log(date)
console.log(clientStart)
//console.log(bla)


function blockHiding() {
  localStorage.setItem(lastViewKey, new Date().getTime())
  //localStorage.setItem(clientStartDay, new Date().getTime())

  const key = 'numberOfViews';
  const numberOfViews = localStorage.getItem(key)
  if (!numberOfViews ) {
    localStorage.setItem(key, 0)
    localStorage.setItem(clientStartDay, new Date().toString())
    return
  }
   else if (numberOfViews > 0 && date - clientStart >= 10000) {
    localStorage.setItem(key, 0)
    localStorage.setItem(clientStartDay, new Date().toString())
  }
  else if (numberOfViews > 0 && date - clientStart < 10000 ){
    localStorage.setItem(key, 0)
    localStorage.getItem(clientStartDay)
  }

  const newNumberOfViews = Number(numberOfViews) + 1
  localStorage.setItem(key, newNumberOfViews)

  if (newNumberOfViews <= 3) {
    return;
  }
  removeBanner()
}

blockHiding()




