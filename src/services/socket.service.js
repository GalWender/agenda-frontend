import io from 'socket.io-client'
import { userService } from './user.service'

export const SOCKET_EMIT_SET_BOARD_ID_CHANNEL = 'board-set-channel'
export const SOCKET_EMIT_SEND_BOARD_CHANGES = 'board-send-changes'
export const SOCKET_EVENT_ADD_BOARD_CHANGES = 'board-add-changes'

export const SOCKET_EMIT_SET_TASK_ID_CHANNEL = 'task-set-channel'
export const SOCKET_EMIT_SEND_COMMENT = 'task-send-comment'
export const SOCKET_EVENT_ADD_COMMENT = 'task-add-comment'
export const SOCKET_EMIT_SEND_ACTIVITY = 'task-send-activity'
export const SOCKET_EVENT_ADD_ACTIVITY = 'task-add-activity'

const SOCKET_EMIT_LOGIN = 'set-user-socket'
const SOCKET_EMIT_LOGOUT = 'unset-user-socket'


const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'
export const socketService = createSocketService()

// for debugging from console
// window.socketService = socketService

socketService.setup()

function createSocketService() {
  var socket = null;
  const socketService = {
    setup() {
      socket = io(baseUrl)
      setTimeout(() => {
        const user = userService.getLoggedinUser()
        if (user) this.login(user._id)
      }, 500)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb = null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      // console.log('emitting from socketService', 'eventName: ', eventName, 'data: ', data)
      socket.emit(eventName, data)
    },
    login(userId) {
      socket.emit(SOCKET_EMIT_LOGIN, userId)
    },
    logout() {
      socket.emit(SOCKET_EMIT_LOGOUT)
    },
    terminate() {
      socket = null
    },

  }
  return socketService
}