const data = [1, 2, 3]
console.log(data)
console.log(data.length)
data.push(22, 78)
console.log(data)
data.splice(0, 0, 23, 45, 67) // insert àat index 0, 3 elements
console.log(data)
data.splice(0, 3, 32, 54, 76) // replace at index 0, 3 elements
console.log(data)
data.splice(3, 2, 99) // replace at index 3, 2 elements by 1 new
console.log(data)

const newData = data.toSpliced(4, 3, 1, 2, 3)
console.log('data:', data)
console.log('new data:', newData)

// in place
data.sort()  // sort according to string order
console.log('data sorted:', data)
data.sort((n1, n2) => n1 - n2)
console.log('data sorted:', data)

const dataSorted = data.toSorted((n1, n2) => n2 - n1)
console.log('new data sorted:', dataSorted)

const cities = ['Toulouse', 'Pau']
const [cityStart, cityEnd] = cities
console.log(`from ${cityStart} to ${cityEnd}`)

const cities2 = ['Toulouse', 'Pau', 'Blagnac', 'Bayonne', 'Balma'] // au moins 3
const [city1, , city2] = cities2
console.log(`from ${city1} to ${city2}`)

const [cityA, , cityB, ...others] = cities2
console.log(`from ${cityA} to ${cityB} ; others: ${others} `)

const f = ([d1, d2, ...others]) => {
  console.log(`from ${d1} to ${d2} ; others: ${others} `)
}

f(data)
f(cities2)
f(cities)
f([])

// slices
console.log('all : ', cities2)
const citySlice1 = cities2.slice(0, 3)
console.log('3 premiers : ', citySlice1)
const citySlice2 = cities2.slice(-3)
console.log('3 derniers : ', citySlice2)

const allCities = [...cities, 'Paris', ...cities2, 'Marseille']
console.log(allCities)
