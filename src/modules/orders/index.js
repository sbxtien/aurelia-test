import {inject} from 'aurelia-framework';
import {OrderDao} from '../../data/orderDao';

@inject(OrderDao)
export class Orders {

    constructor (OrderDao) {
        this.orderDao = OrderDao;
    }

    activate () {
        return this.orderDao.get()
            .then(response => this.orders = response.content);
    }

    loadOrder ($event) {
        var id = $event.path
            .find(function (li){
                return li.nodeName.toLowerCase() === 'li'
                    && li.getAttribute('class').indexOf('-orders-order-card') > -1;
            })
            .querySelector('article')
            .getAttribute('data-order-id');

        var url = this.router.generate('order', { id: id });
        this.router.navigate(url);
    }

    getShippingLineAddress1 (order) {
        return [order.shipping_address.address1, order.shipping_address.address2]
            .filter(function (value) {
                return !(value === null || value === "");
            })
            .join(", ");
    }

    getShippingLineAddress2 (order) {
        return [order.shipping_address.city , order.shipping_address.province , order.shipping_address.country , order.shipping_address.zip]
            .filter(function (value) {
                return !(value === null || value === "");
            })
            .join(", ");
    }
}
