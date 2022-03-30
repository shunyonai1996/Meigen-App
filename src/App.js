import './App.css';
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maxim from "./pages/Maxim/Maxim.js";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Container style={{ minHeight:"100vh" }}>
          <div className="w-100">
            <Routes>
              <Route path="/" element={<Maxim />} />
            </Routes>
          </div>
      </Container>
    </BrowserRouter>
    </>
  );
}

// export default App;
