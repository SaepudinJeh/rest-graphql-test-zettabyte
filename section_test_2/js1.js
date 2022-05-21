let number = {
  a: 4,
  b: 2
}

function result(numbers) {
  return {
    a: numbers.b,
    b: number.a
  }
}

console.log(result(number))