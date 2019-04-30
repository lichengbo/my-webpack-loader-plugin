console.log('begin')
let str = 'abc'
const PI = '3.14'
var fun = _ => {
  console.log(1)
}
fun()
class Parent {
  constructor(name) {
    this.name = name
  }
  showName() {
    console.log(this.name)
  }
}
var p = new Parent('cbli')
p.showName()
console.log('end')
