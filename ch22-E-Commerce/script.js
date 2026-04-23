const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3999,
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1299,
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg"
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 899,
    image: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1799,
    image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg"
  },
  {
    id: 6,
    name: "DSLR Camera",
    price: 45999,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 2999,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
  },
  {
    id: 8,
    name: "Backpack",
    price: 1499,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg"
  },
  {
    id: 9,
    name: "Sunglasses",
    price: 799,
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg"
  },
  {
    id: 10,
    name: "Keyboard",
    price: 1999,
    image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg"
  },
  {
    id: 11,
    name: "Office Chair",
    price: 5999,
    image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg"
  },
  {
    id: 12,
    name: "Coffee Maker",
    price: 3499,
    image: "https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg"
  },
  {
    id: 13,
    name: "Fitness Band",
    price: 1599,
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
  },
  {
    id: 14,
    name: "LED Monitor",
    price: 8999,
    image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg"
  },
  {
    id: 15,
    name: "Tablet",
    price: 12999,
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg"
  }
];


products.forEach((p)=>{
    const productlist=document.getElementById("product-list");

    productlist.innerHTML +=`

    <div class="col-md-4 mt-3">
        <div class="card product-card shadow rounded-4" >
  <img src="${p.image}" class="card-img-top  img-fluid" alt="${p.name}">
  <div class="card-body text-center">
    <h5 class="card-title">${p.name}</h5>
    <h4 class="card-text">₹${p.price}</h4>
    <button class="btn btn-primary">Add to cart</button>
  </div>
</div>
    </div>
    `;
})

const  data={ name:"electronic",qty:1};
localStorage.setItem("cartData",JSON.stringify(data));

const productData=localStorage.getItem("cartData");
console.log("productData",JSON.parse(productData));