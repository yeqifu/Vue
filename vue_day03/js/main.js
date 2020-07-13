import {name,age,gender} from './info.js'
console.log(name)
console.log(age)
console.log(gender)

import * as people from './info.js'
console.log(people)
console.log(people.age)
console.log(people.gender)
console.log(people.name)

people.test('戒骄戒躁')

import user from './info.js'
console.log(user)