import {inject} from 'aurelia-framework';
import {customElement, bindable} from 'aurelia-framework';
import {OrderDao} from '../../data/orderDao';

@inject(OrderDao)
@customElement('widget-raw-data')
export class WidgetRawData {
    @bindable order;

    constructor (OrderDao) {
        this.orderDao = OrderDao;
    }

    get orderJson () {
        return JSON.stringify(this.order, null, 4);
    }

    get fulfillmentJson () {
        return JSON.stringify(this.fulfillments, null, 4);
    }

    get transactionsJson () {
        return JSON.stringify(this.transactions, null, 4);
    }

    bind () {
        this.orderDao.getFulfillments(this.order.name)
            .then(fulfillments => this.fulfillments = fulfillments);
        this.orderDao.getTransactions(this.order.name)
            .then(transactions => this.transactions = transactions);
    }

    activateTab ($event) {
        [].forEach.call(document.querySelectorAll('.raw-data nav li'), function (el, i) {
            el.setAttribute('class', '');
        });
        [].forEach.call(document.querySelectorAll('.raw-data section article'), function (el, i) {
            el.style.display = 'none';
        });

        var li = $event.path
            .find(function (el, i) {
                return el.nodeName.toLowerCase() === "li";
            });
        li.setAttribute('class', 'active');
        document.querySelector(li.querySelector('a').getAttribute('data-tab'))
            .style.display = 'block';
    }

}
