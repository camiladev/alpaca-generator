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

  function salvaAvatar(event) {
    const avatar = document.getElementById("avatar");
    console.log(avatar);

    let imgBack = new Image();
    imgBack.src = document.getElementById("imgBack").src;

    let imgEars = new Image();
    imgEars.src = document.getElementById("imgEars").src;

    let imgNeck = new Image();
    imgNeck.src = document.getElementById("imgNeck").src;

    let imgNose = new Image();
    imgNose.src = document.getElementById("imgNose").src;

    let imgHair = new Image();
    imgHair.src = document.getElementById("imgHair").src;

    let imgEyes = new Image();
    imgEyes.src = document.getElementById("imgEyes").src;

    let imgMouth = new Image();
    imgMouth.src = document.getElementById("imgMouth").src;

    let imgLeg = new Image();
    imgLeg.src = document.getElementById("imgLeg").src;

    let imgAcces = new Image();
    imgAcces.src = document.getElementById("imgAcces").src;

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.save();
    ctx.drawImage(imgBack, 0, 0, 300, 300);
    ctx.drawImage(imgEars, 0, 0, 300, 300);
    ctx.drawImage(imgNeck, 0, 0, 300, 300);
    ctx.drawImage(imgNose, 0, 0, 300, 300);
    ctx.drawImage(imgHair, 0, 0, 300, 300);
    ctx.drawImage(imgEyes, 0, 0, 300, 300);
    ctx.drawImage(imgMouth, 0, 0, 300, 300);
    ctx.drawImage(imgLeg, 0, 0, 300, 300);
    ctx.drawImage(imgAcces, 0, 0, 300, 300);
    ctx.restore();

    const reader = new FileReader();
    reader.onload = () => {
       const image = canvas.toDataURL("image/png")
       console.log(image);
       canvas.toBlod(blob => {
            saveAs(blob, "image.png")
       })
    }
    // console.log(image);
    // reader.readAsDataURL(ctx.src)

    
  }

  const salvar = document.getElementById(`btn-download`);
  salvar.addEventListener("click", salvaAvatar);
});
