import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // All the elements in this return statement will render regardless of the URL
  return (
    
    <div className="flex-column justify-flex-start min-100-vh">
    <Header />
    <div className="container">
        {/* The Outlet component will be replaced by the proper page based on the URL */}
        <Outlet />
    </div>
    <Footer />
    </div>
    
  );
}

export default App;