function billingFunction() {
    //Nikon trang bị cho Z6 II hai con chip xử lý mà họ trang bị trên thế hệ trước đó. Rồi bộ nhớ đệm được mở rộng lên 3.5 lần. Pin được nâng cấp dung lượng và mở rộng khả năng sạc bằng cách mở cổng vừa sạc vừa xài. Những thay đổi này đã dẫn đến phản ứng của máy với thao tác của chúng ta với Z6 II nhận được phản hồi rất nhanh.
    if (document.getElementById('same').checked) {
        //Rất ít khi chúng ta bàn về tốc độ phản hồi của một chiếc máy ảnh. Những cái chúng ta quan tâm hầu như là độ phân giải, ISO, tốc độ chụp liên tục, ngàm…
        var shippingName = document.getElementById('shippingName').value;
        //Anh em có thể hình dung ra một chiếc Android cấu hình mạnh và một chiếc Android cấu hình thấp vậy. Chiếc cấu hình mạnh phản ứng nhanh và nhạy hơn, không bị delay, không bị lag…
        var shippingZip = document.getElementById('shippingZip').value;
        //Nikon Z6 II có thể chụp liên tục đến 14 FPS và có thể chụp liên tục đến 124 hình. Có được hai điều trên thì máy mạnh và bộ nhớ đệm lớn đóng vai trò quan trọng. Tuy nhiên theo mình thì điều này cũng không quá quan trọng, anh em cũng không cần phải quá quan tâm đến tính năng này vì anh em bình thường sẽ không khai thác nó. 
        document.getElementById('billingName').value = shippingName;
        //Cổng giao tiếp tốc độ cao, sạc nhanh và dễ dàng:
//Theo mình thì đây là phần quan trọng, ảnh hưởng nhiều đến việc sử dụng máy ảnh hàng ngày của chúng ta. Đặc biệt là anh em dùng hệ sinh thái sản phẩm của Apple với việc hỗ trợ USB-C và Power Delivery rộng khắp.
        document.getElementById('billingZip').value = shippingZip;
        //Việc dùng pin di động cho Nikon Z6 II cũng thoải mái và nhanh vì giờ tìm các viên pin dung lượng lớn, hỗ trợ USB-C PD rất dễ dàng. Anh em có thể nối thẳng pin vào máy để chụp và quay, nó sẽ ưu tiên dùng pin bên ngoài trước. Một cục pin 27000mAh mang lên máy bay được có thể chụp được đến gần 2000 tấm hình. Như vậy việc phơi, việc chụp liên tục, việc chụp sao chép… thuận tiện hơn, đơn giản hơn cho chúng ta.

    } else {
        //Anh em chỉ cần kết nối thiết bị di động với Nikon Z6 II lần đầu với những thao tác đơn giản nhất. Sau đó thì mỗi lần muốn xem hình, muốn lấy hình thì chỉ cần thao tác trên thiết bị di động, không cần phải dùng đến máy ảnh, có luôn cả lựa chọn lấy được ảnh từ máy ảnh mà không cần mở máy ảnh.
        document.getElementById('billingName').value = "";
        //SnapBridge không mới và không chỉ cho Nikon Z6 II mà còn cho một số dòng máy khác của Nikon nữa. Nhưng anh em xài Z6 II sẽ có cái này nên mình nhắc tới.
        document.getElementById('billingZip').value = "";
    }

}