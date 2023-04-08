import { Suspense, lazy } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
const UserPage = lazy(() => import('./pages/userPage'));
const TodoPage = lazy(() => import('./pages/todoPage'));
const TaskPage = lazy(() => import('./pages/taskPage'));
const CounterPage = lazy(() => import('./pages/counterPage'));

function App(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todo">ToDo</NavLink>
          </li>
          <li>
            <NavLink to="/task">Task</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;