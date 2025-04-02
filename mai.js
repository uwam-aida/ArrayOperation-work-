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
products.push({name:"desk", price:150, category:"furniture"}),
let productName=products.find(products=>product==="Watch");
console.log(productName);
 const productNew=products.map(product=>products.name);
 console.log(productName);
 const productCost=products.filter(product=>products.price>50);
 console.log(productCost);
 products.forEach(product=>{console.log(`product=${product.name},${product.price}`))};
 productSum=reduce((sum,products)=sum+products.price,0);

