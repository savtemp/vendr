import { ProxyState } from "../AppState.js";

class SnacksService{

    orderSnack(selectedSnack){
        // if(Snack.name = selectedSnack)
        // console.log('selecting', selectedSnack);
        let orderedSnack = ProxyState.snacks.find(s => s.name = selectedSnack)
        // console.log(orderedSnack);
        ProxyState.orders.push(orderedSnack)
        console.log(ProxyState.orders, 'orders');
        // console.log('current selected snacks', orders);
    }

}

export const snacksService = new SnacksService()