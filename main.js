function Product (id, name, price, quantity, category, isAvailable){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
} 
let product1 = new Product(1, "Laptop Acer Gaming", 12000000, 10, "Đồ điện tử", true);
let product2 = new Product(2, "Iphone 17 pro max", 40000000, 25, "Đồ điện tử", true);
let product3 = new Product(3, "Bàn gaming", 20000000, 5, "Đồ nội thất", false);
let product4 = new Product(4, "Sổ tay", 50000, 100, "Văn phòng phẩm", true);
let product5 = new Product(5, "Tai nghe JBL", 7000000, 15, "Đồ điện tử", true);
let product6 = new Product(6, "Bộ bàn ghế văn phòng", 3000000, 5, "Đồ nội thất", true);
let product7 = new Product(7, "Full box Bút Thiên Long", 100000, 5, "Văn phòng phẩm", true);
let product8 = new Product(8, "Đèn dát vàng xuất xứ Italy", 99999999, 2, "Đồ nội thất", true);

let mang = products.map(function(item) {
    return {
        name: item.name,
        price: item.price
    };
});
console.log("Câu 3:", mang);
console.log("Câu 3 - Mang moi", mang);
let conHangTrongKho = products.filter(item => item.quantity > 0);
console.log("Câu 4 - San pham con hang: ", conHangTrongKho);
let sanPhamTren30 = products.some(item => item.price > 30000000);
console.log("Câu 5 - San pham tren 30 trieu: ", sanPhamTren30);

let phukien = products.filter(item => item.category === "Accessories");
let phukiendangban = phukien.every(item => item.isAvailable === true);
console.log("Câu 6 -Tất cả phụ kiện đang bán:", phukiendangban);
let totalGiaTriHangHoa = products.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);
console.log("Câu 7- Tổng giá trị hàng hóa trong kho:", totalGiaTriHangHoa);

console.log("Câu 8 -Danh sách sản phẩm:");
for (let item of products) {
    console.log(`${item.name} - ${item.category} - ${item.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

console.log("Câu 9 - Chi tiết sản phẩm đầu tiên:");
let firstProduct = products[0];
for (let key in firstProduct) {
   
    console.log(`${key}: ${firstProduct[key]}`);
}
let sellingNames = products
    .filter(item => item.isAvailable && item.quantity > 0)
    .map(item => item.name);

console.log("Câu 10 - Tên các SP đang bán & còn hàng:", sellingNames);