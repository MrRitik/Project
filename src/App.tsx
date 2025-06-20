import { Outlet } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/navbar';
import { Footer } from './components/footer';
function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default App;
