
const seatsElement = document.getElementById("total-seats");
const totalPriceElement = document.getElementById("total-prices");
// const grandTotalPriceElement = document.getElementById("grand-total");
const addSeatElement = document.getElementById("add-seat");
const tableBody = document.getElementById("table-body");
const buttons = document.querySelectorAll('.sit-button');



const totalSeats =4;

let count = 0;
const perSeatPrice = 550;
let totalPrice = 0;


seatsElement.innerText = totalSeats;
totalPriceElement.innerText = totalPrice;
// grandTotalPriceElement.innerText = totalPrice;
addSeatElement.innerText = count;


function calculateSeatfunction (added) {
    return totalSeats - added;
}


// buttons.forEach((button, index) => {
    for(const button of buttons){
        button.addEventListener('click', function(){
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        count += 1;
        if(count > 4){
            alert('Maximum 4 allowed')
            return;
        }
        totalPrice += perSeatPrice;

        td1.innerText = button.innerText;
        td2.innerText = 'Economy';
        td3.innerText = perSeatPrice;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tableBody.appendChild(tr);

        seatsElement.innerText = calculateSeatfunction(count);
        addSeatElement.innerText = count;
        totalPriceElement.innerText = totalPrice;
        // grandTotalPriceElement.innerText = totalPrice;
        button.classList.replace('bg-[#eaebec]', 'bg-[#1dd100]');
    })
}


// next button 

function nextBtnCongratulation(){
    showElementById("congratulation-btn") 
    window.location.href = '#pop-up';
}

function showElementById(elementById){
    const element = document.getElementById(elementById);
    element.classList.remove('hidden')
}