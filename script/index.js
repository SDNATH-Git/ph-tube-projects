
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

/*
* video card section API call 
*/
function loadVideoCard(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res)=>res.json())
    .then((data)=>displayVideo(data.videos))

}
const displayVideo = (videos) =>{

    const videoCard = document.getElementById('videoCard');

    videos.forEach((video)=>{
        // console.log(video);
        const divCard = document.createElement('div');
        divCard.innerHTML=`
         <div class="card bg-base-100 ">
            <figure class="relative">
                <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" />

                <span class="absolute mt-28 ml-36 bg-black text-white px-2 py-1 text-sm rounded-md">3hrs 56 min
                    ago</span>
            </figure>
            
            <div class="py-3 flex gap-3">
                <div class="profile">
                    <div class="avatar w-12">
                        <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>

                </div>

                <div class=" text ">
                    <h1 class="font-bold mb-2">${video.title}</h1>
                    <p class="text-sm font-medium text-gray-500 flex gap-1 mb-1">
                        ${video.authors[0].profile_name}
                        <img class="w-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
                    </p>

                    <p class="text-sm font-medium text-gray-500">${video.others.views}</p>

                </div>
            </div>
        </div>
        
        `
        videoCard.appendChild(divCard);
    
    })
           
    
}

loadVideoCard();