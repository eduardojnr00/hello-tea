
console.log("Hello, Tea!");

// Dependências fictícias
const express = require('express');
const lodash = require('lodash');


const numbers = [1, 2, 3, 4, 5];
const sum = lodash.sum(numbers);
console.log("Soma dos números:", sum);


const auxiliar = require('auxiliar');

// Utiliza uma função do outro projeto
auxiliar.print();
