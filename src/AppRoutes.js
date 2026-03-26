import SignupPage from './pages/SignupPage';
import MainScreenPage from './pages/MainScreenPage';
import PageNotFound from './pages/PageNotFound';
import DataProvider from './components/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return ( 
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignupPage />} />
          <Route path='/MainScreenPage' element={<MainScreenPage />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>

    </DataProvider> 

  );
}

export default AppRoutes;
