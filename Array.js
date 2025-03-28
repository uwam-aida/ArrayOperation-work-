const products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Table", price: 200, category: "Furniture" },
    { name: "Chair", price: 100, category: "Furniture" },
    { name: "Headphones", price: 50, category: "Electronics" },
    { name: "Shoes", price: 70, category: "Clothing" },
    { name: "Jacket", price: 120, category: "Clothing" },
    { name: "Watch", price: 250, category: "Accessories" },
    { name: "Backpack", price: 90, category: "Accessories" },
    { name: "Sofa", price: 600, category: "Furniture" }
];
products.push({name: "Desk", price: 150,category:"furniture"});
let detailsWartch =products.find(product=>product.name==="Watch");
console.log(detailsWartch);
const productsName=products.map(product=>product.name);
console.log(productsName);
const productCost =products.filter(product=>product.price>100);
console.log(productCost);
products.forEach(product=>{console.log(`product:${product.name},${product.price}`);
});
productSum=products.reduce((sum,product)=>sum+product.price,0);
console.log(productSum);

let div=document.createElement('div');


const ProductlistDiv= document.getElementById("Product-list");
products.forEach(product=>
    {const productItem=document.createElement("p");
        productItem.textContent= `product:${product.name},price:$${product.price}`;
        ProductlistDiv.appendChild(productItem);
    });

