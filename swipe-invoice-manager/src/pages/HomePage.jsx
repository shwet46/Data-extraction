import React from 'react';
import FileUpload from '../components/FileUpload/FileUpload';
import Tabs from '../components/Tabs/Tabs';

const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Automated Invoice Manager</h1>
      <FileUpload />
      <Tabs />
    </div>
  );
};

export default HomePage;
