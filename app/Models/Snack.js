


export class Snack{
    constructor(image, name, price){
        this.image = image
        this.name = name
        this.price = price 
    }

    get snackTemplate(){
        return `
        <div class="col-6" onclick="app.snacksController.orderSnack('${this.name}')">
            <img class="snacks-img"
            src="${this.image}" alt="">
            <p>${this.name}</p>
            <p>${this.price}</p>
        </div>
        `
    }

    get orderTemplate(){
        return `
        <div class="col-12">
            <p>${this.name} : <span>${this.price}</span></p>
        </div>
        `
    }
}

