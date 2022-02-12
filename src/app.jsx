import React from 'react';
import server from 'react-dom/server';

const Greet = () => <h1>Hello, World!</h1>;

console.log(server.renderToString(<Greet />));
