let imageContainer = document.querySelector(".image-container");
let loader = document.querySelector(".loader");
let ready = false;
let imageLoadednum = 0;
let totalImages = 0;
let photoArray = [];

//unsplash API
let count = 30;
let apiKey = "vtpo9CBtucfwfW5pi-em8_z86wGUNLTJTScOK67tUiw";
let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
function imageLoaded() {
  imageLoadednum++;
  console.log(imageLoadednum);
  if (imageLoadednum === totalImages) {
    ready = true;
    loader.hidden = true;
    console.log("ready=", ready);
  }
}

function displayPhotos() {
  imageLoadednum = 0;
  totalImages = photoArray.length;
  console.log("total images", totalImages);
  //run fun for each object in photeArray
  photoArray.forEach((photo) => {
    //create <a> to link unsplash

    let item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    //create<img>for photo
    let img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    //put <img> inside <a>
    item.appendChild(img);
    imageContainer.appendChild(item);
    img.addEventListener("load", imageLoaded);
  });
}
function fetchPhoto() {
  axios({
    url: apiUrl,
  })
    .then((res) => {
      let resData = res.data;
      photoArray = resData;
      //   for (let i = 0; i < resData.length; i++) {
      //     photoArray = resData[i];
      //     console.log(photoArray.urls.regular);
      displayPhotos();
      imageLoaded();
    })
    .catch((e) => console.log(e));
}
fetchPhoto();
//如果滾到接近頁尾，load more pics
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    fetchPhoto();
    console.log("load more");
  }
});
