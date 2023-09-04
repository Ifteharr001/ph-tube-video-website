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
  console.log(data)
};
handleCatagory()