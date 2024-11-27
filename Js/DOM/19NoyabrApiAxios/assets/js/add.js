document.getElementById('addForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const companyName = document.getElementById('companyName').value;
    const contactName = document.getElementById('contactName').value;
    const contactTitle = document.getElementById('contactTitle').value;

    const existingSuppliers = JSON.parse(localStorage.getItem('suppliers')) || [];

    existingSuppliers.push({ companyName, contactName, contactTitle });

    localStorage.setItem('suppliers', JSON.stringify(existingSuppliers));
    
    window.location.href = 'index.html';
  });