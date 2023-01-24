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
