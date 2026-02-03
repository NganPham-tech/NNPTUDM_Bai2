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


let products = [product1, product2, product3, product4, product5, product6, product7, product8];


let mang = products.map(function(item) {
    return {
        name: item.name,
        price: item.price
    };
});
console.log("Câu 3:", mang);


let conHangTrongKho = products.filter(item => item.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng: ", conHangTrongKho);


let sanPhamTren30 = products.some(item => item.price > 30000000);
console.log("Câu 5 - Có sản phẩm trên 30 triệu: ", sanPhamTren30);


let phukien = products.filter(item => item.category === "Đồ điện tử");
let phukiendangban = phukien.every(item => item.isAvailable === true);
console.log("Câu 6 - Tất cả sản phẩm Đồ điện tử đang bán:", phukiendangban);


let totalGiaTriHangHoa = products.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);
console.log("Câu 7 - Tổng giá trị hàng hóa trong kho:", totalGiaTriHangHoa);


console.log("Câu 8 - Danh sách sản phẩm:");
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

function displayArray(id, data) {
    document.getElementById(id).innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}


displayArray('res-4', conHangTrongKho);


document.getElementById('res-5').innerText = sanPhamTren30 ? "Có sản phẩm giá trên 30,000,000đ" : "👉 Không có sản phẩm nào trên 30,000,000đ";


document.getElementById('res-6').innerText = phukiendangban ? "Tất cả đều đang bán" : "❌ Có sản phẩm đang ngừng bán";

document.getElementById('res-7').innerText = totalGiaTriHangHoa.toLocaleString('vi-VN') + " VNĐ";


let list8 = "";
for (let item of products) {
    list8 += `<li>${item.name} - ${item.category} - <span class="status">${item.isAvailable ? "Đang bán" : "Ngừng bán"}</span></li>`;
}
document.getElementById('res-8').innerHTML = list8;


let details9 = "";
for (let key in firstProduct) {
    details9 += `<p><b>${key}:</b> ${firstProduct[key]}</p>`;
}
document.getElementById('res-9').innerHTML = details9;


document.getElementById('res-10').innerText = "Danh sách: " + sellingNames.join(" | ");