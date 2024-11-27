const container = document.querySelector('.container');
const searchInput = document.getElementById('searchInput');

let apiSuppliers = JSON.parse(localStorage.getItem('apiSuppliers')) || [];
let formSuppliers = JSON.parse(localStorage.getItem('suppliers')) || [];

let allSuppliers = [...apiSuppliers, ...formSuppliers];

function createCards(suppliers) {
  container.innerHTML = '';

  suppliers.forEach((supplier, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '18rem';
    card.style.marginTop = '30px';
    card.innerHTML = `
      <img src="https://via.placeholder.com/150" class="card-img-top" alt="${supplier.companyName}">
      <div class="card-body">
        <h5 class="card-title">${supplier.companyName}</h5>
        <p class="card-text">${supplier.contactName}, ${supplier.contactTitle}</p>
        <a href="details.html?supplier=${supplier.companyName}" class="btn btn-primary">View Details</a>
        <button class="btn btn-warning mt-2 edit-btn" data-index="${index}">Edit</button>
        <button class="btn btn-danger mt-2 delete-btn" data-index="${index}">Delete</button>
      </div>
    `;
    container.appendChild(card);

    card.querySelector('.edit-btn').addEventListener('click', function() {
      const supplierToEdit = allSuppliers[this.dataset.index];
      
      document.getElementById('companyName').value = supplierToEdit.companyName;
      document.getElementById('contactName').value = supplierToEdit.contactName;
      document.getElementById('contactTitle').value = supplierToEdit.contactTitle;
      
      document.getElementById('editForm').dataset.index = this.dataset.index;
      
      const myModal = new bootstrap.Modal(document.getElementById('editModal'));
      myModal.show();
    });

    card.querySelector('.delete-btn').addEventListener('click', function() {
      const indexToDelete = this.dataset.index;

      Swal.fire({
        title: 'Are you sure?',
        text: 'This action will permanently delete the supplier.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          allSuppliers.splice(indexToDelete, 1);
          localStorage.setItem('suppliers', JSON.stringify(allSuppliers));

          Swal.fire(
            'Deleted!',
            'The supplier has been deleted.',
            'success'
          );

          window.location.reload();
        } else if (result.isDismissed) {
          Swal.fire(
            'Cancelled',
            'The supplier was not deleted.',
            'info'
          );
        }
      });
    });
  });
}

createCards(allSuppliers);

searchInput.addEventListener('input', function() {
  const query = searchInput.value.toLowerCase();

  const filteredSuppliers = allSuppliers.filter(supplier => {
    return supplier.companyName.toLowerCase().includes(query) ||
           supplier.contactName.toLowerCase().includes(query) ||
           supplier.contactTitle.toLowerCase().includes(query);
  });

  createCards(filteredSuppliers);
});

document.getElementById('saveChangesBtn').addEventListener('click', function() {
  const indexToEdit = document.getElementById('editForm').dataset.index;
  
  const updatedSupplier = {
    companyName: document.getElementById('companyName').value,
    contactName: document.getElementById('contactName').value,
    contactTitle: document.getElementById('contactTitle').value
  };

  allSuppliers[indexToEdit] = updatedSupplier;

  localStorage.setItem('suppliers', JSON.stringify(allSuppliers));

  Swal.fire(
    'Updated!',
    'The supplier has been updated.',
    'success'
  );

  const myModal = new bootstrap.Modal(document.getElementById('editModal'));
  myModal.hide();

  window.location.reload();
});
