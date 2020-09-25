// const before = new Date('November 17 1992 7:05:42');
// const now = new Date();
// const diff = now.getTime() - before.getTime();

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours/24);

// console.log("You born before ",`${mins}`," minutes");
// console.log("You born before ",`${hours}`," hours");
// console.log("You born before ",`${days}`," days");

const clock = document.querySelector('.clock');

const tick = ()=>{
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    
    const html = 
    `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = html;
}

setInterval(tick, 1000);

const now = new Date();

console.log(dateFns.isToday(now));
console.log(dateFns.format(now, 'dddd, Do, MMM, YYYY'));

const before = new Date("Novemeber 17 1992 07:05:42");
console.log(dateFns.distanceInWords(now, before));
