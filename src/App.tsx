import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import StreakDashboard from './pages/StreakDashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('landing');
  };

  const renderPage = () => {
    if (!isLoggedIn && currentPage !== 'landing') {
      return <Landing onLogin={handleLogin} />;
    }

    switch (currentPage) {
      case 'landing':
        return <Landing onLogin={handleLogin} />;
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      case 'explore':
        return <Explore />;
      case 'streaks':
        return <StreakDashboard />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoggedIn && (
        <Navbar 
          currentPage={currentPage} 
          onPageChange={setCurrentPage}
          onLogout={handleLogout}
        />
      )}
      <main className={isLoggedIn ? 'pt-16' : ''}>
        {renderPage()}
      </main>
      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;