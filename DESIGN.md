# 🎨 DESIGN GUIDELINES & REFERENCE SYSTEM: LOVE SPACE (PWA)

Tài liệu này được đúc kết từ bộ tài liệu tham khảo 6 phần (Minimal Gallery, AppShot, Component Gallery, DESIGN.md, 21st.dev, shadcn/ui, Aceternity/Magic UI, Motion Primitives/Kinetics, Liquid Glass, Kitbitz, 3dicons) để ứng dụng xuyên suốt quá trình thiết kế và phát triển.

---

## 🌸 1. Bảng màu & Visual Theme (Cute Pastel Baby + Apple Liquid Glass)
* **Tone nền chính:**
  * Background gradient: `#FFF5F7` $\rightarrow$ `#FFE5EC` $\rightarrow$ `#FFF0F5`
  * Card glass background: `rgba(255, 255, 255, 0.72)` kết hợp `backdrop-blur-xl`
  * Border ánh sáng mỏng: `1px solid rgba(255, 255, 255, 0.85)`
  * Shadow mềm (Soft Glow): `0 8px 32px 0 rgba(255, 182, 193, 0.2)`
* **Màu điểm nhấn (Accents):**
  * Sweet Pink (Chủ đạo): `#FF6B8B`, `#FF8E9E`
  * Lavender tím mộng mơ: `#C8B6FF`, `#E8D7FF`
  * Butter Yellow ấm áp: `#FFE599`, `#FFF3CD`
  * Mint Green tươi tắn: `#B8F2E6` (cho trạng thái sức khỏe / uống nước)

---

## 📱 2. Nguyên tắc Mobile-First & PWA (Tham khảo AppShot Gallery)
* **Tỷ lệ hiển thị:** Tối ưu chuẩn màn hình smartphone (max-width `430px` canh giữa màn hình trên Desktop để trải nghiệm xem trước như iPhone).
* **Navigation:** Bottom Navigation Bar dạng Floating Liquid Glass bo tròn (`rounded-full`), có active indicator nảy lò xo (spring motion).
* **Chống giật lag:**
  * `touch-action: manipulation;`
  * `overscroll-behavior-y: contain;`
  * Không viền xanh khi tap trên iOS Safari (`-webkit-tap-highlight-color: transparent;`).

---

## ⚡ 3. Chuyển động & Vi tương tác (Tham khảo Motion Primitives, Kinetics & MicroKit)
* **Spring Physics (Hiệu ứng lò xo tự nhiên):**
  * Khi bấm nút (Active scale): `scale: 0.94` với độ nảy mềm mại `transition: { type: "spring", stiffness: 400, damping: 17 }`.
* **Hiệu ứng tim bay (Confetti Heart Explosion):**
  * Sử dụng canvas hạt tim đa kích thước bay tỏa ra khi bấm nút "Cần ôm khẩn cấp".
* **Haptic Feedback:**
  * Gọi `navigator.vibrate([40, 60, 40])` để rung máy nhẹ nhàng khi tương tác.

---

## 🧸 4. Đồ họa & Icon (Tham khảo 3dicons & Kitbitz Hand-drawn)
* **Icon biểu tượng:** Kết hợp Lucide rounded icons và các emoji/asset 3D dễ thương (Trái tim 3D, Hạt mầm Tamagotchi, Ly nước ngọt ngào).
* **Font chữ đề xuất:** `Nunito` hoặc `Quicksand` (bo tròn, thân thiện, dễ đọc trên di động) kết hợp font viết tay `Dancing Script` cho các lời nhắn tình yêu.

---

## 🛠️ 5. Thư viện & Công cụ cốt lõi
* **UI Component:** Base shadcn/ui phong cách New York / Rounded.
* **Animations:** Framer Motion + Canvas-confetti.
* **Storage/Sync:** Firebase / LocalStorage + PWA Service Worker.
