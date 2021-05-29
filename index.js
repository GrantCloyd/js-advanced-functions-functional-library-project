const fi = (function () {
   return {
      libraryMethod: function () {
         return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0"
      },

      each: function (coll, cback) {
         let collValues = Object.values(coll)
         coll.forEach(el => cback(el))
         collValues.forEach(val => cback(val))

         return coll
      },

      map: function () {},

      reduce: function () {},

      functions: function () {},
   }
})()

console.log(fi.each([1, 2, 3], alert))

fi.libraryMethod()
