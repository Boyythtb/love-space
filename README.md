# 💕 Love Space - Ngôi Nhà Của Tụi Mình

Ứng dụng web lãng mạn đa năng (Progressive Web App - PWA) dành cho các cặp đôi: đếm ngày yêu, nông trại thú cưng & cây trồng tình yêu, la bàn GPS định vị thời gian thực, trợ lý ảo Mochi AI, trung tâm nhắc nhở hai chiều và đồng bộ Realtime Firebase.

---

## ✨ Tính Năng Nổi Bật

1. **Đồng Hồ Đếm Ngày Yêu Đa Năng:**
   - Đếm ngày, giờ, phút, giây bên nhau theo thời gian thực.
   - Tự do đổi ngày bắt đầu kỷ niệm ngay trên giao diện mà không cần sửa code.
   - Tùy chỉnh ảnh đại diện (Boy & Girl): hỗ trợ gắn link ảnh, tải ảnh từ máy (tự động nén tối ưu), chọn avatar Chibi Dicebear và đổi biệt danh cho nhau.

2. **Trung Tâm Lời Nhắc Cặp Đôi (Chuông Bên Anh & Chuông Bên Em):**
   - Tách biệt tab cài đặt chuông nhắc cho **Bên Anh** và **Bên Em**.
   - Hai người có thể chủ động cài đặt và chỉnh giờ nhắc nhở cho nhau, tự động đồng bộ qua Firebase Realtime.
   - Nhắc uống nước định kỳ (tùy chọn tần suất 30p, 1h, 2h).
   - Nhắc 3 bữa ăn hàng ngày (Sáng, Trưa, Tối).
   - **Nhắc uống thuốc & vitamin 3 cữ đầy đủ (Sáng, Trưa, Tối)** kèm tên thuốc cần uống.
   - Nhắc đi ngủ đúng giờ kèm lời chúc ngọt ngào.
   - Tạo lời nhắc tùy chỉnh không giới hạn theo từng khung giờ trong ngày.
   - Tích hợp Web Push Notifications và Service Worker thông báo ngay cả khi tắt màn hình.

3. **La Bàn Trái Tim (GPS Realtime Compass):**
   - Sử dụng HTML5 Geolocation để đo khoảng cách thực tế giữa hai người (Haversine formula).
   - Tính toán góc phương vị (bearing) $0^\circ - 360^\circ$ và kim la bàn tự động xoay hướng chính xác về vị trí của người yêu.
   - Hiển thị khoảng cách theo mét hoặc km và 8 hướng địa lý (Bắc, Đông Bắc, Đông...).

4. **Nông Trại Tình Yêu (Thú Cưng & Cây Trồng):**
   - Vườn cây tình yêu: Tưới nước, bón phân, dọn cỏ để cây lớn dần qua 4 cấp độ (Hạt giống $\to$ Mầm non $\to$ Cây trưởng thành $\to$ Ra hoa kết trái).
   - Trang trại thú cưng: Mèo con, Cún con, Thỏ trắng... Cho ăn, vuốt ve, tắm rửa để nhận Điểm Thân Mật.
   - Cửa hàng đổi quà tình cảm độc quyền: Đổi điểm lấy vé trà sữa, vé đi xem phim, vé miễn dỗi, vé massage...

5. **Trợ Lý Tình Yêu Mochi AI:**
   - Trò chuyện thông minh, ngọt ngào, tinh tế qua Google Gemini API.
   - Hỗ trợ ghim/ẩn thông minh để không che khuất màn hình trải nghiệm.

6. **Trải Nghiệm Fullscreen App & Màn Hình Chờ (Launch Splash Screen):**
   - Màn hình chờ phong cách hiện đại với trái tim phát sáng, hiệu ứng sóng gợn, bé Mochi thiên thần và câu danh ngôn tình yêu.
   - Thiết kế chuẩn PWA Standalone, tự động ẩn thanh điều hướng trình duyệt khi cài đặt về màn hình chính điện thoại (iOS / Android).

---

## 🚀 Hướng Dẫn Triển Khai (Deploy) Lên Cloudflare Pages

### Bước 1: Đẩy mã nguồn lên GitHub
1. Mở Terminal / PowerShell tại thư mục dự án `love-story`.
2. Tạo một Repository mới trên GitHub cá nhân (ví dụ: `love-space`).
3. Chạy các lệnh sau:
   ```bash
   git add .
   git commit -m "feat: complete Love Space PWA"
   git branch -M main
   git remote add origin https://github.com/<tai-khoan-github-cua-ban>/love-space.git
   git push -u origin main
   ```

### Bước 2: Kết nối Cloudflare Pages
1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Chọn menu **Workers & Pages** $\to$ Click nút **Create application**.
3. Chọn tab **Pages** $\to$ Click **Connect to Git**.
4. Chọn tài khoản GitHub của bạn và chọn Repository `love-space` vừa tạo.
5. Cấu hình cài đặt build:
   - **Project name:** `love-space` (hoặc tên tùy thích)
   - **Production branch:** `main`
   - **Framework preset:** `None` (hoặc giữ trống vì đây là dự án Web tĩnh thuần HTML/JS/CSS)
   - **Build command:** *Để trống*
   - **Build output directory:** *Để trống* (hoặc điền `/` hoặc `.`)
6. Nhấn nút **Save and Deploy**.
7. Chờ khoảng 10-30 giây, Cloudflare Pages sẽ cấp cho bạn một tên miền HTTPS miễn phí cực nhanh dạng:
   👉 `https://love-space.pages.dev`

> **Lưu ý:** Giao thức HTTPS từ Cloudflare Pages là điều kiện bắt buộc để các tính năng PWA (cài app vào màn hình chính), thông báo đẩy Web Push Notifications, và định vị GPS hoạt động ổn định trên cả iPhone (iOS Safari) và Android (Chrome).
