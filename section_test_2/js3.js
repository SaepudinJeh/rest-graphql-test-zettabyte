/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
 const data = [
  { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
  { firstName: 'Deddy', lastName: 'Dores', age: 25 },
];

function result(data) {
  const result = data.reduce((acc, curr) => {
    if (acc.firstName === curr.firstName) {
      return Object.keys(acc).filter(data => data !== "firstName")
    } else if (acc.lastName === curr.lastName) {
      return Object.keys(acc).filter(data => data !== "lastName")
    } else if (acc.age === curr.age) {
      return Object.keys(acc).filter(data => data !== "age")
    } else {
      return acc;
    }

  })
  return result
}
console.log(result(data));