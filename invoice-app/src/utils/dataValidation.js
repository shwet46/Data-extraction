export const validateData = (data, type) => {
    const errors = [];
  
    if (type === 'invoices') {
      data.forEach((invoice, index) => {
        if (!invoice.customerName) errors.push(`Missing customer name in invoice #${index + 1}`);
        if (!invoice.totalAmount) errors.push(`Missing total amount in invoice #${index + 1}`);
      });
    }
  
    if (type === 'products') {
      data.forEach((product, index) => {
        if (!product.name) errors.push(`Missing product name in product #${index + 1}`);
        if (!product.quantity) errors.push(`Missing quantity in product #${index + 1}`);
      });
    }
  
    if (type === 'customers') {
      data.forEach((customer, index) => {
        if (!customer.name) errors.push(`Missing customer name in customer #${index + 1}`);
        if (!customer.phoneNumber) errors.push(`Missing phone number in customer #${index + 1}`);
      });
    }
  
    return errors;
  };  