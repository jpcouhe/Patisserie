export const getPastryCard = (pastry) => {
    const {id, name, description} = pastry
    const image = pastry.images[0].name


    return`
    <article class="card">
        <div class="card-img-container">
            <img class="card-img" src="./assets/${image}" alt="...">
        </div>
        <h4 class="card-name">${name}</h4>
        <a href="./pastry.html?id=${id}"><button class="card-button">Découvrir</button></a>
    </article>
    `
}


export const getOnePastryCard = (pastry) => {

    const {id, name, description, } = pastry

    const image = pastry.images[0].name
    return`<article>
    <div class="card-pastry">
       <div class="card-pastry-img-container card-img-container">
            <img class="card-pastry-img card-img" src="./assets/${image}" alt="...">
        </div>
        <h4 class="card-pastry-name">${name}</h4> 
    </div>
    <div class="card-pastry">
        <p class="card-pastry-description">${description}</p>
    </div>
    </article>
    `
}