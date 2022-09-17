import { boardService } from "../../services/board.service"
// import { userService } from "../../services/user.service"
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service'
import { groupService } from "../../services/group.service"
import { taskService } from "../../services/task.service"


export function loadBoards() {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_LOADING', isLoading: true })

        const { filterBy } = getState().boardModule
        boardService.query(filterBy)
            .then((boards) => {
                console.log('boards from boardAction:', boards)
                dispatch({ type: 'SET_BOARDS', boards })
            })
            .catch(err => {
                showErrorMsg('Failed to load boards')
            })
            .finally(() => {
                dispatch({ type: 'SET_LOADING', isLoading: false })
            })
    }
}

export function removeBoard(boardId) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_LOADING', isLoading: true })

        boardService.remove(boardId)
            .then(() => {
                showSuccessMsg('Board removed')
                dispatch({ type: 'REMOVE_BOARD', boardId })
            })
            .catch(err => {
                showErrorMsg('Failed to remove board')
            })
            .finally(() => {
                dispatch({ type: 'SET_LOADING', isLoading: false })
            })
    }
}

export function setFilter(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER', filterBy })
    }
}

export function loadBoard(boardId) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_LOADING', isLoading: true })

        boardService.getById(boardId)
            .then((board) => {
                dispatch({ type: 'SET_BOARD', board })
            })
            .finally(() => {
                dispatch({ type: 'SET_LOADING', isLoading: false })
            })
    }
}

export function addBoard(board) {
    return (dispatch, getState) => {

        dispatch({ type: 'SET_LOADING', isLoading: true })

        boardService.save(board)
            .then(savedBoard => {
                dispatch({ type: 'ADD_BOARD', board: savedBoard })
                showSuccessMsg('Board added')
            })
            .catch(err => {
                showErrorMsg('Failed to add board')
            })
            .finally(() => {
                dispatch({ type: 'SET_LOADING', isLoading: false })
            })
    }
}

export function updateBoard(board) {
    return (dispatch, getState) => {
        dispatch({ type: 'SET_LOADING', isLoading: true })
        boardService.save(board)
            .then(savedBoard => {
                dispatch({ type: 'UPDATE_BOARD', board: savedBoard })
                showSuccessMsg('Board updated')
            })
            .catch(err => {
                showErrorMsg('Failed to update board')
            })
            .finally(() => {
                dispatch({ type: 'SET_LOADING', isLoading: false })
            })
    }
}

export function addTask(task) {
    return (dispatch, getState) => {
        taskService.save(task)
            .then(savedBoard => {
                dispatch({ type: 'UPDATE_BOARD', board: savedBoard })
                showSuccessMsg('Task added')
            })
            .catch(err => {
                showErrorMsg('Failed to add task')
            })
    }
}

export function updateTask(task) {
    return (dispatch, getState) => {
        taskService.update(task)
            .then(savedBoard => {
                dispatch({ type: 'UPDATE_BOARD', board: savedBoard })
                showSuccessMsg('Task updated')
            })
            .catch(err => {
                showErrorMsg('Failed to update task')
            })
    }
}

export function removeTask(task) {
    return (dispatch, getState) => {
        taskService.remove(task)
            .then(savedBoard => {
                dispatch({ type: 'UPDATE_BOARD', board: savedBoard })
                showSuccessMsg('Task removed')
            })
            .catch(err => {
                showErrorMsg('Failed to remove task')
            })
    }
}

export function addGroup(group) {
    return (dispatch, getState) => {
        groupService.save(group)
            .then(savedBoard => {
                dispatch({ type: 'UPDATE_BOARD', board: savedBoard })
                showSuccessMsg('Group added')
            })
            .catch(err => {
                showErrorMsg('Failed to add group')
            })
    }
}

export function updateGroup(group) {
    return (dispatch, getState) => {
        groupService.update(group)
            .then(savedBoard => {
                dispatch({ type: 'UPDATE_BOARD', board: savedBoard })
                showSuccessMsg('Group updated')
            })
            .catch(err => {
                showErrorMsg('Failed to update group')
            })
    }
}

export function removeGroup(group) {
    console.log('group:', group)
    return (dispatch, getState) => {
        groupService.remove(group)
            .then(savedBoard => {
                dispatch({ type: 'UPDATE_BOARD', board: savedBoard })
                showSuccessMsg('Group removed')
            })
            .catch(err => {
                showErrorMsg('Failed to remove group')
            })
    }
}