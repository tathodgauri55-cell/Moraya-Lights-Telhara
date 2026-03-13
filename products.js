const products=[
{
name:"LED Series Light",
price:120,
image:"images/light1.jpg"
},
{
name:"Leaf Light",
price:180,
image:"images/light2.jpg"
},
{
name:"Wall Light",
price:350,
image:"images/light3.jpg"
}
];

let html="";

products.forEach(p=>{
html+=`
<div class="product">
<img src="${p.image}" width="150">
<h3>${p.name}</h3>
<p>Price ₹${p.price}</p>
</div>
`;
});

document.getElementById("products").innerHTML=html;
