import {inject} from 'aurelia-framework';
import {OrderDao} from '../../data/orderDao';

@inject(OrderDao)
export class Order {

    constructor (OrderDao) {
        this.orderDao = OrderDao;
    }

    activate (params) {
        return this.orderDao.getByName(params.name)
            .then(order => this.order = order);
    }

    get orderJson () {
        return JSON.stringify(this.order, null, 4);
    }
}
