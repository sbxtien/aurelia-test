export class App {

    constructor (router) {
        this.router = router;
    }

    configureRouter (config, router) {
        this.router = router;

        config.map([
            { name: 'orders', route: ['', 'orders'], moduleId: 'modules/orders/index', nav: true, title: "Orders" }
            , { name: 'order', route: 'order/:name', moduleId: 'modules/order/index' }
        ]);

    }

}
