# Todo List Application

This is a simple Todo List application built with React.js. The application features three distinct columns: New, Ongoing, and Done, allowing users to manage tasks through different stages of completion.

## Features

- **Three Columns for Todo Management:**
  - **New:** The first column where new todo items are created.
  - **Ongoing:** The second column where tasks that are currently being worked on are moved.
  - **Done:** The third column where completed tasks are placed.
  
- **Todo Item Creation:**
  - Users can only create new todo items in the New column.
  - Each todo item has:
    - A title: Short text describing the task.
    - A description: Detailed information about the task.
    - A sort Order label: Indicates the order of the task.
    
- **Moving Items:**
  - A context menu appears on clicking the menu icon on each todo item, allowing users to move the item to other columns.

- **Task Management:**
  - **New Column:** Users can add new tasks here. Each new task is placed at the top of the column.
  - **Ongoing Column:** Users can move tasks to this column from the New column and set a due time for each task. If the task is overdue, an alert is shown.
  - **Done Column:** Users can move tasks to this column from the Ongoing column. The completed date is displayed for each task.
  
- **Responsive Design:** The application is responsive and looks good on different screen sizes.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/SShipu/todo-list.git
cd todo-list
npm install
# todo-list
