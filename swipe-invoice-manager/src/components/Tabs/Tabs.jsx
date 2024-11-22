import React, { useState } from 'react';
import InvoicesTable from '../Table/InvoicesTable';
import ProductsTable from '../Table/ProductsTable';
import CustomersTable from '../Table/CustomersTable';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('invoices');

  return (
    <div className="bg-white shadow-md rounded-md">
      <div className="flex">
        {['Invoices', 'Products', 'Customers'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`flex-1 p-4 ${
              activeTab === tab.toLowerCase() ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4">
        {activeTab === 'invoices' && <InvoicesTable />}
        {activeTab === 'products' && <ProductsTable />}
        {activeTab === 'customers' && <CustomersTable />}
      </div>
    </div>
  );
};

export default Tabs;