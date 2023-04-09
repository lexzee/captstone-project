import { Grid, GridItem} from '@chakra-ui/react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
    {/* <Grid gridGap={2} autoFlow="row dense" templateColumns="repeat(12, 1fr)">
      <GridItem gridColumnStart={3} colSpan={8}> */}
    <Grid gridGap={2} autoFlow="row dense" templateColumns="repeat(1, 1fr)">
      <GridItem>
        <Header />
        <Main />
        <Footer />
      </GridItem>
    </Grid>
    </>
  );
}

export default App;
