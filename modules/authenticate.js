const credentials = [
  { name: 'sorian', password: 'TestTest1!' },
  { name: 'raph', password: 'TestTest2!' }
]

export const login = (name, passwd) => credentials.some(
  entry => entry.name === name && entry.password === passwd
)
