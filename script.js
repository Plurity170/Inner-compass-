let state = { calm: 50, clarity: 50, discipline: 50 };

const scenes = {
  start: {
    text: "Someone speaks to you with disrespect in front of others.",
    choices: [
      {
        text: "React immediately",
        effect: { calm: -10, clarity: -5 },
        wisdom: "Power without direction burns the holder first."
      },
      {
        text: "Stay silent",
        effect: { calm: -5, clarity: -10 },
        wisdom: "What you suppress still speaks—just later."
      },
      {
        text: "Address it later calmly",
        effect: { calm: +10, clarity: +10 },
        wisdom: "Direction turns strength into influence."
      }
    ]
  }
};

function loadScene(scene) {
  document.getElementById("story").innerText = scenes[scene].text;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  scenes[scene].choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => {
      applyEffect(choice.effect);
      document.getElementById("wisdom").innerText = choice.wisdom;
    };
    choicesDiv.appendChild(btn);
  });
}

function applyEffect(effect) {
  for (let key in effect) {
    state[key] += effect[key];
  }
}

loadScene("start");