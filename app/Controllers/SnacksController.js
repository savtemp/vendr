import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";

function _drawSnacks(){
    let snacks = ProxyState.snacks
    console.log('drawing snacks', snacks);
    let template = ''
    snacks.forEach(s => template += s.Template)
    document.getElementById('snacks').innerHTML = template
}


export class SnacksController{
    constructor(){
        console.log('Snacks Controller loaded');
        _drawSnacks()
    }
}
