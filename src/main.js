import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {

    aurelia.use
        .standardConfiguration()
        //.developmentLogging()
        //.plugin('aurelia-animator-css');
        .feature('/dist/widgets');

    aurelia.start()
        .then(_aurelia => _aurelia.setRoot());

}
