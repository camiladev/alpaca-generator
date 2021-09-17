import constants from "./constants.js";
// import("./constants.js").then((module) => {
//   const constants = module.default;

function geraBtnGeral(btnGeral) {
  btnGeral.forEach((item) => {
    const button = document.getElementById(`id-${item}`);
    button.addEventListener("click", exibiBtn);
  });
}
geraBtnGeral(constants.btnGeral);

function styleBtn(name, src) {
  switch (name) {
    case "backgrounds":
      document.getElementById("imgBack").src = src;
      break;
    case "ears":
      document.getElementById("imgEars").src = src;
      break;
    case "accessories":
      document.getElementById("imgAcces").src = src;
      break;
    case "eyes":
      document.getElementById("imgEyes").src = src;
      break;
    case "hair":
      document.getElementById("imgHair").src = src;
      break;
    case "leg":
      document.getElementById("imgLeg").src = src;
      break;
    case "mouth":
      document.getElementById("imgMouth").src = src;
      break;
    case "neck":
      document.getElementById("imgNeck").src = src;
      break;
    case "nose":
      document.getElementById("imgNose").src = src;
      break;
    default:
      break;
  }
}

function geraBtn(origin, items) {
  const content = document.getElementById("contentBtn");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  items.forEach((item) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.setAttribute("name", `${item.name}`);
    btn.setAttribute("id", `id-${item.name}`);
    btn.innerText = `${item.name}`;
    content.appendChild(btn);

    btn.addEventListener("click", () => styleBtn(origin, item.url));
  });
}

function exibirMsg(origin) {
  const canvas = document.getElementById("msg");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("imgNuvem").src = "";

  ctx.beginPath();
  switch (origin) {
    case "backgrounds":
      document.getElementById("imgNuvem").src = "./assets/balao-3.png";
      ctx.fillText("Bo escolher", 210, 20);
      ctx.fillText("o fundo", 210, 30);
      break;
    case "ears":
      document.getElementById("imgNuvem").src = "./assets/balao-3.png";
      ctx.fillText("Ain,", 210, 20);
      ctx.fillText("minha orelha", 210, 30);
      break;
    case "accessories":
      document.getElementById("imgNuvem").src = "./assets/balao-3.png";
      ctx.fillText("Psiu escolhe", 210, 20);
      ctx.fillText("uma parada", 210, 30);
      ctx.fillText("legal", 210, 40);
      break;
    case "eyes":
      document.getElementById("imgNuvem").src = "./assets/balao-3.png";
      ctx.fillText("Cuidado com", 210, 20);
      ctx.fillText("meus olhos!!", 210, 30);
      break;
    case "hair":
      document.getElementById("imgNuvem").src = "./assets/balao-3.png";
      ctx.fillText("Ei, escolhe", 210, 20);
      ctx.fillText("um cabelo", 210, 30);
      ctx.fillText("maneiro", 210, 40);
      break;
    case "leg":
      document.getElementById("imgNuvem").src = "./assets/balao-3.png";
      ctx.fillText("Ain, cuidado,", 210, 20);
      ctx.fillText("minha perna", 210, 30);
      break;
    case "mouth":
      document.getElementById("imgNuvem").src = "./assets/balao-3.png";
      ctx.fillText("=)", 220, 20);
      break;
    case "neck":
      document.getElementById("imgNuvem").src = "./assets/balao-3.png";
      ctx.fillText("Ei ei ei...", 210, 20);
      break;
    case "nose":
      document.getElementById("imgNuvem").src = "./assets/balao-3.png";
      ctx.fillText("Há!!!", 210, 20);
      ctx.fillText("só tem esse", 210, 30);
      break;
    default:
      break;
  }
}

function exibiBtn(event) {
  switch (event.target.name) {
    case "backgrounds":
      geraBtn("backgrounds", constants.backgrounds);
      exibirMsg("backgrounds");
      break;
    case "ears":
      geraBtn("ears", constants.earsItem);
      exibirMsg("ears");
      break;
    case "eyes":
      geraBtn("eyes", constants.eyesItem);
      exibirMsg("eyes");
      break;
    case "hair":
      geraBtn("hair", constants.hairItem);
      exibirMsg("hair");
      break;
    case "leg":
      geraBtn("leg", constants.legItem);
      exibirMsg("leg");
      break;
    case "mouth":
      geraBtn("mouth", constants.mouthItem);
      exibirMsg("mouth");
      break;
    case "neck":
      geraBtn("neck", constants.neckItem);
      exibirMsg("neck");
      break;
    case "nose":
      geraBtn("nose", constants.noseItem);
      exibirMsg("nose");
      break;
    case "accessories":
      geraBtn("accessories", constants.accesItem);
      exibirMsg("accessories");
      break;
    default:
      break;
  }
}

function draw() {
  const imgBack = document.getElementById("imgBack");
  const imgEars = document.getElementById("imgEars");
  const imgNeck = document.getElementById("imgNeck");
  const imgNose = document.getElementById("imgNose");
  const imgHair = document.getElementById("imgHair");
  const imgEyes = document.getElementById("imgEyes");
  const imgMouth = document.getElementById("imgMouth");
  const imgLeg = document.getElementById("imgLeg");
  const imgAcces = document.getElementById("imgAcces");

  const canvas = document.getElementById("canvas");
  canvas.setAttribute("width", 500);
  canvas.setAttribute("height", 500);
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.drawImage(imgBack, 0, 0, 500, 500);
  ctx.drawImage(imgEars, 0, 0, 500, 500);
  ctx.drawImage(imgNeck, 0, 0, 500, 500);
  ctx.drawImage(imgNose, 0, 0, 500, 500);
  ctx.drawImage(imgHair, 0, 0, 500, 500);
  ctx.drawImage(imgEyes, 0, 0, 500, 500);
  ctx.drawImage(imgMouth, 0, 0, 500, 500);
  ctx.drawImage(imgLeg, 0, 0, 500, 500);
  ctx.drawImage(imgAcces, 0, 0, 500, 500);
  ctx.closePath();
}

function salvaAvatar() {
  draw();

  const canvas = document.getElementById("canvas");
  const imgURL = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");

  const a = document.createElement("a");
  a.href = imgURL;
  a.download = "avatar.png";
  document.body.appendChild(a);
  a.click();
}

const salvar = document.getElementById(`btn-download`);
salvar.addEventListener("click", salvaAvatar);

function getRandomInt(length){
  const min = Math.ceil(0);
  const max = Math.floor(length);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomAvatar() {

  document.getElementById("imgBack").src = constants.backgrounds[getRandomInt(constants.backgrounds.length)].url;
  document.getElementById("imgEars").src = constants.earsItem[getRandomInt(constants.earsItem.length)].url
  document.getElementById("imgAcces").src = constants.accesItem[getRandomInt(constants.accesItem.length)].url
  document.getElementById("imgEyes").src = constants.eyesItem[getRandomInt(constants.eyesItem.length)].url
  document.getElementById("imgHair").src = constants.hairItem[getRandomInt(constants.hairItem.length)].url
  document.getElementById("imgLeg").src = constants.legItem[getRandomInt(constants.legItem.length)].url
  document.getElementById("imgMouth").src = constants.mouthItem[getRandomInt(constants.mouthItem.length)].url
  document.getElementById("imgNeck").src = constants.neckItem[getRandomInt(constants.neckItem.length)].url
  document.getElementById("imgNose").src = constants.noseItem[0].url

}

const random = document.getElementById(`btn-random`);
random.addEventListener("click", randomAvatar);
// });
