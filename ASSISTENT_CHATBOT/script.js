const containerChoose = document.getElementById("ContainerChoose").children;
const storageChat = document.getElementById("StorageChat");
const childrenStorageChat = document.getElementById("StorageChat").children;

const containerSettings = document.getElementById("ContainerChoose");
containerSettings.style.top = "400px";
let dot = "";
let statusClickChat = 0;
let statusAI = 0;
let valuesNormalTop_newParagph = "90px";
let valuesNormalTop_newChatAi = "50px";

const chatBot = [
  "You only need download roblox in original web",
  "You need money first",
  "Ofcourse,NO!!!",
  "Ofcourse,What a stupid question dude",
];

function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds));
}

for (const buttons of containerChoose) {
  buttons.addEventListener("click", async function () {
    containerSettings.style.display = "none";
    let newParagph = document.createElement("p");
    newParagph.id = "Buttons";
    newParagph.className = buttons.id;
    storageChat.appendChild(newParagph);
    if (statusClickChat === 1) {
      let changeIntValues_newParagphTop = parseInt(valuesNormalTop_newParagph);
      newParagph.style.top += changeIntValues_newParagphTop + 90 + "px";
      valuesNormalTop_newParagph = newParagph.style.top;
    } else if (statusClickChat === 0) {
      statusClickChat += 1;
    }
    for (let count = 0; count < 3; count++) {
      dot += ".";
      await delay(350);
      newParagph.textContent = dot;
    }
    dot = "";
    await delay(200);
    newParagph.textContent = buttons.textContent;
    let recentTops = parseInt(containerSettings.style.top);
    containerSettings.style.top = recentTops + 30 + "px";
    buttons.remove();
    let newChatAi = document.createElement("p");
    newChatAi.id = "ChatsBOT";
    newChatAi.style.top = "50px";
    let currentTopsAi = parseInt(newChatAi.style.top);
    newChatAi.style.top = currentTopsAi + 80 + "px";
    storageChat.appendChild(newChatAi);
    if (statusAI === 1) {
      let changeIntValues_newChatAI = parseInt(valuesNormalTop_newChatAi);
      if (changeIntValues_newChatAI < 200) {
        newChatAi.style.top = changeIntValues_newChatAI + 170 + "px";
        console.log(newChatAi.style.top);
        valuesNormalTop_newChatAi = newChatAi.style.top;
      } else if (changeIntValues_newChatAI > 200) {
        if (changeIntValues_newChatAI > 200) {
          if (changeIntValues_newChatAI > 300) {
            changeIntValues_newChatAI = 0;
          }
          if (changeIntValues_newChatAI > 200) {
            newChatAi.style.top = changeIntValues_newChatAI + 90 + "px";
            console.log(newChatAi.style.top);
            valuesNormalTop_newChatAi = newChatAi.style.top;
          }
          if (changeIntValues_newChatAI === 0) {
            changeIntValues_newChatAI = 300;
            newChatAi.style.top = changeIntValues_newChatAI + 90 + "px";
            valuesNormalTop_newChatAi = newChatAi.style.top;
            console.log(newChatAi.style.top);
          }
        }
      }
    } else if (statusAI === 0) {
      statusAI += 1;
    }
    for (let count = 0; count < 3; count++) {
      dot += ".";
      await delay(350);
      newChatAi.textContent = dot;
    }
    dot = "";
    await delay(200);
    if (buttons.id === "Choose1") {
      newChatAi.textContent = chatBot[0];
    } else if (buttons.id === "Choose2") {
      newChatAi.textContent = chatBot[1];
    } else if (buttons.id === "Choose3") {
      newChatAi.textContent = chatBot[2];
    } else if (buttons.id === "Choose4") {
      newChatAi.textContent = chatBot[3];
    }
    containerSettings.style.display = "flex";
  });
}
