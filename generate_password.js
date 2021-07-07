// define sample function to randomly return an item in an array
function sample(array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

// define generatePassword function
function generatePassword() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  const options = {
    length: 12,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: '40'
  }
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(...lowerCaseLetters)
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(...upperCaseLetters)
  }
  if (options.numbers === 'on') {
    collection = collection.concat(...numbers)
  }
  if (options.symbols === 'on') {
    collection = collection.concat(...symbols)
  }

  // remove things user do not need
  if (options.excludeCharacters) {
    collection = collection.filter(
      char => !options.excludeCharacters.includes(char)
    )
  }

  // start generating password
  let password = ''
  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }
  console.log(password)

  // return the generated password
  console.log('This function will generate password')
}
// invoke generatePassword function 
generatePassword()