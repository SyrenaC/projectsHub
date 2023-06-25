setInterval(() => {
  let topBackground = document.querySelector("section.background-image");
  if (
    topBackground.style.backgroundImage === 'url("./pictures/羽球首頁1.jpg")'
  ) {
    topBackground.style.backgroundImage = 'url("./pictures/羽球首頁2.jpg")';
  } else if (
    topBackground.style.backgroundImage === 'url("./pictures/羽球首頁2.jpg")'
  ) {
    topBackground.style.backgroundImage = 'url("./pictures/羽球首頁3.jpg")';
  } else {
    topBackground.style.backgroundImage = 'url("./pictures/羽球首頁1.jpg")';
  }
}, 3000);
