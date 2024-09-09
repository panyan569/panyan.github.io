// 获取图片和按钮元素
var image = document.getElementById('myImage');
var button = document.getElementById('toggleButton');

// 切换图片的函数
function changeImage() {
  // 检查当前图片的src属性，并切换到另一张图片
  if (image.src.match("haina.jpg")) {
    image.src = "namei2.0.jpg"; // 切换到image2.jpg
  } else {
    image.src = "haina.jpg"; // 切换回image1.jpg
  }
}

// 为按钮添加点击事件监听器
button.addEventListener('click', changeImage);
