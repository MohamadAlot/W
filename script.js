let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 500;
// animation

let drax = 45;
let dray = 40;

let dra2x = 160;
let dra2y = 150;

let dra3x = 160;
let dra3y = 210;

let dra4x = 20;
let dra4y = 250;
let birx = 200;
let biry = 20;
requestAnimationFrame(draw);
function draw() {
  // land

  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 400, 600, 100);

  const grad = ctx.createLinearGradient(0, 0, 0, 500);
  grad.addColorStop(0, "yellow");
  grad.addColorStop(1, "red");

  // Fill rectangle with gradient
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 600, 400);
  // sun
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(200, 350, 20, 0, 2 * Math.PI);
  ctx.fill();
  // sun
  ctx.fillStyle = "rgba(255,255,0,0.7)";
  ctx.beginPath();
  ctx.arc(200, 450, 20, 0, 2 * Math.PI);
  ctx.fill();
  // dragon 1
  let dragon = document.getElementById("dragon-img");
  ctx.drawImage(dragon, drax, dray, 85, 60);
  // dragon2
  let dragon2 = document.getElementById("dragon-img2");
  ctx.drawImage(dragon2, dra2x, dra2y, 100, 75);
  // dragon 3
  let dragon3 = document.getElementById("dragon-img3");
  ctx.drawImage(dragon3, dra3x, dra3y, 100, 75);

  // dragon 4
  let dragon4 = document.getElementById("dragon-img4");
  ctx.drawImage(dragon4, dra4x, dra4y, 160, 120);
  // BIRD
  let bird = document.getElementById("bird-img3");
  ctx.drawImage(bird, birx, biry, 150, 70);
  // island 1
  ctx.beginPath();
  ctx.ellipse(90, 455, 70, 30, Math.PI / 1, 0, 1 * Math.PI);
  ctx.fillStyle = "brown";
  ctx.fill();
  // island2 2ith castle
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.fillRect(400, 430, 200, 100, Math.PI / 1, 0, 1 * Math.PI);
  ctx.fill();
  //

  //
  ctx.beginPath();
  ctx.ellipse(500, 430, 100, 30, Math.PI / 1, 0, 1 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.fillStyle = "darkblue";
  ctx.beginPath();
  ctx.fillRect(420, 240, 50, 250);
  ctx.fill();
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.fillRect(430, 250, 10, 15);
  ctx.fill();

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  for (let i = 250; i <= 470; i += 30) {
    ctx.fillRect(450, i, 10, 15);
    ctx.fill();
  }
  for (let i = 250; i <= 470; i += 30) {
    ctx.fillRect(430, i, 10, 15);
    ctx.fill();
  }
  // 2nd tower
  ctx.fillStyle = "darkblue";
  ctx.beginPath();
  ctx.fillRect(500, 240, 50, 250);
  ctx.fill();
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.fillRect(510, 250, 10, 15);
  ctx.fill();

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  for (let i = 250; i <= 470; i += 30) {
    ctx.fillRect(510, i, 10, 15);
    ctx.fill();
  }
  for (let i = 250; i <= 470; i += 30) {
    ctx.fillRect(530, i, 10, 15);
    ctx.fill();
  }
  // island making

  // birds

  // title
  ctx.fillStyle = "Red";
  ctx.font = "20px Arial";
  ctx.fillText("My Dragon", 20, 20);

  if (drax >= 600) {
    drax = -85;
    dray = Math.random() * 250;
  }
  if (dra2x >= 600) {
    dra2x = -100;
    dra2y = Math.random() * 250;
  }
  if (dra3x >= 600) {
    dra3x = -85;
    dra3y = Math.random() * 250;
  }
  if (dra4x >= 600) {
    dra4y = Math.random() * 250;
    dra4x = -85;
  }
  if (birx >= 600) {
    birx = -85;
  }
  drax = drax + 0.9;
  dra2y = dra2y + -0.5;
  dra3x = dra3x + 1;
  dra4x = dra4x + 2.5;
  birx = birx + 1;

  requestAnimationFrame(draw);
}
