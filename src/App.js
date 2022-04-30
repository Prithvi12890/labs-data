import { BrowserRouter } from "react-router-dom";
import Footer from './my-components/Footer';
import NavigateTo from './my-components/NavigateTo';
import NavBar from './my-components/NavBar';
import  Container  from '@mui/material/Container';

function App() {
  return (
        <BrowserRouter>
          <NavBar />
          <Container sx={{marginTop:'6rem',marginBottom:'4rem'}}>
          <NavigateTo />
          </Container>
          <Footer />
        </BrowserRouter>
  );
}

export default App;