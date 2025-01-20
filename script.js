// 获取蜡烛和火焰元素
const candles = document.querySelectorAll('.velas');
const fires = document.querySelectorAll('.fuego');
const bear = document.getElementById('bear');
const blowButton = document.getElementById('blowButton');
const callButton =  document.getElementById('callButton');
const shop = document.getElementById('shop');
const playButton = document.getElementById('playButton');

window.onload = function() {
    setTimeout(function() {
      blowButton.style.display = 'block';  
      setTimeout(function() {
        shop.style.display = 'block';
        callButton.style.display = 'block'; 
        playButton.style.display = 'block';
      }, 1000);  
    }, 1000);  
  };

// 吹熄蜡烛函数
function blowCandles() {
  // 让蜡烛的火焰消失
  fires.forEach(fire => {
    fire.style.opacity = 0;
    fire.style.animation = 'none'; // 停止火焰动画
  });
}
// 监听按钮点击事件
blowButton.addEventListener('click', blowCandles);
// 吹熄蜡烛函数
function callBear() {
    // 显示小熊动画
    bear.style.display = 'block'; // 显示小熊
  }
  // 监听按钮点击事件
  callButton.addEventListener('click', callBear);

  // 播放音频
    const audio = new Audio('66.mp3');  // 创建音频对象，路径为相对路径或URL

    // 为按钮添加点击事件
    playButton.addEventListener('click', () => {
      audio.play();  // 播放音频
    });