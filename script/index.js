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
    const back = document.getElementById(`id-${item}`);
    back.addEventListener("click", exibiBtn);
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
    default:
      break;
  }
}
