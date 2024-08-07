// test .js file linked or not
// alert("ahmed")

// call items 
let id = document.getElementById('id');
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let crud = document.getElementsByClassName("crud");


// console.log(id,title,price,taxes,ads,discount,total,count,category,submit)

function getTotal()
{
    if(price.value != '' && taxes.value != '' && ads.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = 'total ' + result;
        total.style.background = '#040';
        document.getElementsByClassName("crud")[0].style.backgroundColor= 'gray';
    }else{
        total.innerHTML = '';
        total.style.background = '#a00d02';
        

    }
}



// get total
// create product
// save local storge
// clear inputs
// read
// count
// delete
// update
// search
// clean data

