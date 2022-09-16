import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadBoard, loadBoards } from "../store/board/board.action"
import { ReactComponent as BoardMenu } from '../assets/icons/board-menu.svg'
import { ReactComponent as PlusIcon } from '../assets/icons/plus-icon.svg'
import { ReactComponent as FilterIcon } from '../assets/icons/filter.svg'
import { ReactComponent as SearchIcon } from '../assets/icons/nav-bar/search.svg'
import { ReactComponent as BoardIcon } from '../assets/icons/board-icon.svg'


export const SideNavBar = ({boards}) => {


    console.log(boards);
    return <section className="side-nav-bar">
        <div className="side-board-opts">
            <p className="board-name">{boards[0].title}</p>
            <BoardMenu />
        </div>
        <div className="side-nav-details">
            <div className="side-nav side-nav-add">
                <PlusIcon />
                Add
            </div>
            <div className=" side-nav side-nav-filter">
                <FilterIcon />
                Filter
            </div>
            <div className=" side-nav side-nav-search">
                <SearchIcon />
                Search
            </div>
        </div>
        <hr />
        <div className="nav-board-list">
            {boards.map(board => 
                <div className="nav-board-preview" key={board._id}>
                    <BoardIcon />
                    <p className="nav-board-title">{board.title}</p>
                </div>
            )}

        </div>
    </section>
}