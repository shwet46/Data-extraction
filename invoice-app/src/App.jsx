import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Invoices from './pages/Invoices';
import Products from './pages/Products';
import Customers from './pages/Customers';

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <a href="/" className="mr-4 text-blue-500">Home</a>
          <a href="/invoices" className="mr-4 text-blue-500">Invoices</a>
          <a href="/products" className="mr-4 text-blue-500">Products</a>
          <a href="/customers" className="text-blue-500">Customers</a>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Default page */}
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;