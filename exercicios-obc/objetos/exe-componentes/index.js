import { Component } from "./Componente.js";
import { Form } from "./Form.js";
import { Input } from "./input.js";
import { Label } from "./Label.js";

const title = new Component('h1', 'body', { textContent: 'Ola, mundo'})
console.log(title)
title.render()