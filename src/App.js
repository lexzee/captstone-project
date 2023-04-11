import { Grid, GridItem} from '@chakra-ui/react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import ReserveTable from './components/ReserveTable';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserve" element={<ReserveTable />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
