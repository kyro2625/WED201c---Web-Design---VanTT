/*"Nvidia từ lâu đã làm việc với nhà phát triển CDProjektRed để đưa hiệu ứng Ray Tracing cùng với công nghệ khử răng cưa bằng AI (DLSS) vào Cyberpunk 2077. Vào ngày 10 tháng 12 khi Cyberpunk 2077 chính thức cho chơi thì Nvidia cũng sẽ cập nhật driver mới để hỗ trợ đầy đủ các hiệu ứng này cũng như cải thiện hiệu năng. AMD tương tự cũng sẽ có driver mới để có thể đem trải nghiệm Ray Tracing trong Cyberpunk 2077 đến fan đội đỏ.
 */

function upDate(previewPic) {
    /* Những thử nghiệm của Tom's Hardware dựa trên driver chưa tối ưu cho Cyberpunk 2077. Game được chạy ở các độ phân giải 1080p, 1440p và 2160p cùng với 2 thiết lập đồ họa là Medium và Ultra. Ngoài ra, thiết lập Ray Tracing (RTX) cũng được thử nghiệm ở 2 mức Medium và Ultra và riêng với card đồ họa của Nvidia, 4 thiết lập DLSS gồm Performance, Balanced, Quality và Ultra-Quality cũng lần lượt được chạy thử.
     */
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    /*Những chiếc card đồ họa được cho thử sức với Cyberpunk 2077 là RTX 3060 Ti/3080/3090, RTX 2060, GTX 1060 6 GB của đội xanh và RX 5600 XT, RX 6800 XT của đội đỏ. Cấu hình test gồm có Core i9-9900K trên bo mạch chủ MSI MEG Z390 Ace, 16 GB DDR4-3600 CL16, SSD XPG SX8200 Pro 2 TB.*/

    document.getElementById('image').innerHTML = previewPic.alt;

}
/*MAX SETTINGS: Graphics ULTRA, Ray Tracing ULTRA
 */


function unDo() {
    /*Tiếp theo là thử nghiệm với Ray Tracing và DLSS. Ở độ phân giải 1080p, với Ray Tracing chất lượng Ultra thì RTX 3080 chỉ có thể cho tỉ lệ khung hình xấp xỉ 60 fps. Khi bật DLSS lên với chế độ Quality thì tỉ lệ khung hình này mới được cải thiện, đạt 80 fps. Tương tự với RTX 3090, với Ray Tracing Ultra thì DLSS cũng cần phải bật lên ở chế độ Quality từ đó khung hình mới có thể cao trên 80 fps.*/
    document.getElementById('image').style.backgroundImage = "";
    /*
Sự khác biệt giữa Cyberpunk 2077 khi bật và tắt Ray Tracing rất lớn. Với RTX thì mọi thứ giống thật hơn với ánh sáng mang lại chiều sâu cho nhân vật, tạo ra bóng của trang phục trên cơ thể và ánh sáng hắt chính xác trên các đường cong của múi cơ. Nếu không có Ray Tracing thì đồ họa game trông phẳng và không còn giống thật.".*/

    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}