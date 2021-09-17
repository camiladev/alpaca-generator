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
      document.getElementById("img-Back").src = src;
      break;
    case "ears":
      document.getElementById("img-Ears").src = src;
      break;
    case "accessories":
      document.getElementById("img-Acces").src = src;
      break;
    case "eyes":
      document.getElementById("img-Eyes").src = src;
      break;
    case "hair":
      document.getElementById("img-Hair").src = src;
      break;
    case "leg":
      document.getElementById("img-Leg").src = src;
      break;
    case "mouth":
      document.getElementById("img-Mouth").src = src;
      break;
    case "neck":
      document.getElementById("img-Neck").src = src;
      break;
    case "nose":
      document.getElementById("img-Nose").src = src;
      break;
    default:
      break;
  }
}

function geraBtn(origin, items) {
  const content = document.getElementById("sub-buttons-container");

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
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "msg-funny")
  canvas.classList.add("msg-funny")  
  const ctx = canvas.getContext("2d");

  const imgNuvem = document.createElement("img");
  imgNuvem.setAttribute("id", "img-Nuvem")
  imgNuvem.src = "";
  
  const avatarContainer = document.getElementById("avatar");
  avatarContainer.appendChild(imgNuvem)

  if(document.getElementById("msg-funny")){
    console.log("achei canvas");
    avatarContainer.removeChild(avatarContainer.firstChild)
  }

  avatarContainer.appendChild(canvas)
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  switch (origin) {
    case "backgrounds":
      document.getElementById("img-Nuvem").src = "./assets/balao-3.png";
      ctx.fillText("Bo escolher", 210, 20);
      ctx.fillText("o fundo", 210, 30);
      break;
    case "ears":
      document.getElementById("img-Nuvem").src = "./assets/balao-3.png";
      ctx.fillText("Ain,", 210, 20);
      ctx.fillText("minha orelha", 210, 30);
      break;
    case "accessories":
      document.getElementById("img-Nuvem").src = "./assets/balao-3.png";
      ctx.fillText("Psiu escolhe", 210, 20);
      ctx.fillText("uma parada", 210, 30);
      ctx.fillText("legal", 210, 40);
      break;
    case "eyes":
      document.getElementById("img-Nuvem").src = "./assets/balao-3.png";
      ctx.fillText("Cuidado com", 210, 20);
      ctx.fillText("meus olhos!!", 210, 30);
      break;
    case "hair":
      document.getElementById("img-Nuvem").src = "./assets/balao-3.png";
      ctx.fillText("Ei, escolhe", 210, 20);
      ctx.fillText("um cabelo", 210, 30);
      ctx.fillText("maneiro", 210, 40);
      break;
    case "leg":
      document.getElementById("img-Nuvem").src = "./assets/balao-3.png";
      ctx.fillText("Ain, cuidado,", 210, 20);
      ctx.fillText("minha perna", 210, 30);
      break;
    case "mouth":
      document.getElementById("img-Nuvem").src = "./assets/balao-3.png";
      ctx.fillText("=)", 220, 20);
      break;
    case "neck":
      document.getElementById("img-Nuvem").src = "./assets/balao-3.png";
      ctx.fillText("Ei ei ei...", 210, 20);
      break;
    case "nose":
      document.getElementById("img-Nuvem").src = "./assets/balao-3.png";
      ctx.fillText("Há!!!", 210, 20);
      ctx.fillText("só tem esse", 210, 30);
      break;
    default:
      break;
  }
}

function exibiBtn(event) {
  
  const btnsDetails = document.getElementsByClassName('details')
  
  if (btnsDetails.length > 0) {
    document.getElementById(btnsDetails[0].id).classList.remove('details')
  }  

  switch (event.target.name) {
    case "backgrounds":
      geraBtn("backgrounds", constants.backgrounds);
      exibirMsg("backgrounds");      
      document.getElementById(event.target.id).classList.add('details');
      break;
    case "ears":
      geraBtn("ears", constants.earsItem);
      exibirMsg("ears");
      document.getElementById(event.target.id).classList.add('details')
      break;
    case "eyes":
      geraBtn("eyes", constants.eyesItem);
      exibirMsg("eyes");
      document.getElementById(event.target.id).classList.add('details')
      break;
    case "hair":
      geraBtn("hair", constants.hairItem);
      exibirMsg("hair");
      document.getElementById(event.target.id).classList.add('details')
      break;
    case "leg":
      geraBtn("leg", constants.legItem);
      exibirMsg("leg");
      document.getElementById(event.target.id).classList.add('details')
      break;
    case "mouth":
      geraBtn("mouth", constants.mouthItem);
      exibirMsg("mouth");
      document.getElementById(event.target.id).classList.add('details')
      break;
    case "neck":
      geraBtn("neck", constants.neckItem);
      exibirMsg("neck");
      document.getElementById(event.target.id).classList.add('details')
      break;
    case "nose":
      geraBtn("nose", constants.noseItem);
      exibirMsg("nose");
      document.getElementById(event.target.id).classList.add('details')
      break;
    case "accessories":
      geraBtn("accessories", constants.accesItem);
      exibirMsg("accessories");
      document.getElementById(event.target.id).classList.add('details')
      break;
    default:
      break;
  }
}

function draw(canvas) {
  const imgBack = document.getElementById("img-Back");
  const imgEars = document.getElementById("img-Ears");
  const imgNeck = document.getElementById("img-Neck");
  const imgNose = document.getElementById("img-Nose");
  const imgHair = document.getElementById("img-Hair");
  const imgEyes = document.getElementById("img-Eyes");
  const imgMouth = document.getElementById("img-Mouth");
  const imgLeg = document.getElementById("img-Leg");
  const imgAcces = document.getElementById("img-Acces");

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
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "download-avatar")
  canvas.classList.add("download-avatar")
  canvas.setAttribute("width", 500);
  canvas.setAttribute("height", 500);
  draw(canvas);

  const imgURL = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");

  const a = document.createElement("a");
  a.href = imgURL;
  a.download = "avatar.png";
  a.setAttribute("id", "link-download")
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

  document.getElementById("img-Back").src = constants.backgrounds[getRandomInt(constants.backgrounds.length)].url;
  document.getElementById("img-Ears").src = constants.earsItem[getRandomInt(constants.earsItem.length)].url
  document.getElementById("img-Acces").src = constants.accesItem[getRandomInt(constants.accesItem.length)].url
  document.getElementById("img-Eyes").src = constants.eyesItem[getRandomInt(constants.eyesItem.length)].url
  document.getElementById("img-Hair").src = constants.hairItem[getRandomInt(constants.hairItem.length)].url
  document.getElementById("img-Leg").src = constants.legItem[getRandomInt(constants.legItem.length)].url
  document.getElementById("img-Mouth").src = constants.mouthItem[getRandomInt(constants.mouthItem.length)].url
  document.getElementById("img-Neck").src = constants.neckItem[getRandomInt(constants.neckItem.length)].url
  document.getElementById("img-Nose").src = constants.noseItem[0].url

}

const random = document.getElementById(`btn-random`);
random.addEventListener("click", randomAvatar);
// });
