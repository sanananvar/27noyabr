//   7.1 product arrayindəki producların qiymətləri cəmini

const products = [
    {
      id: 1,
      title: "Smartphone",
      description: "A high-end smartphone with the latest features.",
      price: 799.99,
    },
    {
      id: 2,
      title: "Laptop",
      description: "Powerful laptop with a large screen and fast processor.",
      price: 1299.99,
    },
    {
      id: 3,
      title: "Coffee Maker",
      description: "An automatic coffee maker with a built-in grinder.",
      price: 99.99,
    },
    {
      id: 4,
      title: "Headphones",
      description: "Wireless over-ear headphones with noise-cancellation.",
      price: 199.99,
    },
    {
      id: 5,
      title: "Smart TV",
      description: "55-inch 4K Smart TV with streaming apps built-in.",
      price: 699.99,
    },
  ];

function SumPrices(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return sum;

    
}
// console.log(SumPrices(products))


// 7.2 product arrayindəki producların qiymətləri  ortalamasını tapın

function averagePrices(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    let average = sum / products.length;
    return average;
    
}

console.log(averagePrices(products))