import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import { AuthProvider } from './helpers/auth-context/auth-context';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);

