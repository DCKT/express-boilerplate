import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import path from 'path';

export default function (app, express) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(methodOverride());
  app.set('views', path.join(__dirname, '../app/views'));
  app.set('view engine', 'jade');
  app.use(express.static(path.join(__dirname, '../assets')));
};