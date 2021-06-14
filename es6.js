// // // Khai báo biến
// // // phân biệt var let và const :

// // /*
// //     Phạm vi hoạt của từ khoá var : toàn bộ scope
// //     Phạm vi hoạt của từ khoá let : Trong từng scope khác nhau sẽ phân biệt nhau
// //     Trong 1 scope thì không thể khai báo 2 lần let với cùng 1 tên biến
// //     Đối với khai báo biến = var trong js sẽ hổ trợ cơ chế tự khai báo hosting (ngầm định khai báo biến đó ở đầu scope). Đối với let và const không hỗ trợ hoisting
// // */

// // let hoTen = 'phương';
// // {
// //     let hoTen = 'Phúc';
// //     console.log('hoTen', hoTen)
// // }
// // const pi = 3.14;

// // // console.log('hoten',hoTen);
// // // console.log('name',name);
// // // console.log('address',address);
// // console.log('city', city);
// // // const name = 'nguyễn văn a'; 
// // // let address = '459 sư vạn hạnh';
// // var city = 'Hồ Chí Minh';


// // // ======================================= Arrow function =======================

// // /* ArrowFunction: 
// //     + Không hổ trợ cơ chế hoisting (Khai báo trước mới được sử dụng gọi hàm)
// //     + Đối với hàm có 1 lệnh return thì không cần đóng {} và không cần ghi return
// //     + Đối với hàm có 1 tham số thì không cần (thamso) => {}  --> thamSo => { ... }
// //     + Lưu ý: Arrow function không thể định nghĩa được prototype (class)
// //     + Arrow function không làm thay đổi ngữ cảnh con trỏ this
// // */
// // //es5
// // // tenHamES5();
// // // function tenHamES5 () {
// // //     console.log('tenHamES5');
// // // }
// // // var tenHam = function tenHamES5 () {
// // //     console.log('tenHamES5');

// // // };
// // //es6 
// // var tenHam = () => {
// //     console.log('hello cybersoft');
// // }
// // tenHam();
// // // var tinhTong = (a, b) => { return a + b };
// // //Ví dụ hàm có 1 lệnh return 
// // // var tinhTong = (a, b) => a + b;
// // //Với hàm có 1 tham số
// // var showMess = name => console.log(`Hello ${name}`);
// // console.log(tinhTong(5, 10));
// // showMess('Phúc');
// // // Arrow function không làm thay đổi ngữ cảnh con trỏ this

// // /* + Ngữ cảnh (context) con trỏ this :
// //      - Mặc định khi sử dụng con trỏ this thì nó là window (var bien hoặc window.bien)
// //      - Khi dùng con trỏ this trong đối tượng object = {}  --> thì this là đối tượng đó
// //      - Khi dùng con trỏ this trong function (prototype hoặc class) thì this sẽ đại diện cho prototype hay class (function) đó 
// // */
// // // console.log(window.innerHeight,window.innerWidth);
// // // console.log(window.location.host);
// // // console.log(this.innerHeight);

// // let hocVien = {
// //     id: 1,
// //     hoTenHocVien: 'Nguyễn Văn A',
// //     lop: 'Front end 66',
// //     layThongTinHocVien: function () {
// //         //Trong phương thức khai báo 1 hàm
// //         let hienThiThongTin = () => {
// //             console.log(`Họ tên : ${this.hoTenHocVien} - Lớp: ${this.lop}`)
// //         }
// //         //Gọi hàm đó
// //         hienThiThongTin();
// //     }
// // }
// // hocVien.layThongTinHocVien();

// // // function test (name) {

// // //     return function () {
// // //         console.log('hello ' + name);
// // //     }
// // // }

// // // let hamClick = test('Khải');

// // // document.querySelector('#tagABC').onclick = hamClick;

// // //---------------- Default params ------------------
// // // + Default params: Giúp định nghĩa tham số mặc định cho hàm => Nếu ta gọi hàm không truyền tham số thì hàm sẽ lấy tham số mặc định ngược lại nếu ta truyền tham số thì hàm sẽ thấy tham số ta truyên (không lấy mặc định)

// // var getUserInfo = (name, year, age = 2021 - year) => {

// //     console.log('Name ' + name);
// //     console.log('Age ' + age);
// // }

// // getUserInfo('Phương', 1999, 30);


// // ---------------------- rest params ------------------

// // var tinhTong = function (a, b) {
// //     console.log(a + b);
// // }

// // var tinhTong  = function (a, b, c) {
// //     console.log(a + b + c)
// // }

// var tinhTong = function (thamSo1, ...restParams) { //...restParam là mảng []
//     switch (restParams.length) {
//         case 2: {
//             console.log(thamSo1, ' Tổng 2 số = ', restParams[0] + restParams[1]);
//         } break;
//         case 3: {
//             console.log(thamSo1, ' Tổng 3 số = ', restParams[0] + restParams[1] + restParams[2]);
//         }; break;
//         default: {
//             console.log('Tham số không hợp lệ!');
//         }
//     }
// }

// tinhTong('Bài toán', 1, 2, 3);

// // ------------------------- Spread operator --------------------------

// let sinhVien1 = { maSV: 1, hoTen: 'Nguyễn văn a123' };
// let sinhVien2 = { ...sinhVien1, lop: 'FrontEnd 66', hoTen: 'Trần Thị Phương' };
// sinhVien2.maSV = 2;
// // sinhVien2.hoTen = 'Trần Thị Phương';


// console.log('sinhVien1', sinhVien1); // ? 
// console.log('sinhVien2', sinhVien2); // ?

// let arr1 = [1, 2, 3, 4];
// let arr2 = [...arr1, 7];

// // arr2.push(7);
// console.log('arr1', arr1);
// console.log('arr2', arr2);
// // ------------------- Destructuring ------------------
// let sanPham = {
//     maSP:1,
//     tenSP: 'Iphone',
//     hinhAnh: 'https://picsum.photos/200/200',
//     thongTinSanPham : function () {
//         console.log('Mã sp',sanPham.maSP);
//         console.log('Tên sp',sanPham.tenSP);
//         console.log('Hình sp',sanPham.hinhAnh);
//     }
// }
// //es5
// // let maSP = sanPham.maSP;
// // let tenSP = sanPham.tenSP;
// // let hinhAnh = sanPham.hinhAnh;
// // let thongTinSanPham = sanPham.thongTinSanPham;

// //es6 
// // let {maSP,tenSP,hinhAnh,thongTinSanPham} = sanPham; 
// // let {maSP,tenSP,...restParams} = sanPham; 
// let {maSP,tenSP} = sanPham; 
// // console.log('restParams',restParams)


// // -------------------- object Literal -----------------
// // + Từ tên biến tạo ra tên thuộc tính
// // 
// let fName = 'Mị';
// let myObj = {
//     fName,
//     sayHi : function () {
//         console.log(`Hello ${this.name}`);
//     }
// }

// console.log('myObj',myObj);

// //Có thể truyền giá trị vào làm tên thuộc tính
// let tenThuocTinh = 'Mã Học Viên';
// let hocVien = {
//     [tenThuocTinh]: '001',
//     tenHocVien: 'Trần Văn Phương'
// }
// console.log(`Học Viên`,hocVien[tenThuocTinh]); 
// // ------------------------- For In - For Of ------------------

// //(1) For in: Ngoài duyệt array ra for in còn dùng để duyệt các thuộc tính của object
// let mangSanPham = [
//     {maSP:1,tenSP:'IPhone X', gia:1000,hinhAnh:'https://picsum.photos/200/200'},
//     {maSP:2,tenSP:'IPhone XS', gia:2000,hinhAnh:'https://picsum.photos/200/200'},
//     {maSP:3,tenSP:'IPhone XS MAX', gia:3000,hinhAnh:'https://picsum.photos/200/200'},
// ]
// //Mỗi lần duyệt lấy ra index của mảng 
// // for (let index in mangSanPham) { //index = 0 -> ... length - 1
// //     //Mỗi lần duyệt lấy ra 1 sản phẩm
// //     let sanPham = mangSanPham[index];
// //     console.log('index',index);
// //     console.log('mangSanPham',mangSanPham[index]);
// //     console.log('mangSanPham',sanPham);
// // }

// var nguoiDung = {
//     taiKhoan: 'nguyenvana',
//     matKhau:'123456',
//     email: 'nguyenvana@gmail.com',
//     soDienThoai:'09090909'
// }

// for(let tenThuocTinh in nguoiDung) {
//    console.log(tenThuocTinh, nguoiDung[tenThuocTinh]) 
// }
// //(2) For of : Mỗi lần duyệt lấy ra 1 object trong mảng
// for (let sanPham of mangSanPham){
//     console.log('sanPham',sanPham);
// }

// // for in dùng để duyệt key(thuộc tính) của object, for of dùng để duyệt object của array (mảng)


// ---------------------------------Bài tập -----------------------
document.querySelector('form').onsubmit = function (e) {
    //Chặn sự kiện submit của browser
    e.preventDefault();
    //Dom đến tất cả các thẻ input trong thẻ form
    let arrInput = document.querySelectorAll('form input[type=text], select');
    console.log('arrInput', arrInput);
    let hocVien = {};
    //Duyệt các thẻ input
    for (let input of arrInput) {
        //Lấy name và value
        // let name = input.name;
        // let value = input.value;
        let { name, value } = input;
        hocVien = { ...hocVien, [name]: value }
    }
    //Tạo table từ object học viên
    console.log('hocVien', hocVien); //{maHocVien:1,tenHocVien:'aaa',...}
    var trHocVien = `<tr>`
    for (let tenThuocTinh in hocVien) {
        trHocVien += `
            <td>${hocVien[tenThuocTinh]}</td>
        `
    }
    trHocVien += `</tr>`;
    document.querySelector('#tableHocVien').innerHTML = trHocVien;
}

// -------------------------------- class -----------------------

//es5
// function HocVien (ma,ten) {
//     this.maHocVien = ma;
//     this.tenHocvien = ten;
//     this.hienThiThongTinHocVien = function () {
//         console.log('Mã học viên',this.maHocVien);
//         console.log('Tên học viên',this.tenHocvien);
//     }
// }
//es6

// class HocVien {
//     maHocVien ='';
//     tenHocvien ='';

//     constructor(ma,ten) {
//         this.maHocVien = ma;
//         this.tenHocvien = ten;
//     }

//     //2 Cách khai báo phương thức 
//     //Cách 1
//     hienThiThongTinHocVien() {
//         console.log('Mã học viên',this.maHocVien);
//         console.log('Tên học viên',this.tenHocvien);
//     }
//     //Cách 2
//     hienThiThongTin =  () => {
//         console.log('Mã học viên',this.maHocVien);
//         console.log('Tên học viên',this.tenHocvien);
//     }
// }

// let hv = new HocVien(1,'Trần Thị Phương');



// import { LaoCong,arrSinhVien } from "./models/LaoCong.js";

// import NhanVienLaoCong from './models/LaoCong.js'

// let laoCong = new LaoCong('Khải');
// laoCong.maNhanVien = 1;


// console.log('laoCong',laoCong)
// console.log(arrSinhVien)


// let nhanVien = new NhanVienLaoCong('Phúc');
// nhanVien.maNhanVien = 2;
// nhanVien.tinhLuong();
// console.log({nhanVien});






let mangSanPham = [
    { maSP: 1, tenSP: 'Google pixel xl', gia: 1000, hangSX: 'Google' },
    { maSP: 2, tenSP: 'Google pixel xl 2', gia: 2000, hangSX: 'Google' },
    { maSP: 3, tenSP: 'Sony xperia xz', gia: 3000, hangSX: 'Sony' },
    { maSP: 4, tenSP: 'Sony xperia xzs', gia: 3000, hangSX: 'Sony' },
    { maSP: 5, tenSP: 'Iphone X', gia: 2500, hangSX: 'Apple' },
    { maSP: 6, tenSP: 'Iphone XS', gia: 1500, hangSX: 'Apple' },
    { maSP: 7, tenSP: 'Samsung galaxy s9', gia: 1500, hangSX: 'Samsung' },
    { maSP: 8, tenSP: 'Samsung galaxy Note 10 plus', gia: 2000, hangSX: 'Samsung' },
    { maSP: 9, tenSP: 'Xiaomi mi 9', gia: 5000, hangSX: 'Xiaomi' },
    { maSP: 10, tenSP: 'Xiaomi mi 10', gia: 4500, hangSX: 'Xiaomi' },
]
//filer: là hàm lọc ra các sản phẩm thoả điều kiện của arrowfunction 
let arrSony = mangSanPham.filter(sanPham => sanPham.hangSX === 'Sony');

console.log('arrSony', arrSony)

//find: là hàm tìm ra phần tử thoã điều kiện arrow function. Lấy ra sản phẩm đầu tiên tìm thấy. Tìm không thấy thì trả về undefine

let sp5 = mangSanPham.find(sanPham => sanPham.maSP === 5);

if (sp5) {
    console.log('sp5', sp5);
} else {
    console.log(sp5)
    console.log('Không tìm thấy');
}
//Bài tập 1 lấy ra các sản phẩm có giá trên 2000

let result1 = mangSanPham.filter(sanPham => sanPham.gia > 2000);
console.log('result1', result1);

//Bài tập 2 thay đổi tên sản phẩm thứ 10 thành xiaomi mi mix 3
let sp10 = mangSanPham.find(sanPham => sanPham.maSP === 10);
if (sp10) {
    sp10.tenSP = 'xiaomi mi mix 3';
}
console.log(mangSanPham);

//findIndex : Tương tự find tuy nhiên tìm vị trí phần tử trong mảng nếu không tìm thấy thì trả về -1. (Chỉnh sửa, xoá dữ liệu dựa trên index)

let index = mangSanPham.findIndex(sp => sp.maSP === 9);
if (index !== -1) {
    mangSanPham[index].tenSP = 'Điện thoại trung quốc';
    console.log('mangSP', mangSanPham)
    mangSanPham.splice(index, 1);
    console.log('mangSP', mangSanPham)

} else {
    console.log('Không tìm thấy sản phẩm', index);
}

//foreach: Dùng để duyệt qua các phần tử của mảng để làm thao tác gì đó

mangSanPham.forEach((sanPham, index) => {
    sanPham.gia += 1000;
    console.log('sanPham', sanPham)
})

//.map : là phương thức dùng để thực hiện biến đổi từ mảng này thành mảng khác

//Từ mảng này tạo ra mảng khác
let htmlCard = mangSanPham.map((sanPham, index) => {

    return `
    <div class="col-4 mt-2">
        <div class="card text-left">
            <img class="card-img-top" src="https://picsum.photos/id/${sanPham.maSP}/300/300" alt="...">
            <div class="card-body">
            <h4 class="card-title">${sanPham.tenSP}</h4>
            <p class="card-text">${sanPham.gia}</p>
            </div>
        </div>
    </div>
    `
});


htmlCard.forEach((htmlSanPham, index) => {
    // sanPham.gia += 1000;
    document.querySelector('#danhSachSanPham').innerHTML += htmlSanPham;
})



// let mangSanPham = [
//     { maSP: 1, tenSP: 'Google pixel xl', gia: 1000, hangSX: 'Google' },
//     { maSP: 2, tenSP: 'Google pixel xl 2', gia: 2000, hangSX: 'Google' },
//     { maSP: 3, tenSP: 'Sony xperia xz', gia: 3000, hangSX: 'Sony' },
//     { maSP: 4, tenSP: 'Sony xperia xzs', gia: 3000, hangSX: 'Sony' },
//     { maSP: 5, tenSP: 'Iphone X', gia: 2500, hangSX: 'Apple' },
//     { maSP: 6, tenSP: 'Iphone XS', gia: 1500, hangSX: 'Apple' },
//     { maSP: 7, tenSP: 'Samsung galaxy s9', gia: 1500, hangSX: 'Samsung' },
//     { maSP: 8, tenSP: 'Samsung galaxy Note 10 plus', gia: 2000, hangSX: 'Samsung' },
//     { maSP: 9, tenSP: 'Xiaomi mi 9', gia: 5000, hangSX: 'Xiaomi' },
//     { maSP: 10, tenSP: 'Xiaomi mi 10', gia: 4500, hangSX: 'Xiaomi' },
// ]
//reduce : Hàm reduce tương tự hàm map tuy nhiên kết quả trả về là 1 giá trị. từ mảng => 1 giá trị

let tongTienSanPham = mangSanPham.reduce((tongTien,sanPham,index) => {
    return tongTien += sanPham.gia;
},0)
console.log('Tổng tiền',tongTienSanPham)

//Sử dụng reduce để tạo từ 1 mảng object => 1 chuỗi html card


let stringHTML = mangSanPham.reduce((content,sanPham,index) => {
    return content += `<tr>
            <td>${sanPham.maSP}</td>
            <td>${sanPham.tenSP}</td>
            <td><img width="50" height="50" src="https://picsum.photos/id/${sanPham.maSP}/300/300" /></td>
            <td>${sanPham.gia}</td>
            <td>${sanPham.hangSX}</td>
    </tr>`
},'')

document.querySelector('#tblSanPham').innerHTML = stringHTML;
let arrResult = mangSanPham.reduce((result,sanPham, index) => {
    return [...result , `
    <div class="col-4 mt-2">
        <div class="card text-left">
            <img class="card-img-top" src="https://picsum.photos/id/${sanPham.maSP}/300/300" alt="...">
            <div class="card-body">
            <h4 class="card-title">${sanPham.tenSP}</h4>
            <p class="card-text">${sanPham.gia}</p>
            </div>
        </div>
    </div>
    `]
},[]);

console.log(arrResult)


//sort:
 
// let mangSanPham = [
//     { maSP: 1, tenSP: 'Google pixel xl', gia: 1000, hangSX: 'Google' },
//     { maSP: 2, tenSP: 'Google pixel xl 2', gia: 2000, hangSX: 'Google' },
//     { maSP: 3, tenSP: 'Sony xperia xz', gia: 3000, hangSX: 'Sony' },
//     { maSP: 4, tenSP: 'Sony xperia xzs', gia: 3000, hangSX: 'Sony' },
//     { maSP: 5, tenSP: 'Iphone X', gia: 2500, hangSX: 'Apple' },
//     { maSP: 6, tenSP: 'Iphone XS', gia: 1500, hangSX: 'Apple' },
//     { maSP: 7, tenSP: 'Samsung galaxy s9', gia: 1500, hangSX: 'Samsung' },
//     { maSP: 8, tenSP: 'Samsung galaxy Note 10 plus', gia: 2000, hangSX: 'Samsung' },
//     { maSP: 9, tenSP: 'Xiaomi mi 9', gia: 5000, hangSX: 'Xiaomi' },
//     { maSP: 10, tenSP: 'Xiaomi mi 10', gia: 4500, hangSX: 'Xiaomi' },
// ]


//Sắp chuỗi a -> z và sắp xếp theo số
let arrTen = mangSanPham.sort((sp, spTruocDo) => {

    let tenSanPham = sp.tenSP.toLowerCase().trim(); //S

    let tenSPTruoc = spTruocDo.tenSP.toLowerCase().trim(); //G

    if(tenSanPham > tenSPTruoc ) {
        return 1;
    }
    return -1;
})

// console.log('mangSXTen',mangSanPham);
// mangSanPham.reverse();
// console.log('mangSXTen',mangSanPham);
//Sắp xếp theo số

let arrGia = mangSanPham.sort((sp,spTruocDo) => {

    return sp.gia - spTruocDo.gia;
})

console.log('mangSanPham theo giá',arrGia)