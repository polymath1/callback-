var students = [
  { id: 1, name: "Bruce",    age: 40 },
  { id: 2, name: "Zoidberg", age: 22 },
  { id: 3, name: "Alex",     age: 22 },
  { id: 4, name: "Alex",     age: 30 }
];

students.sort(function(a, b) {
  var nameA=a.name
  var nameB=b.name
  if (nameA < nameB){
  return -1}
if (nameA > nameB){
  return 1
}
if (nameA === nameB) {
  var ageA=a.age
  var ageB=b.age
  if (ageA < ageB){
    return -1
  }
    if (ageA > ageB){
      return 1
    }
    return 0

}

})
console.log(students)