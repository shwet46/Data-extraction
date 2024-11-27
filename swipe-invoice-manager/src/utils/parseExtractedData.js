const parseExtractedData = (rawData) => {
    const invoices = rawData.invoices || [];
    const products = rawData.products || [];
    const customers = rawData.customers || [];

    return { invoices, products, customers };
};

export default parseExtractedData;