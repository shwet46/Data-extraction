export const validateData = (data) => {
    const errors = [];
  
    // Example validation for invoices
    data.invoices.forEach((invoice, index) => {
      if (!invoice.serial) errors.push(`Invoice #${index + 1} is missing a serial number.`);
      if (!invoice.total) errors.push(`Invoice #${index + 1} is missing a total amount.`);
    });
  
    return errors;
  };  