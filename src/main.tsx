import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store.ts';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
  </Provider>
)
