import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from '../../pages/user/SignUp';
import SignIn from '../../pages/user/SignIn';
import ShopPage from '../../pages/user/Shop';

function UserRoutes() {
  return (

        <Router>
          <Routes>
            
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/shop" element={<ShopPage />} />
            
            
            </Routes>
            </Router>
  )
}

export default UserRoutes