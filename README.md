# FastTrack DE01 Learning Hub V2

Website tự học Data Engineering gồm 18 bài, đi từ Git, Python, SQL và API đến Data Warehouse, Spark, dbt, Azure, Airflow, DataOps và capstone.

## Tính năng

- 18 bài học chi tiết với mục lục và điều hướng trước/sau.
- ETL Pipeline Coach nối 18 unit thành quy trình thực hành 14 stage, có pipeline builder, failure drill, course mapping và rubric 100 điểm.
- Tìm kiếm toàn bộ chương trình từ trang chính.
- Đánh dấu tiến độ học bằng localStorage trên từng trình duyệt.
- Ngân hàng 436 câu hỏi: giữ 360 câu nền tảng và bổ sung 76 câu luyện tập. Tất cả có giải thích đáp án đúng.
- Mỗi chương có dẫn nhập cho người mới, từ vựng, ví dụ từng bước, tự kiểm tra và tình huống áp dụng. Python, pandas/NumPy, SQL và modeling có thêm lab.
- Trang tra cứu câu hỏi/lời giải có tìm kiếm, lọc unit/bộ đề và phân trang.
- Bộ luyện tập 1 gồm 16 câu hiện có (chưa đầy đủ); bộ 2 gồm 60 câu. Có thể làm riêng từng bộ.
- Chế độ kiểm tra theo bài dùng toàn bộ câu của unit; kiểm tra toàn khóa cho chọn số lượng và tạo đề ngẫu nhiên.
- Tự động lưu bài đang làm, khôi phục sau khi tải lại trang và làm lại riêng các câu sai.
- Lịch sử kết quả, thống kê độ chính xác theo unit và nhận diện chủ đề cần ôn.
- Dark mode, responsive và hỗ trợ in/lưu PDF.
- Website tĩnh, không thu thập dữ liệu cá nhân và không cần backend.

Tiến độ bài học dùng khóa `de01-v2-progress`; trạng thái quiz và lịch sử dùng `de01-v2-quiz-state-v1`; ETL Pipeline Coach dùng `de01-v2-etl-coach-v1`. Tất cả chỉ nằm trong localStorage của đúng trình duyệt/thiết bị đang sử dụng, không đồng bộ lên GitHub hay thiết bị khác.

Mở `index.html` hoặc truy cập GitHub Pages của repository này.

## Vận hành và kiểm thử

Website: https://trinhducduong.github.io/FastTrack_DE01_Learning_Hub_v2/

Repository này độc lập với V1. GitHub Pages dùng branch `main`, thư mục gốc; không cần build. Các khóa lưu tiến trình có namespace V2 vì các project GitHub Pages cùng tài khoản dùng chung origin.

Chạy các file `tests/*.test.js` bằng Node.js. Browser smoke test: cài `playwright` trong môi trường kiểm thử, chạy `node tests/browser-smoke.cjs` với Chrome; script tự mở server tạm có URL chứa subpath giống Pages. Không cần đưa node_modules vào repository.

Nội dung là tài liệu tự học. Điểm quiz dùng để ôn tập trên trình duyệt, không phải hệ thống thi có chống xem đáp án. Ví dụ cloud yêu cầu môi trường và quyền phù hợp; lab Python nhỏ có thể chạy cục bộ.
