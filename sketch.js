let capture;
let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO, (stream) => {
    console.log('攝影機已啟動');
  });
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide(); // 確保隱藏 DOM 元素

  // 初始化 graphics
  graphics = createGraphics(windowWidth, windowHeight);
  graphics.background(0); // 設定背景為黑色
  for (let x = 0; x < graphics.width; x += 20) {
    for (let y = 0; y < graphics.height; y += 20) {
      graphics.fill(255); // 設定圓形顏色為白色
      graphics.noStroke();
      graphics.ellipse(x + 10, y + 10, 15); // 繪製直徑為15的圓
    }
  }
}

function draw() {
  background('#0077b6'); // 修改背景顏色
  image(graphics, 0, 0); // 繪製 graphics 到主畫布
  push(); // 儲存當前畫布狀態
  translate(width, 0); // 將畫布原點移到右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);
  pop(); // 恢復畫布狀態
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);

  // 重新調整 graphics 大小並繪製圖案
  graphics = createGraphics(windowWidth, windowHeight);
  graphics.background(0);
  for (let x = 0; x < graphics.width; x += 20) {
    for (let y = 0; y < graphics.height; y += 20) {
      graphics.fill(255);
      graphics.noStroke();
      graphics.ellipse(x + 10, y + 10, 15);
    }
  }
}
