import React from 'react';
import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';

const Pdf = ({ setPdfMode }) => {
  return (
    <div>
      <h4 onClick={ () => createPdf(setPdfMode) }>Download pdf version</h4>
    </div>
  );
};

function createPdf(setPdfMode) {
  html2canvas(document.body, { onclone: ()=> {
    setPdfMode(true);
  }})
    .then((canvas) => {
      const img = canvas.toDataURL('image/PNG');
      const pdf = new jsPdf('p', 'mm', 'a4');
      pdf.addImage(img, 'PNG', 0, 0, 211, 298);
      pdf.save('Liam Kennedy - CV.pdf');
      setPdfMode(false);
    })
}

export default Pdf