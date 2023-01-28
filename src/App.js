// помоги найти ощибку
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import { AuthProvider } from './contexts/AuthContext';
import SignupScreen from './screens/Members/SignupScreen';
import SigninScreen from './screens/Members/SigninScreen';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <switch>
            <Route exact path='/members/signup' element={<SignupScreen />} />
            <Route exact path='/' element={<SigninScreen />} />
          </switch>
          <Route exact path='*' element={<Navigation />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
