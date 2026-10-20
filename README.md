# ORBIT — Ôn tập Xác suất thống kê

Trang web tiếng Việt biên soạn theo ảnh bảng ôn tập, PDF **Bài giảng chương 2** (TN091, Dương Thị Bé Ba, 80 trang) và bốn ảnh vở do người dùng cung cấp.

## Nội dung

- 13 chuyên đề theo thứ tự trên bảng, với công thức, quy trình, ví dụ giải mẫu và lỗi cần tránh.
- 130 bài tập: 10 bài/chuyên đề; lời giải đóng mặc định và mở bằng nút ngay dưới bài.
- 5 đề mô phỏng: 8 ý đúng/sai theo thứ tự nội dung, câu tự luận, câu hàm mật độ với 4 ý a–d.
- Câu 3 mỗi đề gồm tìm k, xác suất, moment/kỳ vọng/phương sai và tính chất, tìm CDF và mật độ của Y=g(X).
- Phần đúng/sai được chấm tự động; phần tự luận tự đối chiếu với lời giải.
- Giao diện tối/sáng, sơ đồ Venn tương tác, cây xác suất Bayes, đồ thị mật độ tương tác, bộ lọc, lưu tiến độ, nháp tự luận, đồng hồ 60 phút tùy chọn và in đề không lời giải.

Thời gian 60 phút, thang điểm 3–3–4 và các đề là gợi ý tự luyện, không phải đề/thang điểm chính thức. Thông báo ngày thi trên ảnh không được dùng làm lịch đếm ngược.

## Chạy trang web

Cần Node.js có sẵn trên máy. Không cần cài thêm thư viện để sử dụng.

1. Mở thư mục này trong Terminal.
2. Chạy `npm start` (hoặc `node server.mjs`). Có thể nhấp đúp `mo-trang-on-tap.cmd` để khởi động máy chủ.
3. Mở **http://localhost:4173** trong trình duyệt. Giữ cửa sổ máy chủ chạy trong lúc học.

Không mở trực tiếp `index.html`: trình duyệt cần phục vụ tệp module qua máy chủ nội bộ. Nếu cổng 4173 bận, có thể đặt biến môi trường `PORT` trước khi chạy.

Sau khi khởi động, trang không cần Internet: công thức KaTeX, ảnh và giáo trình đều nằm trong thư mục này. Máy chủ chỉ lắng nghe trên 127.0.0.1, không xuất bản ra mạng.

## Cách học

1. Mở **Kiến thức cốt lõi**, đọc công thức rồi đi qua ví dụ từng bước.
2. Sang **Ngân hàng bài tập**, chọn chuyên đề. Tự giải trước khi nhấn **Xem đáp án & lời giải**.
3. Đánh dấu **Đã tự làm xong** để cập nhật tiến độ. Đây là dấu tự đánh giá, không phải kết quả chấm tự động.
4. Sang **Đề luyện tổng hợp**, chọn một trong 5 đề. Vùng nháp và đáp án đã chọn được lưu trên trình duyệt.
5. Mở **Tài liệu & đối chiếu** để đọc nguồn và các hiệu chỉnh so với ảnh vở.

Dữ liệu học lưu bằng localStorage riêng cho trình duyệt và địa chỉ truy cập. Xóa dữ liệu trang sẽ xóa tiến độ. Không có tài khoản, đồng bộ đám mây hay gửi bài làm đi.

## Hiệu chỉnh học thuật

- Ví dụ 3, PDF trang 17: hộp 4 phế phẩm và 6 tốt, lấy 2 không hoàn lại: bảng đúng **1/3, 8/15, 2/15**. Ảnh vở ghi sai p(0)=1/2. Nhiều nhất một lỗi: 13/15; ít nhất một lỗi: 2/3.
- Dùng thống nhất **F_X(x)=P(X≤x)** theo PDF trang 29, chú ý các đầu mút của biến rời rạc.
- Với Y=3X+1, X=2 cho Y=7, không phải 10 như một chỗ trong ảnh vở.
- Chương 1 được biên soạn theo các mục trên bảng vì chỉ nhận được PDF chương 2.
- Không đưa Markov, Chebyshev vào trọng tâm vì bảng không nêu. Phương sai được đưa vào theo ví dụ trên bảng và tài liệu.

## Cấu trúc

`index.html`, `app.js`, `styles.css`, `diagrams.css`: giao diện và chức năng.

`content.js`, `exams.js`, `diagrams.js`: nội dung, đề và sơ đồ.

`reference/`: bản sao PDF và 5 ảnh nguồn; giữ nguyên nội dung nguồn.

`vendor/katex/`: KaTeX 0.16.22 (MIT, giấy phép kèm theo), phục vụ công thức hoàn toàn nội bộ.

`scripts/verify.mjs`: kiểm tra số lượng, cấu trúc, cú pháp công thức và các phép tính độc lập. Khi muốn chạy kiểm tra nội dung trên máy mới: `npm ci --ignore-scripts`, rồi `npm test` (chỉ bước cài thư viện kiểm tra cần mạng).

`scripts/check-browser.cjs`: kiểm tra giao diện tự động với Playwright và Edge trong môi trường phát triển hiện tại.

`output/`: ảnh kiểm tra giao diện và gói ZIP bàn giao.

## Đã kiểm tra

Kiểm tra cấu trúc đủ 13/130/5/40; kiểm tra công thức bằng KaTeX, đối chiếu độc lập xác suất siêu bội và nhị thức, tích phân số và moment của 5 đề. Kiểm tra trình duyệt ở 1440, 768, 390 px: điều hướng, tìm/lọc, đóng/mở lời giải, lưu tiến độ/nháp, chấm đúng-sai, đồng hồ, sáng/tối, menu di động, tệp nguồn và không tràn ngang. Các kiểm tra tự động không thay thế việc tự đối chiếu bài làm từng bước.
