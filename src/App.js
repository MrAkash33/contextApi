import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import BookList from './components/BookLIst';
import ThemeContext from './contexts/ThemeContext';
import ThemeToggale from './components/ThemeToggle';
import AuthContext from './contexts/AuthContext';
import SongList from './Hooks/Songs';
import BookIndex from './BookList/BookIndex';
import ProjectIndex from './BasedOnContext/ProjectIndex';
import BudgetTracking from './budget-tracking';
// import 'bootstrap/dist/css/bootstrap.min.css';
import DynamicForm from './DynamicForm';
import Tailwind from './TailwindWeb';
import Dashboard from './Dashboard';
function App() {
  return (
    <div className="App">
      {/* <ThemeContext>
        <AuthContext>
          <ThemeToggale />
          <Navbar />
          <BookList />
        </AuthContext>
      </ThemeContext> */}
      {/* <SongList/> */}
      {/* <BookIndex/> */}
      <ProjectIndex/>
      {/* <BudgetTracking /> */}
      {/* <DynamicForm/> */}
      {/* <Tailwind/>
      <Dashboard/> */}
    </div>
  );
}

export default App;
