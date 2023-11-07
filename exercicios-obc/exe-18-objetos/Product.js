class Product {
    constructor(name, description,price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity){
        this.inStock += quantity
    }
    calculateDiscont(discount){
        return this.price * ((100 - discount) / 100)
    }
}
const watch = new Product("Relógio", "...", "1000")
watch.addToStock(50)
const priceWithDiscount = watch.calculateDiscont(15)

console.log(watch)
console.log(priceWithDiscount)
console.log(watch.calculateDiscont(10))