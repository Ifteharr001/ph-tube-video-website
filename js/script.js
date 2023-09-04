const handleCatagory = async () => {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');
    const dataContainer = data.data;
    console.log(dataContainer)
    dataContainer.forEach((catagory) =>{
        const div = document.createElement('div');
        div.innerHTML = `
            <a onclick="handleTubeLoad('${catagory.category_id}')" class="tab">${catagory.category}</a>
        `;
        tabContainer.appendChild(div)
    });
};
const handleTubeLoad = async (catagoryId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${catagoryId}`
  );
  const data = await response.json();
  const dataCardContainer = data.data;

  const cardContainer = document.getElementById('card-container');

  cardContainer.innerHTML = "";

  dataCardContainer.forEach((card) => {
    console.log(card)
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card bg-base-100 shadow-xl rounded-none">
        <figure>
          <img class="h-[200px]"
            src=${card?.thumbnail}
          />
        </figure>
        <div>
            <div class="flex">
                <div>
                    <div class="w-10">
                        <img class="rounded-full h-[40px] w-[100px] m-[15px]" src="${card?.authors[0]?.profile_picture}" alt="">
                    </div>
                </div>
                <div class="p-[15px] ml-[15px]">
                    <h1 class="text-xl text-bold">${card.title}</h1>
                    <span>${card?.authors[0]?.profile_name}</span>
                    <p>views: ${card?.others?.views}</p>
                </div>
            </div>
        </div>
      </div>
    `;
    cardContainer.appendChild(div)
  })
};
handleCatagory();
handleTubeLoad(1000)