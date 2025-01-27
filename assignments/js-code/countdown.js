const output = document.querySelector('.output');
output.textContent = "";


for (let countDown = 10; countDown >= 0; countDown--) {
    const para = document.createElement('p');
    if (countDown === 10) {
        para.textContent = `Countdown ${countDown}`;
    } else if (countDown === 0) {
        para.textContent = `Blastoff!`
    } else {
        para.textContent = `${countDown}`
    }
    output.appendChild(para);
}