import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class OrderDao {

    constructor (httpClient) {
        this.http = httpClient;
        this.page = 0;
        this.pageSize = 100;
        this.baseUrl = 'http://ca-to-sc-njs01:8090/shopify/api';
    }

    get () {
        return this.http.get(`${this.baseUrl}/order.json?page=${this.page}&pageSize=${this.pageSize}`)
            .then(response => { return response.content; });
    }

    getByName (name) {
        return this.http.get(`${this.baseUrl}/order/${name}`)
            .then(response => { return response.content; });
    }

    getFulfillments (name) {
        return this.http.get(`${this.baseUrl}/order/${name}/fulfillment.json`)
            .then(response => { return response.content; });
    }

    getTransactions (name) {
        return this.http.get(`${this.baseUrl}/order/${name}/transaction.json`)
            .then(response => { return response.content; });
    }

}
