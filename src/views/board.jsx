import { Fragment, useEffect } from "react"
import { BoardHeader } from "../cmps/board-header"
import { BoardList } from "../cmps/board-list"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { loadBoard, loadBoards } from "../store/board/board.action"
import { Loader } from "../cmps/loader"
import { GroupPreview } from "../cmps/group-preview"

export const Board = () => {

  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { board, boards, isLoading } = useSelector(state => state.boardModule)

  useEffect(() => {
    if (!boards || boards.length === 0) dispatch(loadBoards())
    if (!board && boards.length > 0) dispatch(loadBoard(boards[0]._id))

  }, [boards])

  return (
    <div className="board-app">
      {isLoading ?
        <Loader /> :
        board &&
        <Fragment>
          <BoardHeader board={board} />
          <BoardDetails board={board} />
        </Fragment>
      }
    </div>
  )
}

const BoardDetails = ({ board }) => {
  console.log('board:', board)
  return (
    <div className="board-details">
      {board.groups.map((group, idx) =>
        <GroupPreview group={group} key={idx} />)}
    </div>
  )
}
