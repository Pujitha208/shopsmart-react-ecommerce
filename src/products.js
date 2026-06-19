const products = [
  // Electronics
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 50000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
  },
  {
    id: 2,
    name: "iPhone 15",
    category: "Electronics",
    price: 70000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
  },
  {
    id: 3,
    name: "Smart TV",
    category: "Electronics",
    price: 45000,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 3000,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600"
  },
  {
    id: 5,
    name: "Tablet",
    category: "Electronics",
    price: 25000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600"
  },

  // Accessories
  {
    id: 6,
    name: "Leather Wallet",
    category: "Accessories",
    price: 800,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600"
  },
  {
    id: 7,
    name: "Sunglasses",
    category: "Accessories",
    price: 1200,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
  },
  {
    id: 8,
    name: "Wrist Watch",
    category: "Accessories",
    price: 3500,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
  },
  {
    id: 9,
    name: "Backpack",
    category: "Accessories",
    price: 1800,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"
  },
  {
    id: 10,
    name: "Cap",
    category: "Accessories",
    price: 500,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600"
  },
  // Mens Fashion
{
    id: 11,
    name: "Men's T-Shirt",
    category: "Mens Fashion",
    price: 699,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
},
{
    id: 12,
    name: "Men's Jeans",
    category: "Mens Fashion",
    price: 1499,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"
},
{
    id: 13,
    name: "Men's Hoodie",
    category: "Mens Fashion",
    price: 1799,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"
},
{
    id: 14,
    name: "Men's Formal Shirt",
    category: "Mens Fashion",
    price: 1299,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600"
},
{
    id: 15,
    name: "Men's Jacket",
    category: "Mens Fashion",
    price: 2499,
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600"
},
// Womens Fashion
{
    id: 16,
    name: "Women's Kurti",
    category: "Womens Fashion",
    price: 999,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600"
},
{
    id: 17,
    name: "Women's Saree",
    category: "Womens Fashion",
    price: 1999,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600"
},
{
    id: 18,
    name: "Women's Handbag",
    category: "Womens Fashion",
    price: 1499,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
},
{
    id: 19,
    name: "Women's Top",
    category: "Womens Fashion",
    price: 799,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
},
{
    id: 20,
    name: "Women's Jeans",
    category: "Womens Fashion",
    price: 1299,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600"
},
// Footwear
{
    id: 21,
    name: "Running Shoes",
    category: "Footwear",
    price: 2999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
},
{
    id: 22,
    name: "Sneakers",
    category: "Footwear",
    price: 3499,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600"
},
{
    id: 23,
    name: "Sports Shoes",
    category: "Footwear",
    price: 2799,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600"
},
{
    id: 24,
    name: "Leather Boots",
    category: "Footwear",
    price: 3999,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600"
},
{
    id: 25,
    name: "Casual Loafers",
    category: "Footwear",
    price: 2499,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600"
},
// Groceries
{
    id: 26,
    name: "Rice 5kg",
    category: "Groceries",
    price: 350,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600"
},
{
    id: 27,
    name: "Wheat Flour",
    category: "Groceries",
    price: 220,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600"
},
{
    id: 28,
    name: "Cooking Oil",
    category: "Groceries",
    price: 180,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600"
},
{
    id: 29,
    name: "Sugar 1kg",
    category: "Groceries",
    price: 55,
    image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=600"
},
{
    id: 30,
    name: "Tea Powder",
    category: "Groceries",
    price: 120,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=600"
},
// Books
{
    id: 31,
    name: "JavaScript Guide",
    category: "Books",
    price: 599,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600"
},
{
    id: 32,
    name: "React Handbook",
    category: "Books",
    price: 699,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600"
},
{
    id: 33,
    name: "Python Programming",
    category: "Books",
    price: 799,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
},
{
    id: 34,
    name: "Data Structures",
    category: "Books",
    price: 899,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600"
},
{
    id: 35,
    name: "AI Basics",
    category: "Books",
    price: 999,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600"
},
// Home Appliances
{
    id: 36,
    name: "Refrigerator",
    category: "Home Appliances",
    price: 28000,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600"
},
{
    id: 37,
    name: "Washing Machine",
    category: "Home Appliances",
    price: 22000,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600"
},
{
    id: 38,
    name: "Microwave Oven",
    category: "Home Appliances",
    price: 8500,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=600"
},
{
    id: 39,
    name: "Vacuum Cleaner",
    category: "Home Appliances",
    price: 6500,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600"
},
{
    id: 40,
    name: "Air Conditioner",
    category: "Home Appliances",
    price: 35000,
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600"
}
];

export default products;