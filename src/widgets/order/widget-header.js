import _ from 'lodash';
import { customElement, bindable } from 'aurelia-framework';

@customElement('widget-header')
export class WidgetHeader {
    @bindable order;

    isCancelled () {
        return _.isEmpty(this.order.cancelled_at)
            && _.isEmpty(this.order.cancel_reason);
    }

}
