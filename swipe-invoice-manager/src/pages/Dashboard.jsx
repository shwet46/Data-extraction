import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InvoicesTab from '../components/Tabs/InvoicesTab';
import ProductsTab from '../components/Tabs/ProductsTab';
import CustomersTab from '../components/Tabs/CustomersTab';
import FileUpload from '../components/FileUpload';
import { setInvoices } from '../features/invoicesSlice';
import { setProducts } from '../features/productsSlice';
import { setCustomers } from '../features/customersSlice';
import extractDataFromFile from '../utils/extractDataFromFile';
import parseExtractedData from '../utils/parseExtractedData';

const Dashboard = () => {
    const dispatch = useDispatch();
    const [invoices, setInvoicesState] = useState([]);
    const [products, setProductsState] = useState([]);
    const [customers, setCustomersState] = useState([]);

    const handleFileUpload = async (files) => {
        if (files.length > 0) {
            const file = files[0];
            const extractedData = await extractDataFromFile(file);
            if (extractedData) {
                const { invoices, products, customers } = parseExtractedData(extractedData);
                dispatch(setInvoices(invoices));
                dispatch(setProducts(products));
                dispatch(setCustomers(customers));
                setInvoicesState(invoices);
                setProductsState(products);
                setCustomersState(customers);
            }
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Invoice Manager Dashboard</h1>
            <FileUpload onUpload={handleFileUpload} />
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Invoices</h2>
                <InvoicesTab invoices={invoices} />
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Products</h2>
                <ProductsTab products={products} />
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Customers</h2>
                <CustomersTab customers={customers} />
            </div>
        </div>
    );
};

export default Dashboard;