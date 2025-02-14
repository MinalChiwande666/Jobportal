import { saveAs } from "file-saver";

export const generatePdf = async (pdfUrl) => {
       
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      saveAs(blob, 'candidate.pdf');
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }

};