const products = [
    { name: 'Iphone', price: 70000 },
    { name: 'Iphone 6', price: 70000 },
    { name: 'Iphone 7 ', price: 60000 },
    { name: 'Iphone 8', price: 80000 },
    { name: 'Iphone 9', price: 90000 },
    { name: 'Iphone 10', price: 100000 },
];

function searchProducts(products, searchText) {
    const result = [];
    for (const product of products) {
        if (product.name.includes(searchText)) {
            console.log(product.name);
            result.push(product);
        }

    }
    return result;
}

const matched = searchProducts(products, 8);
console.log(matched);