// test .js file linked or not
// alert("ahmed")

    /* all buttons = #e28743   this is for css  */
    /* cruds background = #76b5c5     this is for css  */

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
let crud = document.getElementsByClassName("crud")[0];

let root = document.querySelector(':root');

let mood = 'create';
let tmp;

// console.log(id,title,price,taxes,ads,discount,total,count,category,submit)


// get total


function getTotal()
{
    if(price.value != '' && taxes.value != '' && ads.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = 'Total ' + result;
        total.style.background = '#ed1f1f';
    }else{
        total.innerHTML = 'Total ';
        total.style.background = '#a52a2a';
    
    }
}



// create product

let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro = [];
}

submit.onclick = function(){
    let newPro = {
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category: category.value.toLowerCase(),
    }

    if(mood === 'create'){
        if(newPro.count > 1){
            for(let i = 0; i < newPro.count; i++){
                dataPro.push(newPro);
            }
        }else{
            dataPro.push(newPro);
        }

    }else{
        dataPro[tmp] = newPro;
        mood = 'create';
        submit.innerHTML = 'create';
        count.style.display = 'block';
        total.style.backgroundColor = getComputedStyle(root).getPropertyValue('--button-color-2'); 
    }

    
    localStorage.setItem('product', JSON.stringify(dataPro))
    console.log(newPro)

    clearData()
    showData()
    
}

// save local storge
// clear inputs

function clearData(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = 'Total';
    count.value = '';
    category.value = '';
}

// read

function showData()
{
    
    let table = '';
    for(let i = 0; i < dataPro.length; i++){
        
        table += `
            <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td id="myTd" class="ww">${dataPro[i].category}</td>
                <td><button onclick= "updateData(${i})" id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
            </tr>
        
        `

        // ssss = document.getElementById("table").rows[i].cells[7];
        if(dataPro[i].category === 'A'){
            console.log('Ahmed')

            // ssss.style.backgroundColor = 'red';
        // hhh = document.getElementsByClassName("ttttt")
        // hhh.style.backgroundColor = 'red';
        }


    }



    document.getElementById('tbody').innerHTML = table;

    let btnDelete = document.getElementById('deleteAll');
    if(dataPro.length > 0){
        btnDelete.innerHTML = `
            <button onclick="deleteAll()">Delete All (${dataPro.length})</button>
        `
    }else{
        btnDelete.innerHTML = '';
    }

}

showData()
// count
// delete

function deleteData(i){
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro)
    showData()
}

// delet all

function deleteAll(){
    localStorage.clear()
    dataPro.splice(0)
    showData()
}


// update

function updateData(i){
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    getTotal()
    count.style.display = "none";
    category.value = dataPro[i].category;
    submit.innerHTML = 'Update';
    submit.style.backgroundColor = 'green'; 
    mood = 'update';
    tmp = i;
    scroll({
        top: 0,
        behavior: "smooth",
    })
}


// search
let searchMood = 'title';

function getSearchMood(id){
    let search = document.getElementById('search');
    if(id == 'searchTitl'){
        searchMood = 'title';
           
    }else{
        searchMood = 'category';
    }
    search.focus()
    search.placeholder = 'Search By ' + searchMood;
    console.log(searchMood)
    search.value = '';
    showData();

}



function searchData(value){
    let table = '';
    for(let i = 0; i < dataPro.length; i++){
        if(searchMood == 'title')
            if(dataPro[i].title.includes(value.toLowerCase())){
                table += `
                <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td id="myTd" class="ww">${dataPro[i].category}</td>
                    <td><button onclick= "updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
            
                        `}
        else{
            if(dataPro[i].category.includes(value.toLowerCase())){
                table += `
                <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td id="myTd" class="ww">${dataPro[i].category}</td>
                    <td><button onclick= "updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr> `}
            
            }            
    
        }                 


    document.getElementById('tbody').innerHTML = table;
}   
    
      
        

        
      


// clean data

