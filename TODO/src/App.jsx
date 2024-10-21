import './App.css'

function App() {

  return (
    <>
     <footer>
        <div class="author-text">
            <p>Made by <a href="https://github.com/karan-raval" target="_blank"><b>Karan raval</b></a></p>
        </div>
    </footer>
    
    <div class="container">
        <header>
            <h1>Todo List</h1>
            <div class="alert-message"></div>
            <div class="input-section">
                <input type="text" placeholder="Add a todo . . ." class="input input-bordered input-secondary w-full max-w-xs" />
                <input type="date" class="input input-bordered input-secondary w-full max-w-xs schedule-date" />
                <button class="btn btn-secondary add-task-button">
                    <i class="bx bx-plus bx-sm"></i>
                </button>
            </div>
        </header>

        <div class="todos-filter">
            <div class="dropdown">
                <label tabindex="0" class="btn m-1">Filter</label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onclick="filterTodos('all')"><a>All</a></li>
                    <li onclick="filterTodos('pending')"><a>Pending</a></li>
                    <li onclick="filterTodos('completed')"><a>Completed</a></li>
                </ul>
            </div>
            <button class="btn btn-luxury delete-all-btn">
                Delete All
            </button>
        </div>

         <table class="table w-full">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody class="todos-list-body">
            </tbody>
        </table>

    </div>

    <div class="theme-switcher">
        <div class="dropdown dropdown-left">
            <label tabindex="0" class="btn m-1">
                <i class='bx bxs-palette bx-sm'></i>
            </label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li class="theme-item" theme="cupcake"><a>cupcake</a></li>
                <li class="theme-item" theme="dark"><a>dark</a></li>
                <li class="theme-item" theme="light"><a>light</a></li>
                <li class="theme-item" theme="bumblebee"><a>bumblebee</a></li>
                <li class="theme-item" theme="synthwave"><a>synthwave</a></li>
                <li class="theme-item" theme="halloween"><a>halloween</a></li>
                <li class="theme-item" theme="fantasy"><a>fantasy</a></li>
                <li class="theme-item" theme="dracula"><a>dracula</a></li>
                <li class="theme-item" theme="aqua"><a>aqua</a></li>
                <li class="theme-item" theme="luxury"><a>luxury</a></li>
                <li class="theme-item" theme="night"><a>night</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default App
