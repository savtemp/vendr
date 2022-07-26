


export class Snack{
    constructor(image, name, price){
        this.image = image
        this.name = name
        this.price = price 
    }

    get Template(){
        return `
            <div class="col-6">
                <img class="snacks-img"
                src="${this.image}" alt="">
                 <p>${this.name}</p>
                 <p>${this.price}</p>
            </div>
        `
    }
}

