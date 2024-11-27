import React from 'react';
import FileUpload from './components/FileUpload/FileUpload';
import Tabs from './components/Tabs/Tabs';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center font-bold">
        Automated Invoice Manager
      </header>
      <main className="container mx-auto p-6">
        <FileUpload />
        <Tabs />
      </main>
    </div>
  );
};

export default App;