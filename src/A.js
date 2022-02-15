import { v4 as uuid } from 'uuid';
import { B, fakeB } from './B';

console.log('Start A');
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  console.log(fakeB);
}

console.log(`Imported B value is ${B}`);

console.log(`uuid value is ${uuid()}`);

console.log('End A');
