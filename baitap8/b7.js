"use strict";
function kiemTraLoaiDuLieu(data) {
    if (typeof data === 'number') {
        console.log("bien la 1 so");
    }
    else if (Array.isArray(data)) {
        console.log("bien la 1 mang ");
    }
    else if (typeof data === 'object') {
        console.log(" bien la 1 doi tuong ");
    }
    else {
        console.log("khong duoc xac dinh ");
    }
}
kiemTraLoaiDuLieu(16); // In ra "Biến là một số"
kiemTraLoaiDuLieu(["sieu cap", "vippro", "tuyetvoi", "so1"]); // In ra "Biến là một mảng"
kiemTraLoaiDuLieu({ ten: "Penrose", tuoi: 20 }); // In ra "Biến là một đối tượng"
kiemTraLoaiDuLieu("None"); // In ra "Không xác định được loại dữ liệu của biến"
