function validateform() {
    //cara ambil DOM
    let name = document.forms['messageform']['fullname'].value;
    let bdate = document.forms['messageform']['birth-date'].value;
    let gender = document.forms['messageform']['gender'].value;
    let messages = document.forms['messageform']['messages'].value;
    // validate input
    if (name == '' || bdate == '' || gender == '' || messages == '') {
      alert('Input tidak boleh kosong');
      return false;
    }
    
     
    // menampilkan value input di halaman lain
    document.getElementById('sender-fullname').innerText = name;
    document.getElementById('sender-birth-date').innerText = bdate;
    document.getElementById('sender-gender').innerText = gender;
    document.getElementById('sender-messages').innerText = messages;
    return false;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}
//slideshow untuk bikin slider di 1st section homepage
function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName('img-slideshow');
  if (n > imgList.length) slideIndex = 1;
  // slide index value 3, karena imglist.length = slideIndex
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = 'none';
  }

  imgList[slideIndex - 1].style.display = 'block';
}

setInterval(() => {
  plusDivs(1);
}, 2000);