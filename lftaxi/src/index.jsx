import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {store} from './store/store' 
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

