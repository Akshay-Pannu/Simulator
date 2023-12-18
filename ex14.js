
const messages = [
  "Initializing Hacking...", "<br>",
  "Reading Your Files...", "<br>",
  "Password Files Detected...", "<br>",
  "Sending All Passwords And Personal Files To The Server...", "<br>",
  "Cleaning Up..."
];

async function wait() {
  let htt = document.querySelector(".hacker");

  for (const message of messages) {
    htt.innerHTML += message;
    await sleep(getRandomDelay());
  }

  function sleep(sec) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve(true)

      }, sec)
    })
  }

  function getRandomDelay() {
    return Math.floor(Math.random() * 7000)
  }

}

wait();


