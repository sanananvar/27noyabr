const app = document.getElementById('app');

const largeImage = document.createElement('div');
largeImage.className = 'large-image';

const largeImageText = document.createElement('p');
largeImageText.textContent = '960 x 360px';
largeImage.appendChild(largeImageText);



app.appendChild(largeImage);


const smallImagesContainer = document.createElement('div');
smallImagesContainer.className = 'small-images';

for (let i = 0; i < 3; i++) {
  const smallImage = document.createElement('div');
  smallImage.className = 'small-image';

  const smallImageText = document.createElement('p');
  smallImageText.textContent = '290 x 180px';
  smallImage.appendChild(smallImageText);



  const description = document.createElement('p');
  description.textContent = 'Nullamlacus dui ipsum conseque lobortis non euisque morbi penas dapibulum orna.';
  smallImage.appendChild(description);

  

  smallImagesContainer.appendChild(smallImage);
}

app.appendChild(smallImagesContainer);
