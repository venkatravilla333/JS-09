

// var a = 'sachin'

// function test() {
//   var x = 100
// }

// test()

// document.write(a)

// console.log(a)

//data types

// primitives

// var a = 'sachin' //string
// console.log(a, typeof a)

// var b = 40 //number
// console.log(b, typeof b)

// var c = true//boolean
// console.log(c, typeof c)

// var d // undefined
// console.log(d, typeof d)

// var e = null //null
// console.log(e, typeof e)

//reference

//object

var person = {
  name: 'sachin',
  age: 40,
  play: function () {
  
  }
}

console.log(person, typeof person)

//how to access object values
// console.log(person.name)
// console.log(person.age)
// console.log(person.play)
// console.log(person.play())
// console.log(person['name'])
// console.log(person['age'])
// console.log(person['play']())

// Array

var names = ['sachin', 'kohli', 'dhoni', true, undefined, {age: 40}, function test(){console.log('test')}]

console.log(names, typeof names)
console.log(Array.isArray(names))
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3])
// console.log(names[4])
// console.log(names[5])
// names[6]()

//function

var x = 10

function test() {
  var x = 100
}
test()
console.log(typeof test)






