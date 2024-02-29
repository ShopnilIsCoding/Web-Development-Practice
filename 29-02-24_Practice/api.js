let cardCounter = 0;
let sorted = false;
const btn = document.getElementById('loadmore');
const cardContainer = document.getElementById('card-container');
btn.classList.add('hidden');
const getdata = async (sorted) => {

    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const resource = await fetch(url);
    const Data = await resource.json();
    const data = Data.data.tools;
    if (sorted) {
        data.sort((a, b) => {
            const dateA = new Date(a.published_in);
            const dateB = new Date(b.published_in);
            return dateA - dateB;
        })
    }
    toggleLoading(true);
    setTimeout(() => {
        setdata(data, sorted);
    }, 1000);

}
getdata(sorted);


function sortcards() {
    sorted = true;
    btn.classList.add('hidden');
    cardContainer.innerHTML=''
    getdata(sorted);
}


const setdata = (data,sorted) => {

    if(sorted)
    {
        cardCounter=0;
        cardContainer.innerHTML=''
    }
    toggleLoading(false);

    cardContainer.classList.add('w-[95%]', 'lg:w-full')
    console.log(data);
    data.forEach(Topic => {
        const card = document.createElement('div');
        if (cardCounter >= 6) {
            card.classList.add("hidden", "hide")
        }
        card.innerHTML = `
        <div class="card glass h-full">
                <figure><img class="p-3 lg:p-6 rounded-3xl lg:rounded-[48px] min-h-[200px]  lg:min-h-[300px] text-3xl flex items-center text-[#3eceb8] font-bold"
                        src="${Topic.image}"
                        alt="404 Not Found !" /></figure>
                <div class="card-body">
                    <p class="border border-[#3eceb8] rounded-md">${Topic?.description || "Sorry! Description unavailable at this moment."}</p>
                    <h2 class="card-title text-2xl">Features</h2>
                    <ol class="list-decimal list-inside text-left">
                    <li>${Topic.features[0]}</li>
                    <li>${Topic.features[1]}</li>
                    <li>${Topic.features[2]}</li>
                    </ol>
                    <br>
                    <hr>
                    <br>
                    <div class=" flex justify-between">
                        <div class="text-left">
                            <h3 class="font-semibold text-xl">${Topic.name}</h3>
                            <p><i class="fa-regular fa-calendar-days"></i> ${Topic.published_in}</p>
                        </div>
                        <div class="">
                            <button class="btn rounded-full btn-accent btn-outline"onclick="showdetail('${Topic.id}');my_modal_5.showModal()"><i
                                    class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>`;
        cardContainer.appendChild(card);
        cardCounter++;
        btn.classList.remove('hidden');
    });

}

const loadmore = () => {

    btn.classList.add('hidden');
    const cards = document.querySelectorAll('.hide');
    toggleLoading(true)
    const showcard = () => {
        cards.forEach(card => {
            card.classList.remove('hidden');
            toggleLoading(false);
        });
    };
    setTimeout(showcard, 1500);


}

const toggleLoading = (isloading) => {
    const loading = document.getElementById('loading');
    if (isloading)
        loading.classList.remove('hidden');
    else
        loading.classList.add('hidden')
}

const showdetail = async (id) => {
    const modal = document.getElementById('my_modal_5');
    // modal.textContent='';
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const resource = await fetch(url);
    const Data = await resource.json();
    const data = Data.data;
    console.log(data.input_output_examples);

    modal.innerHTML = `<div class="modal-box min-w-[80%]  min-h-[200px] lg:max-h-fit " id="modal">
    <div class="flex flex-col lg:flex-row gap-2 lg:gap-4">
     <div class="w-[95%] mx-auto lg:w-1/2 border-l border-r h-fit my-auto border-red-300 rounded-lg p-2 lg:p-12 mx-auto">
         <h2 class="text-left text-xl font-semibold mb-2">${data?.description}</h2>
         <div class="little-cards flex justify-between gap-4 lg:gap-2">
             <p class="text-wrap bg-gray-300 p-1 lg:p-3 font-bold rounded-md text-accent flex-1">${data.pricing[0].plan}<br>${data.pricing[0].price}</p>
             <p class="text-wrap bg-gray-300 p-1 lg:p-3 font-bold rounded-md text-orange-500 flex-1">${data.pricing[1].plan}<br>${data.pricing[1].price}</p>
             <p class="text-wrap bg-gray-300 p-1 lg:p-3 font-bold rounded-md text-error flex-1">${data.pricing[2].plan}<br>${data.pricing[2].price}</p>
         </div>
         <div >
             <div>
                 <h2 class="text-left text-lg font-extrabold text-red-300">Integrations</h2>
             <ol class="  list-inside text-left">
                 <li>${data?.integrations[0] || ''}</li>
                 <li>${data?.integrations[1] || ''}</li>
                 <li>${data?.integrations[2] || ''}</li>
                 </ol>
             </div>
             
         </div>
     </div>
     <div class="lg:w-1/2 space-y-2">
         <img class=" rounded-md lg:rounded-xl max-h-[200px] min-w-full  mx-auto" src="${data.image_link[0]}" alt="">
         
    <h1 class="text-2xl font-extrabold text-red-400">Demo</h1>
    
        <h2 class="font-bold text-accent mr-auto text-left w-1/2">${data.input_output_examples[0].input}</h2>
        <h2 class="font-bold text-warning ml-auto text-right w-1/2">${data.input_output_examples[0].output}</h2>
    


     </div>
    </div>




     <div class="modal-action">
         <form method="dialog">

             <button
                 class="absolute right-0 top-0 btn btn-error rounded-full"><i
                     class="fa-solid fa-xmark"></i></button>
         </form>
     </div>
 </div>`
}

