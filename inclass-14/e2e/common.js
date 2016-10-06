import { expect } from 'chai'
import { findId, sleep } from './selenium'

// TODO add your test user credentials here!
exports.creds = {
    username: 'cz16test',
    password: 'fort-highest-ourselves'
}

exports.login = () => 
    sleep(500)
    .then(findId('username').clear())
    .then(findId('password').clear())
    .then(findId('username').sendKeys(exports.creds.username))
    .then(findId('password').sendKeys(exports.creds.password))
    .then(findId('login').click())
    .then(sleep(2000))

exports.logout = () =>
    sleep(500)
    .then(findId('logout').click())
    // IMPLEMENT ME
    // validate the message says: 'You have logged out'
    .then(findId('message').getText()
         .then(text => {
             expect(text.to.equal('You have logged out'))
         })
     )
