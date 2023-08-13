const subhanallahdisplay = document.getElementById('subhanallahdisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');

let subhanAllahInitialValue = 0;

subhanAllahIncrimentBtn.addEventListener('click', function(){
    if (subhanAllahInitialValue === 33) {
        return alert('পুনরায় ১ থেকে শুরু করুন')
    }
    subhanAllahInitialValue += 1;
    subhanallahdisplay.innerText = subhanAllahInitialValue;
})
subhanAllahDecrimentBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 0) {
        return alert('আপনি সর্বনিম্নমান ০ তে চলে এসেছেন');
    }
    subhanAllahInitialValue -= 1;
    subhanallahdisplay.innerText = subhanAllahInitialValue;
})

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

let alhamdulillahInitialValue = 0;

alhamdulillahIncrimentBtn.addEventListener('click', function(){
    if (alhamdulillahInitialValue === 33) {
        return alert('পুনরায় ১ থেকে শুরু করুন')
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})
alhamdulillahDecrimentBtn.addEventListener('click', function(){
    if (alhamdulillahInitialValue === 0) {
        return alert('আপনি সর্বনিম্নমান ০ তে চলে এসেছেন')
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})

const allahuAkbardisplay = document.getElementById('allahuAkbardisplay');
const allahuAkbarIncrimentBtn = document.getElementById('allahuAkbarIncrimentBtn');
const allahuAkbarDecrimentBtn = document.getElementById('allahuAkbarDecrimentBtn');

let allahuAkbarInitialValue = 0;

allahuAkbarIncrimentBtn.addEventListener('click', function(){
    if (allahuAkbarInitialValue === 33) {
        return alert('পুনরায় ১ থেকে শুরু করুন')
    }
    allahuAkbarInitialValue += 1;
    allahuAkbardisplay.innerText = allahuAkbarInitialValue;
})
allahuAkbarDecrimentBtn.addEventListener('click', function(){
    if (allahuAkbarInitialValue === 0) {
        return alert('আপনি সর্বনিম্নমান ০ তে চলে এসেছেন')
    }
    allahuAkbarInitialValue -= 1;
    allahuAkbardisplay.innerText = allahuAkbarInitialValue;
})

resetAllBtn.addEventListener('click', function(){
    subhanallahdisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahuAkbardisplay.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuAkbarInitialValue = 0;
})