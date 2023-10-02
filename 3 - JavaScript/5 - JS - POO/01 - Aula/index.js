// const cliente = [{
//   nome: 'Sérgio',
//   idade: 20,
// },{
//   nome:'Seilá',
//   idade: 13
// },{
//   nome: 'Cecilia',
//   idade: 23
// }]

// console.log(cliente.name)

//PascalCase -> camelCase
function Book(title, pages, tags, author) {
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false
  this.inStock = 0
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity
  }
  this.save = function () {
    // Save book to database
  }
}

const author = { name: "Christopher Paolini" }
const tags = ["fantasy", "adventure", "medieval"]

const eragon = new Book("Eragon", 468, tags, author)

eragon.addOnStock(20)

const eldest = new Book("Eldest", 644, tags, author)

console.log(eragon)
console.log(eldest)