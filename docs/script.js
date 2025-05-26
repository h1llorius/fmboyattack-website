function startAttack() {
        const ip = document.getElementById("t").value;
        const bots = document.getElementById("v").value;

        alert(`Launching ${bots} bots at IP: ${ip}`);
        
    }

document.getElementById("attak").addEventListener("click", startAttack);