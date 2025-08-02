console.log("test")

function validateform(event) {
    event.preventDefault();

    const nameinput = document.getElementById('name-input');
    const emailinput = document.querySelector('input[type="email"]');
    const messageinput = document.querySelector('textarea[name="message"]');
    const infoBox = document.getElementById('infoBox');

    if (!nameinput || nameinput.value.trim() === '' ||
        !emailinput || emailinput.value.trim() === '' ||
        !messageinput || messageinput.value.trim() === '') {
        alert("Form cannot be empty");
        return;
    }


    const infoFields = infoBox.querySelector('div:last-child');
    if (infoFields) {
        infoFields.innerHTML = `
            <b>Name:</b> ${nameinput.value} <br />
            <b>Email:</b> ${emailinput.value} <br />
            <b>Message:</b> ${messageinput.value}
        `;
    }

    document.getElementById('message-output').textContent = `Hello, ${nameinput.value}! Your message has been sent.`;
}

function welcomemessage() {
    let welcomeName = prompt("Enter your name:");
    if (!welcomeName || welcomeName.trim() === "") {
        welcomeName = "Guest";
    } else {
        welcomeName = welcomeName.trim();
        welcomeName = welcomeName.charAt(0).toUpperCase() + welcomeName.slice(1);
    }
    const nameTarget = document.getElementById("welcomeName");
    if (nameTarget) {
        nameTarget.textContent = welcomeName;
    }
}

function updateTime() {
    const timeNow = new Date().toString();
    const timeEl = document.getElementById("currentTime");
    if (timeEl) {
      timeEl.textContent = timeNow;
    }
  }
  setInterval(updateTime, 1000);
  updateTime();

  welcomemessage();