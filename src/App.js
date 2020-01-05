import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import './css/bootstrap.min.css';
import './css/owl.carousel.min.css';
import './css/magnific-popup.css';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/nice-select.css';
import './css/flaticon.css';
import './css/slicknav.css';
import './css/style.css';
import Main from './components/Main';
import Blog from './components/Blog';

function App() {
  return (
        <BrowserRouter>
            <Route exact  path="/" component={Main} />
            <Route   path="/blog" component={Blog} />
        </BrowserRouter>
  );
}

export default App;
