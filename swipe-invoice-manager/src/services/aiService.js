export const processFiles = async (files) => {
    try {
      const formData = new FormData();
      files.forEach((file) => formData.append('files', file));
  
      // Mock API request to AI service
      const response = await fetch('https://api.mock-ai-service.com/process', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error processing files:', error);
      throw error;
    }
  };  