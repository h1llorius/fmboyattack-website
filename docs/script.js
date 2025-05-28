const box = document.getElementById("console");
const button = document.getElementById("attak");
const output = document.getElementById("output");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms * 1000));
}
async function pp(message, stuff = 0) {
    sleep(stuff).then(() => {
        if (!output.innerText.includes(message)) {
            output.innerText += message + "\n";
        }
    });
}

async function p(message, stuff = 0) {
    sleep(stuff).then(() => {
        output.innerText += message + "\n";
    });
}
function clearConsole() {
    output.innerText = '';
}

function changeFontColor(color) {
    output.style.color = color;
}

async function getIPInfo() {
    const output = document.getElementById("output");

    try {
        const res = await fetch("https://ipinfo.io/json?token=77e221e3591c80");
        const data = await res.json();

        output.innerText = `
IP Address: ${data.ip}
City: ${data.city}
Region: ${data.region}
Country: ${data.country}
Postcode: ${data.postal}
Coordinates: ${data.loc}
Timezone: ${data.timezone}
Org: ${data.org}
        `;
    } catch (e) {
        output.innerText = "Failed to fetch IP info.";
        console.error(e);
    }
}

async function runAttack(ip, bots) {
    box.classList.add("visible");

    await pp("=== INITIATING DDOS ATTACK ===", 1);
    await pp(`=== ATTACKING IP: ${ip} ===`, 3);
    await pp(`=== ATTACKING WITH ${bots} BOTS ===`, 3);
    await pp("1% DONE", 4);
    await pp("51% DONE", 5);
    await pp("101% DONE", 7);
    await pp("=========================================", 8);
    await pp("=== ATTACK COMPLETE ===", 8.3);
    sleep(8.4).then(() => {
        clearConsole()
        changeFontColor("red")
    })
    
    await pp("=== INITIATING DDOS ATTACK ===", 8.5);
    await pp(`=== ATTACKING IP: ${ip} ===`, 8.5);
    await pp(`=== ATTACKING WITH ${bots} BOTS ===`, 8.51);
    await pp("1% DONE", 8.52);
    await pp("51% DONE", 8.9);
    await pp("101% DONE", 8.9);
    await pp("=========================================", 9);
    await pp("=== ATTACK COMPLETE ===", 9);
    sleep(9.1).then(() => {
        clearConsole()
    })
    await p("ERROR", 9.2)
    await p("ERROR", 9.3)
    await p("ERROR", 9.4)
    await p("ERROR", 9.5)
    await p("ERROR", 9.6)
    await p("ERROR", 9.7)
    await p("ERROR", 9.8)
    await p("ERROR", 9.9)
    await p("ERROR", 10)
        sleep(10.5).then(() => {
        clearConsole()
    })
            sleep(11).then(() => {
        getIPInfo()
    })
}

let cooldown = false;

button.addEventListener("click", async () => {
    if (cooldown) return;

    const ip = document.getElementById("t").value;
    const bots = document.getElementById("v").value;

    cooldown = true;
    button.disabled = true;
    button.innerText = "COOLDOWN...";

    await clearConsole();
    await runAttack(ip, bots);
    await changeFontColor("white");

    await sleep(10); // Cooldown lasts 10 seconds
    cooldown = false;
    button.disabled = false;
    button.innerText = "ATTAK!!";
});
