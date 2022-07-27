import { ProxyState } from "../AppState.js";

class SnacksService{

    orderSnack(selectedSnack){
        let orderedSnack = ProxyState.snacks.find(s => s.name = selectedSnack)
        ProxyState.orders.push(orderedSnack)
        // console.log(ProxyState.orders, 'orders');
    }

}

export const snacksService = new SnacksService()