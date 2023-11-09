import { Component } from "./Componente.js";

export class Label extends Component{
    constructor(text, parent, options){
        super('label', parent, Object.assign({}, options, { textContent: text }))
    }
}