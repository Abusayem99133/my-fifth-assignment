function countTicket(){
    getRandomSetBtn()
    countSeatList()
}



// conceptual

let count = 0;
const allbtn = document.getElementsByClassName('add-btn');

for( const btn of allbtn){
    btn.addEventListener('click', function(e){
        count = count + 1;
        
        const selectName = e.target.parentNode.childNodes[5].innerText;
        const selectName2 = e.target.parentNode.childNodes[7].innerText;
        // const selectName3 = e.target.parentNode.childNodes[8].innerText;
        // const selectName4 = e.target.parentNode.childNodes[8].innerText;
        
        const h2 = document.createElement('h');
        const p2 = document.createElement('p');
        p2.innerText = selectName2;
        
        const selectedInputSite = document.getElementById('Selected-input')
        
        const h = document.createElement('h');
        
        const p = document.createElement('p');
        p.innerText = selectName;
        // const p3 = document.createElement('p');
        // p.innerText = selectName3;
        // const p4 = document.createElement('p');
        // p.innerText = selectName4;
        
        
        h.appendChild(p);
        h.appendChild(p2);
        // h.appendChild(p3);
        // h.appendChild(p4);
        selectedInputSite.appendChild(h);
        
        overAllController('add-seat', count);
    })
}


function overAllController(id, value) {
    document.getElementById(id).innerText = value;
}