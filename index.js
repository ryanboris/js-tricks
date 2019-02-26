const arr = [1, 2, 3]
console.log(arr.length)

const obj = { a: 1, b: 2, c: 4, d: 3 }

const len = Object.keys(obj).length //?

//* iterating over array

const username = {
  first: 'john',
  last: 'doe'
}

for (let u in username) {
  if (username.hasOwnProperty(u)) {
    console.log(u, username[u])
  }
}

for (let u of Object.keys(username)) {
  console.log(u, username[u]) //?
}

Object.entries(username).map(([key, value]) => console.log(key, value)) //?
