import { readFileSync } from 'fs';  

const data = readFileSync('data.json', 'utf-8');

const countries = JSON.parse(data);

export default countries;
