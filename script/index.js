const backgrounds = [
  {
    name: "blue50",
    url: "./assets/backgrounds/blue50.png",
  },
  {
    name: "blue60",
    url: "./assets/backgrounds/blue60.png",
  },
  {
    name: "blue70",
    url: "./assets/backgrounds/blue70.png",
  },
  {
    name: "darkblue30",
    url: "./assets/backgrounds/darkblue30.png",
  },
  {
    name: "darkblue50",
    url: "./assets/backgrounds/darkblue50.png",
  },
  {
    name: "darkblue70",
    url: "./assets/backgrounds/darkblue70.png",
  },
  {
    name: "default",
    url: "./assets/backgrounds/default.png",
  },
  {
    name: "green50",
    url: "./assets/backgrounds/green50.png",
  },
  {
    name: "green60",
    url: "./assets/backgrounds/green60.png",
  },
  {
    name: "green70",
    url: "./assets/backgrounds/green70.png",
  },
  {
    name: "grey40",
    url: "./assets/backgrounds/grey40.png",
  },
  {
    name: "grey70",
    url: "./assets/backgrounds/green60.png",
  },
  {
    name: "grey80",
    url: "./assets/backgrounds/grey80.png",
  },
  {
    name: "red50",
    url: "./assets/backgrounds/red50.png",
  },
  {
    name: "red60",
    url: "./assets/backgrounds/red60.png",
  },
  {
    name: "red70",
    url: "./assets/backgrounds/red70.png",
  },
  {
    name: "yellow50",
    url: "./assets/backgrounds/yellow50.png",
  },
  {
    name: "yellow60",
    url: "./assets/backgrounds/yellow60.png",
  },
];

const earsItem = [
  {
    name: "default",
    url: "./assets/ears/default.png",
  },
  {
    name: "tilt-backward",
    url: "./assets/ears/tilt-backward.png",
  },
  {
    name: "tilt-forward",
    url: "./assets/ears/tilt-forward.png",
  },
];

const accesItem = [
  {
    name: "default",
    url: "./assets/accessories/default.png",
  },
  {
    name: "earings",
    url: "./assets/accessories/earings.png",
  },
  {
    name: "flower",
    url: "./assets/accessories/flower.png",
  },
  {
    name: "glasses",
    url: "./assets/accessories/glasses.png",
  },
];

const eyesItem = [
  {
    name: "default",
    url: "./assets/eyes/default.png",
  },
  {
    name: "angry",
    url: "./assets/eyes/angry.png",
  },
  {
    name: "naughty",
    url: "./assets/eyes/naughty.png",
  },
  {
    name: "panda",
    url: "./assets/eyes/panda.png",
  },
  {
    name: "smart",
    url: "./assets/eyes/smart.png",
  },
  {
    name: "star",
    url: "./assets/eyes/star.png",
  },
];

const hairItem = [
  {
    name: "default",
    url: "./assets/hair/default.png",
  },
  {
    name: "bang",
    url: "./assets/hair/bang.png",
  },
  {
    name: "curls",
    url: "./assets/hair/curls.png",
  },
  {
    name: "elegant",
    url: "./assets/hair/elegant.png",
  },
  {
    name: "fancy",
    url: "./assets/hair/fancy.png",
  },
  {
    name: "quiff",
    url: "./assets/hair/quiff.png",
  },
  {
    name: "short",
    url: "./assets/hair/short.png",
  },
];

const legItem = [
  {
    name: "default",
    url: "./assets/leg/default.png",
  },
  {
    name: "bubble-tea",
    url: "./assets/leg/bubble-tea.png",
  },
  {
    name: "cookie",
    url: "./assets/leg/cookie.png",
  },
  {
    name: "game-console",
    url: "./assets/leg/game-console.png",
  },
  {
    name: "tilt-backward",
    url: "./assets/leg/tilt-backward.png",
  },
  {
    name: "tilt-forward",
    url: "./assets/leg/tilt-forward.png",
  },
];

const mouthItem = [
  {
    name: "default",
    url: "./assets/mouth/default.png",
  },
  {
    name: "astonished",
    url: "./assets/mouth/astonished.png",
  },
  {
    name: "eating",
    url: "./assets/mouth/eating.png",
  },
  {
    name: "laugh",
    url: "./assets/mouth/laugh.png",
  },
  {
    name: "tongue",
    url: "./assets/mouth/tongue.png",
  },
];

const neckItem = [
  {
    name: "default",
    url: "./assets/neck/default.png",
  },
  {
    name: "bend-backward",
    url: "./assets/neck/bend-backward.png",
  },
  {
    name: "bend-forward",
    url: "./assets/neck/bend-forward.png",
  },
  {
    name: "thick",
    url: "./assets/neck/thick.png",
  },
];

const noseItem = [
  {
    name: "default",
    url: "./assets/nose/default.png",
  },
];

const btnGeral = [
  "backgrounds",
  "ears",
  "eyes",
  "hair",
  "leg",
  "mouth",
  "neck",
  "nose",
  "accessories",
];

function geraBtnGeral(btnGeral) {
  btnGeral.forEach((item) => {
    const button = document.getElementById(`id-${item}`);
    button.addEventListener("click", exibiBtn);
  });
}
geraBtnGeral(btnGeral);

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
      geraBtn("backgrounds", backgrounds);
      break;
    case "ears":
      geraBtn("ears", earsItem);
      break;
    case "eyes":
      geraBtn("eyes", eyesItem);
      break;
    case "hair":
      geraBtn("hair", hairItem);
      break;
    case "leg":
      geraBtn("leg", legItem);
      break;
    case "mouth":
      geraBtn("mouth", mouthItem);
      break;
    case "neck":
      geraBtn("neck", neckItem);
      break;
    case "nose":
      geraBtn("nose", noseItem);
      break;
    case "accessories":
      geraBtn("accessories", accesItem);
      break;
    default:
      break;
  }
}