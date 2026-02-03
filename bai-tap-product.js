

// Câu 1: Khai báo hàm constructor Product để tạo đối tượng sản phẩm
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products với ít nhất 6 sản phẩm, thuộc ít nhất 2 danh mục khác nhau
const products = [
    new Product('P001', 'iPhone 15 Pro Max', 35000000, 10, 'Điện thoại', true),
    new Product('P002', 'Samsung Galaxy S24', 25000000, 15, 'Điện thoại', true),
    new Product('P003', 'Tai nghe AirPods Pro', 5000000, 20, 'Phụ kiện', true),
    new Product('P004', 'Ốp lưng iPhone', 500000, 0, 'Phụ kiện', false),
    new Product('P005', 'MacBook Pro M3', 45000000, 5, 'Laptop', true),
    new Product('P006', 'Chuột không dây', 800000, 30, 'Phụ kiện', true),
    new Product('P007', 'iPad Air', 18000000, 8, 'Máy tính bảng', true),
    new Product('P008', 'Bàn phím cơ', 2500000, 0, 'Phụ kiện', true)
];

console.log('=== MẢNG PRODUCTS ===');
console.log(products);
console.log('\n');

// Câu 3: Tạo mảng mới chỉ chứa name và price của mỗi sản phẩm
const productNamePrice = products.map(product => ({
    name: product.name,
    price: product.price
}));

console.log('=== CÂU 3: Mảng chứa name và price ===');
console.log(productNamePrice);
console.log('\n');

// Câu 4: Lọc ra các sản phẩm còn hàng (quantity > 0)
const productsInStock = products.filter(product => product.quantity > 0);

console.log('=== CÂU 4: Sản phẩm còn hàng (quantity > 0) ===');
console.log(productsInStock);
console.log('\n');

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30,000,000 không
const hasExpensiveProduct = products.some(product => product.price > 30000000);

console.log('=== CÂU 5: Có sản phẩm giá trên 30,000,000? ===');
console.log(hasExpensiveProduct ? 'Có' : 'Không');
console.log('\n');

// Câu 6: Kiểm tra xem tất cả sản phẩm trong danh mục "Phụ kiện" có đang bán không (isAvailable = true)
const accessoriesProducts = products.filter(product => product.category === 'Phụ kiện');
const allAccessoriesAvailable = accessoriesProducts.every(product => product.isAvailable === true);

console.log('=== CÂU 6: Tất cả sản phẩm "Phụ kiện" đang bán? ===');
console.log('Sản phẩm phụ kiện:', accessoriesProducts.map(p => p.name));
console.log('Tất cả đang bán?', allAccessoriesAvailable ? 'Có' : 'Không');
console.log('\n');

// Câu 7: Tính tổng giá trị tồn kho. Giá trị tồn kho = price × quantity
const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

console.log('=== CÂU 7: Tổng giá trị tồn kho ===');
console.log('Tổng giá trị tồn kho:', totalInventoryValue.toLocaleString('vi-VN'), 'VNĐ');
console.log('\n');

// Câu 8: Sử dụng for...of để duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log('=== CÂU 8: Duyệt bằng for...of ===');
for (const product of products) {
    const status = product.isAvailable ? 'Đang bán' : 'Ngừng bán';
    console.log(`${product.name} - ${product.category} - ${status}`);
}
console.log('\n');

// Câu 9: Sử dụng for...in để:
// - In ra tên thuộc tính
// - In ra giá trị tương ứng
console.log('=== CÂU 9: Duyệt bằng for...in (sản phẩm đầu tiên) ===');
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`Thuộc tính: ${key} - Giá trị: ${firstProduct[key]}`);
}
console.log('\n');

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const availableInStockProducts = products
    .filter(product => product.isAvailable === true && product.quantity > 0)
    .map(product => product.name);

console.log('=== CÂU 10: Danh sách sản phẩm đang bán và còn hàng ===');
console.log(availableInStockProducts);
console.log('\n');

