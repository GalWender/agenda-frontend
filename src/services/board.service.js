// import { store } from "../store/store";
import { storageService } from "./async-storage.service";
// import { httpService } from "./http.service"
import { utilService } from "./util.service";

export const boardService = {
  query,
  getById,
  save,
  update,
  remove,
}
//?- Dev:
const gBoards = [
  {
    "_id": "b101",
    "title": "Robot dev proj",
    "archivedAt": 1589983468418,
    "createdAt": 1589983468418,
    "createdBy": {
      "_id": "632476e04e46cdabedb1b1e1",
      "fullname": "Or Agami",
      "imgUrl": "profile-img-or"
    },
    "style": {},
    "labels": [
      {
        "id": "l101",
        "title": "Done",
        "color": "--status-clr1"
      },
      {
        "id": "l102",
        "title": "Progress",
        "color": "--status-clr1"
      }
    ],
    "members": [
      {
        "_id": "632476e04e46cdabedb1b1e2",
        "fullname": "Tal Ben Atiya",
        "imgUrl": "profile-img-tal"
      },
      {
        "_id": "632476e04e46cdabedb1b1e0",
        "fullname": "Gal Wender",
        "imgUrl": "profile-img-gal"
      },
      {
        "_id": "632476e04e46cdabedb1b1e1",
        "fullname": "Or Agami",
        "imgUrl": "profile-img-or"
      }
    ],
    "groups": [
      {
        "id": "g101",
        "title": "Design",
        "archivedAt": 1589983468418,
        "tasks": [
          {
            "id": "c101",
            "title": "Nav bar"
          },
          {
            "id": "c102",
            "title": "Home page"
          },
          {
            "id": "gSmpvT",
            "title": "Loader animation"
          }
        ],
        "style": {}
      },
      {
        "id": "g102",
        "title": "Group 2",
        "tasks": [
          {
            "id": "c103",
            "title": "Do that",
            "archivedAt": 1589983468418
          },
          {
            "id": "c104",
            "title": "Help me",
            "status": "in-progress",
            "description": "description",
            "comments": [
              {
                "id": "ZdPnm",
                "txt": "also @yaronb please CR this",
                "createdAt": 1590999817436,
                "byMember": {
                  "_id": "632476e04e46cdabedb1b1e1",
                  "fullname": "Or Agami",
                  "imgUrl": "profile-img-or"
                }
              }
            ],
            "checklists": [
              {
                "id": "YEhmF",
                "title": "Checklist",
                "todos": [
                  {
                    "id": "212jX",
                    "title": "To Do 1",
                    "isDone": false
                  }
                ],
                "createdAt": 1590999817436,
                "byMember": {
                  "_id": "632476e04e46cdabedb1b1e1",
                  "fullname": "Or Agami",
                  "imgUrl": "profile-img-or"
                }
              }
            ],
            "memberIds": [
              "632476e04e46cdabedb1b1e2"
            ],
            "labelIds": [
              "l101",
              "l102"
            ],
            "createdAt": 1590999730348,
            "dueDate": 16156215211,
            "byMember": {
              "_id": "632476e04e46cdabedb1b1e1",
              "fullname": "Or Agami",
              "imgUrl": "profile-img-or"
            },
            "style": {
              "bgColor": "#26de81"
            }
          }
        ],
        "style": {}
      }
    ],
    "activities": [
      {
        "id": "a101",
        "txt": "Changed Color",
        "createdAt": 154514,
        "byMember": {
          "_id": "632476e04e46cdabedb1b1e1",
          "fullname": "Or Agami",
          "imgUrl": "profile-img-or"
        },
        "task": {
          "id": "c101",
          "title": "Replace Logo"
        }
      }
    ],
    "cmpsOrder": [
      "member",
      "status",
      "priority",
      "attachments",
      "timeline"
    ]
  },
  {
    "_id": "b102",
    "title": "New dev",
    "archivedAt": 1589983468418,
    "createdAt": 1589983468418,
    "createdBy": {
      "_id": "632476e04e46cdabedb1b1e1",
      "fullname": "Or Agami",
      "imgUrl": "profile-img-or"
    },
    "style": {},
    "labels": [
      {
        "id": "l101",
        "title": "Done",
        "color": "--status-clr1"
      },
      {
        "id": "l102",
        "title": "Progress",
        "color": "--status-clr1"
      }
    ],
    "members": [
      {
        "_id": "632476e04e46cdabedb1b1e1",
        "fullname": "Or Agami",
        "imgUrl": "profile-img-or"
      }
    ],
    "groups": [
      {
        "id": "g101",
        "title": "Group 1",
        "archivedAt": 1589983468418,
        "tasks": [
          {
            "id": "c101",
            "title": "Replace logo"
          },
          {
            "id": "c102",
            "title": "Add Samples"
          }
        ],
        "style": {}
      },
      {
        "id": "g102",
        "title": "Group 2",
        "tasks": [
          {
            "id": "c103",
            "title": "Do that",
            "archivedAt": 1589983468418
          },
          {
            "id": "c104",
            "title": "Help me",
            "status": "in-progress",
            "description": "description",
            "comments": [
              {
                "id": "ZdPnm",
                "txt": "also @yaronb please CR this",
                "createdAt": 1590999817436,
                "byMember": {
                  "_id": "632476e04e46cdabedb1b1e1",
                  "fullname": "Or Agami",
                  "imgUrl": "profile-img-or"
                }
              }
            ],
            "checklists": [
              {
                "id": "YEhmF",
                "title": "Checklist",
                "todos": [
                  {
                    "id": "212jX",
                    "title": "To Do 1",
                    "isDone": false
                  }
                ],
                "createdAt": 1590999817436,
                "byMember": {
                  "_id": "632476e04e46cdabedb1b1e1",
                  "fullname": "Or Agami",
                  "imgUrl": "profile-img-or"
                }
              }
            ],
            "memberIds": [
              "632476e04e46cdabedb1b1e1"
            ],
            "labelIds": [
              "l101",
              "l102"
            ],
            "createdAt": 1590999730348,
            "dueDate": 16156215211,
            "byMember": {
              "_id": "632476e04e46cdabedb1b1e1",
              "fullname": "Or Agami",
              "imgUrl": "profile-img-or"
            },
            "style": {
              "bgColor": "#26de81"
            }
          }
        ],
        "style": {}
      }
    ],
    "activities": [
      {
        "id": "a101",
        "txt": "Changed Color",
        "createdAt": 154514,
        "byMember": {
          "_id": "632476e04e46cdabedb1b1e1",
          "fullname": "Or Agami",
          "imgUrl": "profile-img-or"
        },
        "task": {
          "id": "c101",
          "title": "Replace Logo"
        }
      }
    ],
    "cmpsOrder": [
      "member",
      "status",
      "priority",
      "attachments",
      "timeline"
    ]
  },
  {
    "_id": "tuUXJ",
    "title": "agenda",
    "members": [
      {
        "_id": "632476e04e46cdabedb1b1e2",
        "fullname": "Tal Ben Atiya",
        "imgUrl": "profile-img-tal"
      },
      {
        "_id": "632476e04e46cdabedb1b1e0",
        "fullname": "Gal Wender",
        "imgUrl": "profile-img-gal"
      },
      {
        "_id": "632476e04e46cdabedb1b1e1",
        "fullname": "Or Agami",
        "imgUrl": "profile-img-or"
      }
    ],
    "groups": [
      {
        "id": "u5Ww3G",
        "title": "Design",
        "tasks": [
          {
            "id": "6GcnqY",
            "title": "Nav bar",
            "status": "Working on it",
            "priority": "Critical",
            "memberIds": [
              "632476e04e46cdabedb1b1e2",
              "632476e04e46cdabedb1b1e0",
              "632476e04e46cdabedb1b1e1"
            ]
          },
          {
            "id": "JooqqA",
            "title": "Home page",
            "status": "Done",
            "priority": "Medium",
            "memberIds": [
              "632476e04e46cdabedb1b1e2",
              "632476e04e46cdabedb1b1e0",
              "632476e04e46cdabedb1b1e1"
            ]
          },
          {
            "id": "woFH9w",
            "title": "Loader animation",
            "status": "Need help",
            "priority": "High",
            "memberIds": [
              "632476e04e46cdabedb1b1e2",
              "632476e04e46cdabedb1b1e0",
              "632476e04e46cdabedb1b1e1"
            ]
          },
          {
            "id": "xc4QYw",
            "title": "Media queries",
            "status": "Stuck",
            "priority": "Medium",
            "memberIds": [
              "632476e04e46cdabedb1b1e2",
              "632476e04e46cdabedb1b1e0",
              "632476e04e46cdabedb1b1e1"
            ]
          },
          {
            "id": "LpuFi9",
            "title": "Admin deashboard",
            "status": "Waiting for QA",
            "priority": "Low",
            "memberIds": [
              "632476e04e46cdabedb1b1e2",
              "632476e04e46cdabedb1b1e0",
              "632476e04e46cdabedb1b1e1"
            ]
          }
        ]
      },
      {
        "id": "LTOP3z",
        "title": "Development",
        "tasks": [
          {
            "id": "CGRT4E",
            "title": "CRUD",
            "status": "Done",
            "priority": "Critical",
            "memberIds": [
              "632476e04e46cdabedb1b1e0",
              "632476e04e46cdabedb1b1e1"
            ]
          },
          {
            "id": "55BKFX",
            "title": "REST API routing",
            "status": "Working on it",
            "priority": "High",
            "memberIds": [
              "632476e04e46cdabedb1b1e2"
            ]
          },
          {
            "id": "HdzYV1",
            "title": "Data base connection",
            "status": "Waiting for QA",
            "priority": "Low",
            "memberIds": [
              "632476e04e46cdabedb1b1e0",
              "632476e04e46cdabedb1b1e1"
            ]
          },
          {
            "id": "M4qCwx",
            "title": "Cache service",
            "status": "Working on it",
            "priority": "Medium",
            "memberIds": [
              "632476e04e46cdabedb1b1e0"
            ]
          },
          {
            "id": "Su8fOZ",
            "title": "Socket service",
            "status": "Need help",
            "memberIds": [
              "632476e04e46cdabedb1b1e0"
            ]
          },
          {
            "id": "ggpA9r",
            "title": "PWA",
            "status": "Pending",
            "priority": "Low",
            "memberIds": [
              "632476e04e46cdabedb1b1e1"
            ]
          }
        ]
      },
      {
        "id": "vnVT6u",
        "title": "QA",
        "tasks": [
          {
            "id": "2ChAvJ",
            "title": "Group Invites",
            "status": "Done",
            "priority": "Low",
            "memberIds": [
              "632476e04e46cdabedb1b1e2"
            ]
          },
          {
            "id": "qxvCiE",
            "title": "Page navigation",
            "status": "Done",
            "priority": "Medium",
            "memberIds": [
              "632476e04e46cdabedb1b1e1"
            ]
          },
          {
            "id": "PrNsii",
            "title": "Login and Signup",
            "status": "Done",
            "priority": "Medium",
            "memberIds": [
              "632476e04e46cdabedb1b1e2"
            ]
          },
          {
            "id": "Zl4r6y",
            "title": "Task management",
            "status": "Working on it",
            "priority": "High",
            "memberIds": [
              "632476e04e46cdabedb1b1e0"
            ]
          },
          {
            "id": "wyGTCe",
            "title": "Search",
            "status": "Working on it",
            "priority": "Medium",
            "memberIds": [
              "632476e04e46cdabedb1b1e1"
            ]
          },
          {
            "id": "lF92Hc",
            "title": "Profile",
            "status": "Stuck",
            "priority": "Medium",
            "memberIds": [
              "632476e04e46cdabedb1b1e2"
            ]
          },
          {
            "id": "qQJOmp",
            "title": "Database",
            "status": "Done",
            "priority": "Low",
            "memberIds": [
              "632476e04e46cdabedb1b1e1"
            ]
          },
          {
            "id": "X8CdG0",
            "title": "Inbox / Notification",
            "status": "Working on it",
            "priority": "Medium",
            "memberIds": [
              "632476e04e46cdabedb1b1e0"
            ]
          },
          {
            "id": "jWkZ32",
            "title": "My work page",
            "status": "Need help",
            "priority": "High",
            "memberIds": [
              "632476e04e46cdabedb1b1e0"
            ]
          },
          {
            "id": "MyE1WT",
            "title": "Task chat",
            "status": "Working on it",
            "priority": "High",
            "memberIds": [
              "632476e04e46cdabedb1b1e2"
            ]
          },
          {
            "id": "hwemSv",
            "title": "Timeline",
            "status": "Pending",
            "priority": "High",
            "memberIds": [
              "632476e04e46cdabedb1b1e1"
            ]
          },
          {
            "id": "ux1j9j",
            "title": "Drag and Drop",
            "status": "Working on it",
            "priority": "High"
          }
        ]
      },
      {
        "id": "eQiOd4",
        "title": "Deployment",
        "tasks": [
          {
            "id": "oVGzc4",
            "title": "AWS DB hosting",
            "status": "Pending"
          },
          {
            "id": "faKu7I",
            "title": "Frontend compile",
            "status": "Pending"
          },
          {
            "id": "YM0AUK",
            "title": "Docker Img build",
            "status": "Pending"
          },
          {
            "id": "wxz4Ub",
            "title": "Docker hub deployment",
            "status": "Pending"
          }
        ]
      }
    ],
    "cmpsOrder": [
      "member",
      "priority",
      "status",
      "lastUpdated",
      "attachments",
      "timeline"
    ]
  }
]

const statusOpts = ['done', 'working on it', 'stuck', 'need help', 'waiting for qa', 'pending', '']
const priorityOpts = ['low', 'medium', 'high', 'critical', '']

const STORAGE_KEY = 'boardDB'
//?- Prod:
// const BASE_URL = 'board/'

async function query(filterBy) {
  //?- Dev:
  let boards = await storageService.query(STORAGE_KEY)
  if (!boards || boards.length === 0) {
    console.log('boards.length:', boards.length)
    boards = gBoards
    storageService.postMany(STORAGE_KEY, boards)
  }
  return boards

  //?- Prod:
  // if (filterBy) return httpService.get(BASE_URL, filterBy)
  // else return httpService.get(BASE_URL)
}

function getById(boardId, sortBy, filterBy) {
  //?- Dev:
  return storageService.get(STORAGE_KEY, boardId)
    .then((board) => {
      if (!board) {
        board = gBoards.find(board => board._id === boardId)
      }
      // Todo: merge sort with filter !!
      if (sortBy) {
        board.groups.forEach(group => {
          if (sortBy.by === 'title') {
            group.tasks.sort((taskA, taskB) => taskA.title.localeCompare(taskB.title))
          }

          if (sortBy.by === 'status') {
              const res = []
              statusOpts.forEach(currStatus => {
                  group.tasks.forEach(task => {
                      if (task.status.toLowerCase() === currStatus) res.push(task)
                  })
              })
              group.tasks = res
          }

          if (sortBy.by === 'priority') {
              const res = []
              priorityOpts.forEach(currPriority => {
                  group.tasks.forEach(task => {
                      if (task.priority.toLowerCase() === currPriority) res.push(task)
                  })
              })
              group.tasks = res
          }
        
          if (sortBy.isDecending) {
            group.tasks = group.tasks.reverse()
          }
        })


      }

      if (filterBy) {
        board.groups.map((group) =>
          group.tasks = group.tasks.filter((task) =>
            (filterBy.term) ? task.title.toLowerCase().includes(filterBy.term.toLowerCase()) : true
          )
        )
      }
      return board
    })
  //?- Prod:
  // return httpService.get(BASE_URL + boardId)
}

function remove(boardId) {
  //?- Dev:
  return storageService.remove(STORAGE_KEY, boardId)
  //?- Prod:
  // return httpService.delete(BASE_URL + boardId)
}

function update(board) {
  //?- Dev:
  if (board._id) return storageService.put(STORAGE_KEY, board)
  //?- Prod:
  // if (board._id) return httpService.put(BASE_URL + board._id, board)
  // else return httpService.post(BASE_URL, board)
}

function save(board) {
  //?- Dev:
  // Todo: board.createBy
  board.groups = [{ id: utilService.makeId(), title: 'Group 1', tasks: [] }]
  return storageService.post(STORAGE_KEY, board)
  //?- Prod:
  // if (board._id) return httpService.put(BASE_URL + board._id, board)
  // else return httpService.post(BASE_URL, board)
}