import { Component } from "react";
import React, { useState } from "react";
import "./AboutUs.css";
function Header() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__nav">
        <h4 className="aboutUs__nav-name">DANH MỤC TRANG</h4>
        <div className="aboutUs__nav-main">
          <button>Tìm kiếm</button>
          <button>AloneSharks&reg; /SỰ KHỞI ĐẦU/</button>
          <button>Chính sách bảo hành</button>
          <button>Phương thức thanh toán</button>
          <a href="https://tinhte.vn/">Tinhte.vn</a>
          <a href="https://kenh14.vn/">Kenh14.vn</a>
        </div>
      </div>

      <div className="aboutUs__main">
        <h4>AloneSharks &reg; / SỰ KHỞI ĐẦU/</h4>
        <p>Smart Stuff - Smart Life</p>
        <p>
          AloneSharks&reg; cung cấp các sản phẩm phụ kiện công nghệ thông minh, chất
          lượng và thiết thực trong cuộc sống. Hành trình xây dựng thương hiệu
          được khách hàng tin chọn, ngay khi có nhu cầu tìm kiếm những phụ kiện
          công nghệ thông minh chỉ vừa bắt đầu!
        </p>
        <p>
          Với cam kết sản phẩm chất lượng, chế độ bảo hành tin cậy và đề cao
          trải nghiệm của quý khách, AloneSharks&reg; hi vọng trở thành người bạn
          thân và không ngừng phục vụ, truyền cảm hứng để khách hàng "chill hết
          nấc, xài hết ga" với những sản phẩm công nghệ thông minh.
        </p>
        <p>
          1St Flagship Store: Trường Đại học Công nghệ Thông tin - ĐHQG TPHCM.
          <br />Phone Number: 0799684120
          <br />Mail: AloneSharks.Corner@gmail.com
          <br />Instagram: @AloneSharks.vn
        </p>
      </div>
      {/* <div className="aboutUs">
        <div className="aboutUs__main">
          <h4>Phương thức thanh toán</h4>
          <p>
            Chúng tôi áp dụng 02 hình thức thanh toán: Thanh toán trả trước qua
            tài khoản ngân hàng & Thanh toán COD
          </p>
          <h5>1. Thanh toán trả trước</h5>
          <p>
            - Thanh toán chuyển khoản 100% giá trị đơn hàng gồm: giá trị đơn
            hàng & chi phí vận chuyển.
          </p>
          <p>
            <b>-Lưu ý</b>
          </p>
          <p>
            + Quý KH vui lòng không chuyển khoản trước khi nhận được xác nhận từ
            bộ phận Sale Online.
          </p>
          <p>
            + Sau khi nhận được xác nhận từ bộ phận Sale Online, quý KH vui lòng
            chuyển khoản hoàn tất đơn hàng trong vòng 24h (không tính thứ bảy,
            chủ nhật & các ngày lễ tết). Trong trường hợp quá 24h, chúng tôi
            không nhận được thanh toán hoàn tất của quý khách, đơn hàng sẽ không
            còn hiệu lực.
          </p>

          <h5>2. Thanh toán trả sau (COD)</h5>
          <p>
            - Là hình thức khách hàng thanh toán tiền mặt trực tiếp cho nhân
            viên vận chuyển khi nhận hàng.
          </p>
          <p>
            - Khi hàng được chuyển giao đến quý khách, xin vui lòng hoàn tất
            việc thanh toán và ký xác nhận với nhân viên giao hàng trước, sau đó
            quý khách nhận hàng và kiểm tra sau. Nếu sản phẩm có bất kỳ lỗi hay
            khiếm khuyết nào không đúng ý muốn, quý khách thực hiện quy trình
            đổi hàng. Quý khách vui lòng giữ lại biên lai vận chuyển để xác minh
            ngày nhận hàng và thời gian đổi hàng
          </p>
        </div>
      </div>
      <div className="aboutUs">
        <div className="aboutUs__main">
          <h4>CHÍNH SÁCH BẢO HÀNH AloneSharks&reg; </h4>
          <p>
            Thật khó chịu khi phải làm phải đi bảo hành, đổi, trả cho những sản
            phẩm vừa mua!
            <br />
            Và cũng không mấy dễ chịu khi phải đọc những trang "Chính sách” dài
            ngoằng với đủ thứ ràng buộc và lắc léo người dùng (thường là như
            vậy). Hiểu được khó khăn đó của khách hàng, AloneSharks&reg; sẽ viết
            ngắn trong 6 mục về chế độ{" "}
            <b>
              bảo hành mang tên /SHARKSCARE/, lên tới 2 tháng cho tất cả sản
              phẩm và bảo hành 1 đổi 1 trong 7 ngày khi phát hiện lỗi từ nhà sản
              xuất.
            </b>
          </p>
          <h5>1. Chế độ bảo hành sản phẩm</h5>
          <h6>a. Lỗi do Nhà sản xuất (NSX).</h6>
          <p>
            - Đường dây hỗ trợ trực tuyến 24/24 để giúp khách hàng xác định lỗi
            và phương án sửa lỗi (đối với phần mềm).
          </p>
          <p>
            - Nếu lỗi phát sinh từ phần cứng, tổng đài sẽ hướng dẫn quý khách
            gửi sản phẩm về MèoBer&reg; kiểm tra và xác định. Nếu lỗi từ NSX, quý
            khách sẽ được đổi sản phẩm tương ứng hoặc sản phẩm tốt hơn trong
            trường hợp mẫu cần đổi hết hàng, sản phẩm đổi sẽ mới 100%, nguyên
            seal.
          </p>
          <p>
            - AloneSharks&reg; hỗ trợ hoàn toàn phí vận chuyển bảo hành cho quý
            khách.
          </p>
          <h6>b. Đối với lỗi do người sử dụng</h6>
          <p>
            - Hỗ trợ tư vấn giải pháp sửa chữa và thỏa thuận về chi phí sửa chữa
            phát sinh.
          </p>
          <h5>2. Điều kiện bảo hành</h5>
          <p>
            - Sản phẩm được phân phối bởi AloneSharks&reg;, có ghi nhận hóa đơn điện
            tử (thông tin mua hàng), trùng Series.
          </p>
          <p>
            - Sản phẩm hỏng hóc hoặc do lỗi do nhà sản xuất trong điều kiện sử
            dụng bình thường, do chuyên viên kỹ thuật của AloneSharks&reg; xác định.
          </p>
          <p>
            - Sản phẩm còn nguyên tem bảo hành, chưa qua can thiệp phần cứng từ
            các bên khác.
          </p>
          <p>- Còn trong thời hạn bảo hành.</p>
          <p>
            - Không có dấu hiệu va chạm vật lý, rơi rớt, móp méo, dính keo &
            cháy nổ.
          </p>
          <h5>3. Thời gian bảo hành</h5>
          <p>
            - Đối với tất cả sản phẩm của AloneSharks&reg; đều được hưởng chính sách
            bảo hành thời hạn 2 tháng, 1 đổi 1 trong 7 ngày nếu phát hiện lỗi do
            NXS.
          </p>
          <p>
            - Thời gian bảo hành được tính từ ngày mua căn cứ theo hóa đơn mua
            hàng và phiếu bảo hành.
          </p>
          <h5>4. Những trường hợp từ chối bảo hành</h5>
          <p>
            - Sản phẩm không đáp ứng đủ các điều kiện bảo hành hoặc thời gian
            được quy định.
          </p>
          <p>
            - Sản phẩm bị mất tem niêm phong hoặc tem bảo hành bị rách, có dấu
            hiệu tẩy xóa.
          </p>
          <p>
            - Thông tin mua hàng không có trong hệ thống, khách hàng không xuất
            trình được hóa đơn hay thông tin mua hàng mà AloneSharks&reg; yêu cầu.
          </p>
          <p>
            - Có dấu hiệu va chạm vật lý, rơi rớt, móp méo, dính keo & cháy nổ
            và đã từng sửa chữa ở nơi khác ngoài AloneSharks&reg;.
          </p>
          <p>
            - Không bảo hành Pin, trầy xước và ngoại hình của sản phẩm (những
            phần sẽ hao mòn theo thời gian sử dụng).
          </p>
          <p>
            - Sản phẩm bị ảnh hưởng bởi nước, chất lỏng hoặc nhiệt độ cao, nóng
            chảy biến dạng.
          </p>
          <h5>5. Hỗ trợ sửa chữa</h5>
          <p>
            Khách hàng vẫn sẽ được hỗ trợ sửa chữa nếu đã quá thời hạn bảo hành
            hoặc trong trường hợp quý khách có nhu cầu.
          </p>
          <p>
            Các sản phẩm sửa chữa ngoài bảo hành sẽ đều phát sinh chi phí, quá
            trình sửa sẽ được tiến hành khi mức phí và các điều kiện đáp ứng
            thỏa thuận giữa đôi bên được thông qua.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
