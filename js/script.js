const handleCatagoris = () =>{
    fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res) => res.json())
    .then((data) => console.log(data))
}
handleCatagoris()