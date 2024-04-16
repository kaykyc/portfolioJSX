import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
// import GraficosPage from './pages/graficos/GraficosPage';
// import DepoimentosPage from './pages/depoimentos/DepoimentosPage';
// import ContatosPage from './pages/contatos/ContatosPage';
// import FaqPage from './pages/faq/FaqPage';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <AppRoutes />
      </Router>
    </div>
  );
}

const AppRoutes = () => (
  <Routes>
    <Route path="/">
      { <Route index element={<Home />} />
}
    </Route>
  </Routes>
);



export default App;
