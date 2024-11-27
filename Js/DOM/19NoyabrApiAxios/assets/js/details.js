const urlParams = new URLSearchParams(window.location.search);
    const companyName = urlParams.get('supplier');

    const apiSuppliers = JSON.parse(localStorage.getItem('apiSuppliers')) || [];
    const formSuppliers = JSON.parse(localStorage.getItem('suppliers')) || [];

    const supplier = [...apiSuppliers, ...formSuppliers].find(supplier => supplier.companyName === companyName);

    if (supplier) {
      document.getElementById('companyName').innerText = supplier.companyName;
      document.getElementById('contactName').innerText = supplier.contactName;
      document.getElementById('contactTitle').innerText = supplier.contactTitle;
    } else {
      document.getElementById('details').innerHTML = '<p>Details not found.</p>';
    }