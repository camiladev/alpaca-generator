import("./constants.js").then((module) => {
  const constants = module.default;

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

  function exibiBtn(event) {
    switch (event.target.name) {
      case "backgrounds":
        geraBtn("backgrounds", constants.backgrounds);
        break;
      case "ears":
        geraBtn("ears", constants.earsItem);
        break;
      case "eyes":
        geraBtn("eyes", constants.eyesItem);
        break;
      case "hair":
        geraBtn("hair", constants.hairItem);
        break;
      case "leg":
        geraBtn("leg", constants.legItem);
        break;
      case "mouth":
        geraBtn("mouth", constants.mouthItem);
        break;
      case "neck":
        geraBtn("neck", constants.neckItem);
        break;
      case "nose":
        geraBtn("nose", constants.noseItem);
        break;
      case "accessories":
        geraBtn("accessories", constants.accesItem);
        break;
      default:
        break;
    }
  }

  function draw() {
    // let imgBack = new Image();
    const imgBack = document.getElementById("imgBack");
    // let imgEars = new Image();
    const imgEars = document.getElementById("imgEars");
    // let imgNeck = new Image();
    const imgNeck = document.getElementById("imgNeck");
    // let imgNose = new Image();
    const imgNose = document.getElementById("imgNose");
    // let imgHair = new Image();
    const imgHair = document.getElementById("imgHair");
    // let imgEyes = new Image();
    const imgEyes = document.getElementById("imgEyes");
    // let imgMouth = new Image();
    const imgMouth = document.getElementById("imgMouth");
    // let imgLeg = new Image();
    const imgLeg = document.getElementById("imgLeg");
    // let imgAcces = new Image();
    const imgAcces = document.getElementById("imgAcces");

    const canvas = document.getElementById("canvas");
    canvas.setAttribute('width', 500);
    canvas.setAttribute('height', 500);
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
    const imgURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
    
    const a = document.createElement('a');
    a.href = imgURL;
    a.download = 'avatar.png';
    document.body.appendChild(a);
    a.click();

  }

  const salvar = document.getElementById(`btn-download`);
  salvar.addEventListener("click", salvaAvatar);
});
