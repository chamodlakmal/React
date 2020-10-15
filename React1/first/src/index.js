import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';
import './index.css';

ReactDom.render(<App/>, document.getElementById('root'));

new Promise(resolve=>{
    setTimeout(()=>{
        console.log('Bears');
        resolve();
    },2000);
}).then(()=>{
    console.log('Beets')
    console.log('Beets 123')
})
