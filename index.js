const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

onload = document.getElementById("light").className = "material-icons-sharp active";
let innitialState = 0;

// Toggle Sidebar Show
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});
// Toggle Sidebar Hide
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});
// Toggle Theme
themeToggler.addEventListener('click', () => {    
    document.body.classList.toggle('dark-theme-variables');

    if(innitialState % 2 == 0){                      
        document.getElementById("light").className = "material-icons-sharp";
        document.getElementById("dark").className = "material-icons-sharp active";
        innitialState++;
    }else{
        document.getElementById("dark").className = "material-icons-sharp";
        document.getElementById("light").className = "material-icons-sharp active";
        innitialState++;
    }
});
//Filling in the orders from 'orders.js'
Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
    <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});