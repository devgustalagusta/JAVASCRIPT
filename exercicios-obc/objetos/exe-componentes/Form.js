import { Component } from "./Componente.js";

export class Form extends Component{
    constructor(parent, option){
        super('form', parent, options)
    }

    addChildren(...children){
        children.forEach(child =>{
            this.getElement().appensChild(child.getElement())
        })
    }
}