const popupMenu = document.getElementById('popup');
const closeBtn = document.getElementById('close');
const resultDiv = document.getElementById('result');
var zakatAmount = 0;

if(resultDiv){
    resultDiv.style.display = 'none';  
}

if(popupMenu){
    setTimeout(() => {
        popupMenu.classList.add('show');
    }, 3000);    
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => { popupMenu.classList.remove('show') });
}

function calculate() {
    resultDiv.style.display = 'block'; 
    amount = document.getElementById('amount').value;
    zakatAmount = amount * .025;
    document.getElementById('zakat_amount').innerHTML = zakatAmount;
}

function goToProducts() {
    const url = window.location.href + 'products.html?amount=' + zakatAmount;
    window.location.href = url;
};


