const clock = document.querySelector(".live-time");

function updateTime() {
  const date = new Date();
  const mins = date.getMinutes();
  const seconds = date.getSeconds();
  const hours = date.getHours();
  let session = "AM";

  if (hours > 12) session = "PM";

  h = hours < 10 ? "0" + hours : hours;
  m = mins < 10 ? "0" + mins : mins;
  s = seconds < 10 ? "0" + seconds : seconds;

  let time = `${h}:${m}:${s} ${session}`;
  clock.innerText = time;
}

setInterval(() => {
  updateTime();
}, 1000);
