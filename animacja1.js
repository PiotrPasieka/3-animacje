
let pyszczek = document.querySelector('.swinka .pyszczek');
setInterval(() => {
    pyszczek.style.height = pyszczek.style.height === '30px' ? '20px' : '30px';
}, 500);

let powieki = document.querySelectorAll('.sowa .powieka');
setInterval(() => {
    powieki.forEach(powieka => {
        powieka.style.height = powieka.style.height === '20px' ? '0px' : '20px';
    });
}, 1000);


let rekaLewa = document.querySelector('.mis .reka.lewa');
setInterval(() => {
    rekaLewa.style.transform = rekaLewa.style.transform === 'rotate(-30deg)' ? 'rotate(0deg)' : 'rotate(-30deg)';
}, 500);
