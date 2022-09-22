import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { socketService } from './socket.service'
import { showSuccessMsg } from '../services/event-bus.service'
import { utilService } from './util.service'

export const userService = {
    getUsers,
    login,
    verifyUsername,
    signup,
    logout,
    getLoggedinUser,
    saveLocalUser,
    getById,
    remove,
    update,
}

//?- Dev:
const gUsers = [
    {
        "_id": "632476e04e46cdabedb1b1e0",
        "fullname": "Gal Wender",
        "username": "gal@wender.com",
        "password": "gal",
        "imgUrl": "profile-img-gal",
        "assignments": [
            {
                "id": "a101",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "6GcnqY"
            },
            {
                "id": "a102",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "JooqqA"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "woFH9w"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "xc4QYw"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "LpuFi9"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "LTOP3z"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "HdzYV1"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "M4qCwx"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "Su8fOZ"
            }
        ]
    },
    {
        "_id": "632476e04e46cdabedb1b1e1",
        "fullname": "Or Agami",
        "username": "or@agami.com",
        "password": "agami",
        "imgUrl": "profile-img-or",
        "assignments": [
            {
                "id": "a101",
                "boardId": "63272d891a6634c9544c967d",
                "taskId": "c104"
            },
            {
                "id": "a102",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "6GcnqY"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "JooqqA"
            },
            {
                "id": "a104",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "woFH9w"
            },
            {
                "id": "a104",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "xc4QYw"
            },
            {
                "id": "a104",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "LpuFi9"
            },
            {
                "id": "a104",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "LTOP3z"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "HdzYV1"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "ggpA9r"
            }
        ]
    },
    {
        "_id": "632476e04e46cdabedb1b1e2",
        "fullname": "Tal Ben Atiya",
        "username": "tal@benatiya.com",
        "password": "tal",
        "imgUrl": "profile-img-tal",
        "assignments": [
            {
                "id": "a101",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "6GcnqY"
            },
            {
                "id": "a102",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "JooqqA"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "woFH9w"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "xc4QYw"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "LpuFi9"
            },
            {
                "id": "a103",
                "boardId": "63272d891a6634c9544c967e",
                "taskId": "55BKFX"
            }
        ]
    }
]
const STORAGE_KEY = 'userDB'

//?- Prod:
const URL_USER = 'user/'
const URL_AUTH = 'auth/'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'


async function getUsers() {
    //?- Dev:
    // let users = await storageService.query(STORAGE_KEY)
    // if (!users || users.length === 0) {
    //     users = gUsers
    //     storageService.postMany(STORAGE_KEY, users)
    // }
    // return users

    //?- Prod:
    return httpService.get(URL_USER)
}

async function getById(userId) {
    //?- Dev:
    // const user = gUsers.find(user => user.id === userId)
    // saveLocalUser(user)
    // return user

    //?- Prod:
    return httpService.get(URL_USER + userId)
}

async function verifyUsername(username) {
    //?-Dev:
    let users = await storageService.query(STORAGE_KEY)
    if (!users || users.length === 0) {
        users = gUsers
        storageService.postMany(STORAGE_KEY, users)
    }
    const isVerified = users.some((user) => user.username === username)
    if (!isVerified) throw new Error('NOT_FOUND')
    //?-Prod
}

async function login(creds) {
    //?- Dev:
    // let users = await storageService.query(STORAGE_KEY)
    // console.log('users:', users)
    // if (!users || users.length === 0) {
    //     users = gUsers
    //     storageService.postMany(STORAGE_KEY, users)
    // }
    // const user = users.find(user =>
    //     (user.username === creds.username) &&
    //     (user.password === creds.password)
    // )
    // if (!user) throw 'Wrong username or password'
    // saveLocalUser(user)
    // return user

    //?- Prod:
    const user = await httpService.post(URL_AUTH + 'login', creds)
    if (user) {
        // socketService.login(user._id)
        saveLocalUser(user)
        return user
    }
}

async function signup(creds) {
    //?- Dev:
    // const user = await storageService.post(STORAGE_KEY, creds)
    // gUsers.push(user)
    // login(user)
    // return user

    //?- Prod:
    const user = await httpService.post(URL_AUTH + 'signup', creds)
    socketService.login(user._id)
    return saveLocalUser(user)
}

async function logout() {
    //?- Dev:
    // sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)

    //?- Prod:
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    socketService.logout()
    return await httpService.post(URL_AUTH + 'logout')
}

function remove(userId) {
    //?- Dev:
    // Todo: remove user


    //?- Prod:
    // return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(user) {
    //?- Dev:
    // Todo: update user info

    //?- Prod:
    // await storageService.put('user', user)
    // user = await httpService.put(`user/${user._id}`, user)
    // Handle case in which admin updates other user's details
    // if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    // return user
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

