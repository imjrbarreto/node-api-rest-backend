const { faker } = require('@faker-js/faker')

class UsersService {
  constructor() {
    this.users = []
    this.generate()
  }

  generate() {
    const limit = 5
    for (let index = 0; index < limit; index++) {
      this.users.push(
        {
          userId: faker.string.uuid(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          avatar: faker.image.avatar()
        }
      )
    }
  }

  create(data) {
    const newUser = {
      userId: faker.string.uuid(),
      ...data
    }
    this.users.push(newUser)
    return newUser
  }

  find() {
    return this.users
  }

  findOne(id) {
    return this.users.find(item => item.userId === id)
  }

  update(id, changes) {
    const index = this.users.findIndex(item => item.userId === id)
    if (index === -1) {
      throw new Error('User Not Found')
    }
    const user = this.users[index]
    this.users[index] = {
      ...user,
      ...changes
    }
    return this.users[index]
  }

  delete(id) {
    const index = this.users.findIndex(item => item.userId === id)
    if (index === -1) {
      throw new Error('User Not Found')
    }
    this.users.splice(index, 1)
    return { id }
  }

}

module.exports = UsersService
