import React from 'react';
import ReactDOM from 'react-dom/client';
import {Menu} from './Menu/Menu.js';
import {Banner} from './Banner/Banner.js';
import { Sinopsis } from './Sinopsis/Sinopsis.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu>  </Menu>
    <Banner> </Banner>
    <Sinopsis> </Sinopsis>
  </React.StrictMode>
);