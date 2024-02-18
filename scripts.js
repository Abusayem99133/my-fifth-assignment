

function getRandomSetBtn(){
    const countSeatString = '1234';
    const numbers = countSeatString.split('');
    const randomSeats =Math.random()*3;
    const index = Math.round(randomSeats);
    const number = numbers[index];
    console.log(number) 
    return number;
}

function countSeatList(){
    const number = getRandomSetBtn();
     const currentSeatArea = document.getElementById('add-seat');
    currentSeatArea.innerText = number;
  
    setBgColorById(number);
}
function setBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-lime-500');
}

