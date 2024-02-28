let image = document.getElementById('penrose');
// window.onload = (event) => {
//     var deg = Math.floor(Math.random() * 360 + 1);
//     image.style.transform = "rotate(" + deg + "deg)";
// };

var imageDiagonal = image.offsetWidth * Math.sqrt(2);
var bodyWidth = document.querySelector('body').offsetWidth;
var bodyHeight = document.querySelector('body').offsetHeight;
var widthDiff = bodyWidth - imageDiagonal;
var heightDiff = bodyHeight - imageDiagonal;

// console.log('diag: ' + imageDiagonal);
// console.log('bw: ' + bodyWidth);
// console.log('wd: ' + widthDiff);
// console.log('bh: ' + bodyHeight);
// console.log('hd: ' + heightDiff);

if (widthDiff < 50 ){
    // set new image width
    var newImageSide = bodyWidth / Math.sqrt(2) - 50;
    // console.log('new width: ' + newImageSide);   
    image.style.width = newImageSide + "px";        
    image.style.height = newImageSide + "px";        
} 

if (heightDiff < 50) {
    // set new image height
    var newImageSide = bodyHeight / Math.sqrt(2) - 50;
    // console.log('new height: ' + newImageSide);   
    image.style.width = newImageSide + "px";        
    image.style.height = newImageSide + "px";        
}
