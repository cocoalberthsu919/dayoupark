// 回到頂部功能
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // 平滑滾動
  });
});


var pano_iframe_name = "tour-embeded";
window.addEventListener("devicemotion", function(e){ var iframe = document.getElementById(pano_iframe_name); if (iframe) iframe.contentWindow.postMessage({ type:"devicemotion", deviceMotionEvent:{ acceleration:{ x:e.acceleration.x, y:e.acceleration.y, z:e.acceleration.z }, accelerationIncludingGravity:{ x:e.accelerationIncludingGravity.x, y:e.accelerationIncludingGravity.y, z:e.accelerationIncludingGravity.z }, rotationRate:{ alpha:e.rotationRate.alpha, beta:e.rotationRate.beta, gamma:e.rotationRate.gamma }, interval:e.interval, timeStamp:e.timeStamp } }, "*"); });
