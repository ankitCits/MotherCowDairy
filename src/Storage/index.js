import { writeStorage, readStorage, removeAllStorage, removeStorage } from './asyncStorage'
// Access Token
export const setAccessToken = async value => {
    return (promise = new Promise(function (resolve) {
        resolve(writeStorage('ACCESS_TOKEN', value))
    }))
}

export const getAccessToken = async () => {
    return (promise = new Promise(function (resolve) {
        resolve(readStorage('ACCESS_TOKEN'))
    }))
}

export const removeAccessToken = async () => {
    return (promise = new Promise(function (resolve) {
        resolve(removeStorage('ACCESS_TOKEN'))
    }))
}



// Set Email
export const setEmailS = async value => {
    return (promise = new Promise(function (resolve) {
        resolve(writeStorage('EMAIL_', value))
    }))
}

export const getEmail = async () => {
    return (promise = new Promise(function (resolve) {
        resolve(readStorage('EMAIL_'))
    }))
}

export const removeEmail = async () => {
    return (promise = new Promise(function (resolve) {
        resolve(removeStorage('EMAIL_'))
    }))
}
