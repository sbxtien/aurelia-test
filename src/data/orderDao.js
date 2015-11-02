import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class OrderDao {

    constructor (httpClient) {
        this.http = httpClient;
        this.page = 0;
        this.pageSize = 100;
    }

    get () {
        return this.http.get(`http://localhost:3001/shopify/api/order.json?page=${this.page}&pageSize=${this.pageSize}`)
            .then(response => { return response.content; });
    }

}
