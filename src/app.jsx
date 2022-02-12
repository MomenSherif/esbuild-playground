import React from 'react';
import server from 'react-dom/server';

const one = { one: 1 };
const two = { two: 2 };
const three = { ...one, ...two, three: 3 };

const Greet = () => <h1>Hello, World!</h1>;

console.log(server.renderToString(<Greet />));
