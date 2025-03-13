
/*
apl to button call
*/
function loadcategoris(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=>res.json())
    .then((data)=>display(data.categories))
}
function display(categories){
   //index.html buttonSection call
    const buttonSection = document.getElementById('buttonSection');

    for(let cate of categories){
        // console.log(cate);
        const div = document.createElement('div');
        div.innerHTML=`
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cate.category
}</button>
        `
        buttonSection.appendChild(div);
    }
}

loadcategoris()