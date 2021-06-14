import {NhanVien} from './NhanVien.js'

export class LaoCong extends NhanVien {

    constructor(name) {
        super(name)
    }
    
    congViec() {
        console.log('cong viec')
    }

    tinhLuong() {
        return super.tinhLuong() + 2000;
    }
}


export const arrSinhVien = [{ma:1,ten:'a'},{ma:2,ten:'b'}];



//export default mỗi file chỉ sử dụng được 1 lệnh và khi import có thể rename mà ko cần viết đúng tên

export default LaoCong ;