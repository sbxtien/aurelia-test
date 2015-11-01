export class App {

    configureRouter(config, router) {
        this.router = router;

        config.map([
            { name: 'orders', route: ['', 'orders'], moduleId: 'views/order/orders', nav: true, title: "Orders" }
            , { name: 'order', route: 'order/:name', moduleId: 'views/order/order' }
        ]);

    }

}
