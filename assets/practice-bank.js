(function(root){
  const bank = [
  {
    "id": "practice-1-s3-q01",
    "unit": 5,
    "topic": "practice-5",
    "difficulty": "basic",
    "prompt": "In a star schema, which table normally stores measurable business events such as sales amount or quantity?",
    "choices": [
      {
        "id": "a",
        "text": "Fact table"
      },
      {
        "id": "b",
        "text": "Dimension table"
      },
      {
        "id": "c",
        "text": "Configuration table"
      },
      {
        "id": "d",
        "text": "Log table"
      }
    ],
    "answer": "a",
    "explanation": "Fact table ghi sự kiện đo được, chẳng hạn một dòng hàng được bán có quantity=2 và amount=100. Dimension mô tả ngữ cảnh như khách hàng, sản phẩm, ngày. Trước khi cộng amount, phải biết một dòng fact đại diện cho điều gì.",
    "lessonUrl": "lessons/unit-05.html#practice-1-s3-q01",
    "practiceSet": 1,
    "title": "Fact lưu điều gì?"
  },
  {
    "id": "practice-1-s3-q02",
    "unit": 6,
    "topic": "practice-6",
    "difficulty": "applied",
    "prompt": "A source has 10,000 rows but the curated output has only 9,500 rows. Which check should be performed?",
    "choices": [
      {
        "id": "a",
        "text": "Change the dashboard theme"
      },
      {
        "id": "b",
        "text": "Increase the number of indexes"
      },
      {
        "id": "c",
        "text": "Rename the pipeline"
      },
      {
        "id": "d",
        "text": "Reconcile source and target row counts and investigate rejected or filtered records"
      }
    ],
    "answer": "d",
    "explanation": "Chênh lệch 500 dòng chưa đủ kết luận pipeline sai hay đúng. Hãy đối chiếu cùng phạm vi dữ liệu, đếm dòng bị validation loại, filter và dedup. Nếu mỗi dòng nguồn đều có nơi đến hoặc lý do loại rõ ràng thì mới có cơ sở công bố output.",
    "lessonUrl": "lessons/unit-06.html#practice-1-s3-q02",
    "practiceSet": 1,
    "title": "Đối soát 10.000 và 9.500 dòng"
  },
  {
    "id": "practice-1-s3-q03",
    "unit": 5,
    "topic": "practice-5",
    "difficulty": "basic",
    "prompt": "A company wants to preserve the historical customer address when the customer later moves. Which SCD approach is appropriate?",
    "choices": [
      {
        "id": "a",
        "text": "SCD Type 1"
      },
      {
        "id": "b",
        "text": "SCD Type 2"
      },
      {
        "id": "c",
        "text": "Delete the customer"
      },
      {
        "id": "d",
        "text": "Store the address only in the fact table"
      }
    ],
    "answer": "b",
    "explanation": "SCD Type 2 tạo phiên bản mới khi địa chỉ thay đổi và giữ phiên bản cũ với ngày hiệu lực. Fact bán hàng trước ngày chuyển nhà liên kết phiên bản cũ; bán hàng sau đó liên kết phiên bản mới. Vì vậy báo cáo lịch sử không bị viết lại theo địa chỉ hiện tại.",
    "lessonUrl": "lessons/unit-05.html#practice-1-s3-q03",
    "practiceSet": 1,
    "title": "Địa chỉ khách hàng thay đổi"
  },
  {
    "id": "practice-1-s3-q04",
    "unit": 5,
    "topic": "practice-5",
    "difficulty": "applied",
    "prompt": "Why should the grain of a fact table be defined before selecting measures?",
    "choices": [
      {
        "id": "a",
        "text": "It determines the meaning of one row in the fact table"
      },
      {
        "id": "b",
        "text": "It decides the database password"
      },
      {
        "id": "c",
        "text": "It removes the need for dimensions"
      },
      {
        "id": "d",
        "text": "It selects the Azure region"
      }
    ],
    "answer": "a",
    "explanation": "Grain là câu trả lời cho câu hỏi một dòng nghĩa là gì: một đơn hay một dòng hàng? Measure phải cùng mức chi tiết đó. Phí vận chuyển của cả đơn bị lặp trên ba dòng hàng sẽ bị cộng ba lần nếu không phân bổ hoặc tách fact.",
    "lessonUrl": "lessons/unit-05.html#practice-1-s3-q04",
    "practiceSet": 1,
    "title": "Grain trước measure"
  },
  {
    "id": "practice-1-s5-q01",
    "unit": 7,
    "topic": "practice-7",
    "difficulty": "basic",
    "prompt": "In Spark, transformations such as select() and filter() are commonly executed:",
    "choices": [
      {
        "id": "a",
        "text": "Immediately when written"
      },
      {
        "id": "b",
        "text": "Only after the cluster is stopped"
      },
      {
        "id": "c",
        "text": "Lazily, when an action triggers execution"
      },
      {
        "id": "d",
        "text": "Only when using RDDs"
      }
    ],
    "answer": "c",
    "explanation": "select và filter tạo kế hoạch biến đổi, chưa nhất thiết đọc và xử lý toàn bộ dữ liệu ngay. Action như count hoặc write kích hoạt execution. Việc trì hoãn cho Spark cơ hội tối ưu chuỗi phép toán trước khi chạy.",
    "lessonUrl": "lessons/unit-07.html#practice-1-s5-q01",
    "practiceSet": 1,
    "title": "Spark thực thi khi nào?"
  },
  {
    "id": "practice-1-s5-q02",
    "unit": 8,
    "topic": "practice-8",
    "difficulty": "basic",
    "prompt": "Which dbt tests are commonly used for a primary-key-like column?",
    "choices": [
      {
        "id": "a",
        "text": "accepted_values and relationships"
      },
      {
        "id": "b",
        "text": "unique and not_null"
      },
      {
        "id": "c",
        "text": "row_count and encrypted"
      },
      {
        "id": "d",
        "text": "fast and indexed"
      }
    ],
    "answer": "b",
    "explanation": "Khóa định danh phải có giá trị và không lặp. not_null phát hiện khóa thiếu, còn unique phát hiện nhiều dòng cùng khóa. Dùng cả hai kiểm tra mới kiểm chứng được hai điều kiện độc lập của cột giống primary key.",
    "lessonUrl": "lessons/unit-08.html#practice-1-s5-q02",
    "practiceSet": 1,
    "title": "Kiểm tra khóa model"
  },
  {
    "id": "practice-1-s5-q03",
    "unit": 7,
    "topic": "practice-7",
    "difficulty": "basic",
    "prompt": "When is pandas usually more appropriate than Spark?",
    "choices": [
      {
        "id": "a",
        "text": "When the dataset fits comfortably on one machine"
      },
      {
        "id": "b",
        "text": "When data is several terabytes and requires a cluster"
      },
      {
        "id": "c",
        "text": "When hundreds of executors are required"
      },
      {
        "id": "d",
        "text": "Only when the input is CSV"
      }
    ],
    "answer": "a",
    "explanation": "pandas chạy chủ yếu trên một máy và dễ thử nghiệm với dữ liệu vừa bộ nhớ. Nếu dữ liệu và các bảng trung gian còn dư RAM, chi phí dựng cluster Spark thường không cần thiết. Cần ước lượng bộ nhớ sau khi parse, merge và copy, không chỉ nhìn dung lượng file trên đĩa.",
    "lessonUrl": "lessons/unit-07.html#practice-1-s5-q03",
    "practiceSet": 1,
    "title": "Khi nào dùng pandas?"
  },
  {
    "id": "practice-1-s5-q04",
    "unit": 11,
    "topic": "practice-11",
    "difficulty": "basic",
    "prompt": "What is a main role of Azure Data Factory in the course architecture?",
    "choices": [
      {
        "id": "a",
        "text": "Orchestrating and moving data between systems"
      },
      {
        "id": "b",
        "text": "Replacing every relational database"
      },
      {
        "id": "c",
        "text": "Creating Power BI visuals"
      },
      {
        "id": "d",
        "text": "Writing Python classes"
      }
    ],
    "answer": "a",
    "explanation": "ADF có thể lập lịch, sao chép dữ liệu và yêu cầu hệ thống xử lý tiếp theo chạy. Ví dụ copy file từ SFTP vào ADLS, sau đó kích hoạt notebook Databricks. Điều phối là quyết định bước nào chạy khi nào; transformation là tính toán nội dung dữ liệu.",
    "lessonUrl": "lessons/unit-11.html#practice-1-s5-q04",
    "practiceSet": 1,
    "title": "ADF điều phối và sao chép"
  },
  {
    "id": "practice-1-s5-q05",
    "unit": 8,
    "topic": "practice-8",
    "difficulty": "basic",
    "prompt": "What is dbt mainly used for?",
    "choices": [
      {
        "id": "a",
        "text": "Extracting files from SFTP"
      },
      {
        "id": "b",
        "text": "Managing Azure VNets"
      },
      {
        "id": "c",
        "text": "Building SQL-based transformations on data already loaded into the target platform"
      },
      {
        "id": "d",
        "text": "Replacing Power BI"
      }
    ],
    "answer": "c",
    "explanation": "dbt chạy các phép biến đổi SQL trên dữ liệu đã được nạp vào nền tảng đích. Nó tổ chức model, dependency, test và tài liệu. Ví dụ raw_orders đã ở warehouse, dbt xây stg_orders rồi fct_sales để phục vụ phân tích.",
    "lessonUrl": "lessons/unit-08.html#practice-1-s5-q05",
    "practiceSet": 1,
    "title": "Vai trò của dbt"
  },
  {
    "id": "practice-1-s5-q06",
    "unit": 10,
    "topic": "practice-10",
    "difficulty": "applied",
    "prompt": "What is Azure Data Lake Storage Gen2 mainly used for in a data platform?",
    "choices": [
      {
        "id": "a",
        "text": "Source-code version control"
      },
      {
        "id": "b",
        "text": "Scalable file/object storage for data lake workloads"
      },
      {
        "id": "c",
        "text": "Sending email alerts"
      },
      {
        "id": "d",
        "text": "Building REST endpoints"
      }
    ],
    "answer": "b",
    "explanation": "ADLS Gen2 cung cấp lưu trữ file/object cho data lake. Một platform có thể giữ CSV đầu vào ở raw và Parquet đã chuẩn hóa ở curated. Storage giữ dữ liệu; engine như Spark đọc dữ liệu đó để xử lý.",
    "lessonUrl": "lessons/unit-10.html#practice-1-s5-q06",
    "practiceSet": 1,
    "title": "ADLS Gen2 lưu gì?"
  },
  {
    "id": "practice-1-s6-q01",
    "unit": 14,
    "topic": "practice-14",
    "difficulty": "basic",
    "prompt": "In Airflow, what is a DAG used to describe?",
    "choices": [
      {
        "id": "a",
        "text": "A database table"
      },
      {
        "id": "b",
        "text": "A dashboard"
      },
      {
        "id": "c",
        "text": "A set of tasks and their workflow dependencies"
      },
      {
        "id": "d",
        "text": "A data encryption key"
      }
    ],
    "answer": "c",
    "explanation": "DAG mô tả task và quan hệ phụ thuộc có hướng, không tạo vòng lặp. Nếu transform phụ thuộc extract, Airflow chỉ cho transform chạy khi điều kiện upstream được thỏa. Thứ tự này đến từ dependency, không từ tên file Python.",
    "lessonUrl": "lessons/unit-14.html#practice-1-s6-q01",
    "practiceSet": 1,
    "title": "DAG là bản đồ công việc"
  },
  {
    "id": "practice-1-s6-q02",
    "unit": 16,
    "topic": "practice-16",
    "difficulty": "basic",
    "prompt": "Which practice best represents DataOps?",
    "choices": [
      {
        "id": "a",
        "text": "Make production changes manually without testing"
      },
      {
        "id": "b",
        "text": "Keep different copies of code on each engineer's laptop"
      },
      {
        "id": "c",
        "text": "Use version control, validation, controlled deployment and monitoring"
      },
      {
        "id": "d",
        "text": "Test only after users report incorrect data"
      }
    ],
    "answer": "c",
    "explanation": "Version control giúp truy ra thay đổi; validation phát hiện sai dữ liệu; controlled deployment đưa phiên bản đã kiểm chứng tới production; monitoring theo dõi sau phát hành. Bốn phần tạo vòng phản hồi từ thay đổi đến kết quả vận hành.",
    "lessonUrl": "lessons/unit-16.html#practice-1-s6-q02",
    "practiceSet": 1,
    "title": "DataOps trong thực tế"
  },
  {
    "id": "practice-1-s6-q03",
    "unit": 15,
    "topic": "practice-15",
    "difficulty": "basic",
    "prompt": "A test environment needs customer data, but real identities should not be exposed. Which control is appropriate?",
    "choices": [
      {
        "id": "a",
        "text": "Publish the production data unchanged"
      },
      {
        "id": "b",
        "text": "Remove all security controls because it is test data"
      },
      {
        "id": "c",
        "text": "Put the data in a public storage account"
      },
      {
        "id": "d",
        "text": "Apply masking or anonymization according to the approved rule"
      }
    ],
    "answer": "d",
    "explanation": "Masking hoặc anonymization theo quy tắc đã phê duyệt giảm lộ thông tin nhận diện trong môi trường test. Ví dụ dùng dữ liệu tổng hợp hoặc che email trong khi giữ format cần kiểm thử. Cần đánh giá khả năng tái nhận diện, vì che tên chưa chắc đã ẩn được con người.",
    "lessonUrl": "lessons/unit-15.html#practice-1-s6-q03",
    "practiceSet": 1,
    "title": "Dữ liệu test và danh tính thật"
  },
  {
    "id": "practice-1-s6-q04",
    "unit": 6,
    "topic": "practice-6",
    "difficulty": "applied",
    "prompt": "Why are retries useful in a data pipeline?",
    "choices": [
      {
        "id": "a",
        "text": "They can automatically retry temporary failures"
      },
      {
        "id": "b",
        "text": "They guarantee that incorrect data becomes correct"
      },
      {
        "id": "c",
        "text": "They remove the need for monitoring"
      },
      {
        "id": "d",
        "text": "They replace data validation"
      }
    ],
    "answer": "a",
    "explanation": "Retry thử lại thao tác bị lỗi tạm thời, chẳng hạn kết nối mạng gián đoạn vài giây. Nó có ích khi nguyên nhân có thể tự hết, có giới hạn lần thử và khoảng chờ. Nếu lần ghi đầu đã thành công nhưng mất response, sink phải idempotent để retry không tạo bản sao.",
    "lessonUrl": "lessons/unit-06.html#practice-1-s6-q04",
    "practiceSet": 1,
    "title": "Retry giải quyết lỗi gì?"
  },
  {
    "id": "practice-1-s6-q05",
    "unit": 15,
    "topic": "practice-15",
    "difficulty": "basic",
    "prompt": "What does the principle of least privilege mean?",
    "choices": [
      {
        "id": "a",
        "text": "Give every engineer administrator access"
      },
      {
        "id": "b",
        "text": "Give a user or service only the permissions required for its task"
      },
      {
        "id": "c",
        "text": "Disable authentication inside the company network"
      },
      {
        "id": "d",
        "text": "Use one shared account for all pipelines"
      }
    ],
    "answer": "b",
    "explanation": "Least privilege cấp đúng action trên đúng resource cần cho nhiệm vụ. Một job chỉ đọc raw không cần quyền xóa toàn storage account. Scope nhỏ làm giảm thiệt hại khi job có lỗi hoặc credential bị lộ.",
    "lessonUrl": "lessons/unit-15.html#practice-1-s6-q05",
    "practiceSet": 1,
    "title": "Quyền tối thiểu"
  },
  {
    "id": "practice-1-s6-q06",
    "unit": 15,
    "topic": "practice-15",
    "difficulty": "basic",
    "prompt": "Where should a production database password used by a scheduled pipeline normally be stored?",
    "choices": [
      {
        "id": "a",
        "text": "In a managed secrets store"
      },
      {
        "id": "b",
        "text": "Directly in the Python script"
      },
      {
        "id": "c",
        "text": "In a Git repository"
      },
      {
        "id": "d",
        "text": "In pipeline logs"
      }
    ],
    "answer": "a",
    "explanation": "Secret store quản lý credential tách khỏi code, hỗ trợ giới hạn truy cập và rotation. Pipeline lấy secret bằng identity được phép ở runtime. Nhờ đó người đọc source hoặc log không mặc nhiên biết password.",
    "lessonUrl": "lessons/unit-15.html#practice-1-s6-q06",
    "practiceSet": 1,
    "title": "Cất password production"
  },
  {
    "id": "practice-2-s1-q01",
    "unit": 2,
    "topic": "practice-2",
    "difficulty": "basic",
    "prompt": "Which project organization best supports maintainability and reproducibility?",
    "choices": [
      {
        "id": "a",
        "text": "Put all code, credentials, dependencies, and run notes in one script"
      },
      {
        "id": "b",
        "text": "Separate reusable code into modules, record dependencies, and provide clear run instructions"
      },
      {
        "id": "c",
        "text": "Copy shared functions into every script that needs them"
      },
      {
        "id": "d",
        "text": "Depend on locally installed packages without documenting them"
      }
    ],
    "answer": "b",
    "explanation": "Module gom các hàm cùng trách nhiệm để tái sử dụng mà không copy. Ghi dependency và hướng dẫn chạy giúp máy khác tái tạo môi trường. Ví dụ extract.py đọc nguồn, transform.py làm sạch, load.py ghi kết quả, tests/ kiểm tra hành vi.",
    "lessonUrl": "lessons/unit-02.html#practice-2-s1-q01",
    "practiceSet": 2,
    "title": "Tổ chức project Python"
  },
  {
    "id": "practice-2-s1-q02",
    "unit": 2,
    "topic": "practice-2",
    "difficulty": "basic",
    "prompt": "When is using a class most justified in a small Python data application?",
    "choices": [
      {
        "id": "a",
        "text": "Whenever the script has more than ten lines"
      },
      {
        "id": "b",
        "text": "Whenever a loop is required"
      },
      {
        "id": "c",
        "text": "When related state and behavior should be organized together and reused"
      },
      {
        "id": "d",
        "text": "Only when inheritance is required"
      }
    ],
    "answer": "c",
    "explanation": "Class hợp lý khi trạng thái và hành vi liên quan cần đi cùng nhau. Ví dụ BatchSummary giữ accepted/rejected và có phương thức ghi nhận kết quả. Một phép tính độc lập như tính thành tiền vẫn có thể chỉ là hàm; class không bắt buộc phải có kế thừa.",
    "lessonUrl": "lessons/unit-02.html#practice-2-s1-q02",
    "practiceSet": 2,
    "title": "Khi nào nên tạo class?"
  },
  {
    "id": "practice-2-s1-q03",
    "unit": 6,
    "topic": "practice-6",
    "difficulty": "applied",
    "prompt": "df_orders has 1,000 rows. df_customers has one row per customer_id, except customer C100 appears twice. Exactly 40 orders belong to C100. What row count results from pd.merge(df_orders, df_customers, on='customer_id', how='left')?",
    "choices": [
      {
        "id": "a",
        "text": "960"
      },
      {
        "id": "b",
        "text": "1,000"
      },
      {
        "id": "c",
        "text": "1,020"
      },
      {
        "id": "d",
        "text": "1,040"
      }
    ],
    "answer": "d",
    "explanation": "960 đơn của khách khác mỗi đơn khớp một dòng, tạo 960 dòng. 40 đơn của C100 mỗi đơn khớp hai dòng customer, tạo 80 dòng. Tổng là 960 + 40 × 2 = 1.040. validate='many_to_one' giúp pandas phát hiện khóa phía customer không duy nhất thay vì âm thầm nhân dòng.",
    "lessonUrl": "lessons/unit-06.html#practice-2-s1-q03",
    "practiceSet": 2,
    "title": "Vì sao LEFT merge thành 1.040 dòng?"
  },
  {
    "id": "practice-2-s1-q04",
    "unit": 6,
    "topic": "practice-6",
    "difficulty": "applied",
    "prompt": "A raw file contains 10,000 rows. Validation rejects 300 rows, and deduplication removes another 200 duplicate rows from the valid set. What curated row count should the validation summary expect?",
    "choices": [
      {
        "id": "a",
        "text": "10,000"
      },
      {
        "id": "b",
        "text": "9,800"
      },
      {
        "id": "c",
        "text": "9,700"
      },
      {
        "id": "d",
        "text": "9,500"
      }
    ],
    "answer": "d",
    "explanation": "Validation loại 300 dòng từ 10.000, còn 9.700 dòng hợp lệ. Dedup loại thêm 200 dòng trong tập hợp lệ đó, nên curated còn 9.700 − 200 = 9.500. Hai nhóm loại không chồng lên nhau trong đề này; báo cáo nên giữ cả hai counter.",
    "lessonUrl": "lessons/unit-06.html#practice-2-s1-q04",
    "practiceSet": 2,
    "title": "Tính output sau validate và dedup"
  },
  {
    "id": "practice-2-s1-q05",
    "unit": 6,
    "topic": "practice-6",
    "difficulty": "applied",
    "prompt": "A 20 GB CSV file must be processed on a machine with 8 GB RAM using pandas. Which approach is most appropriate?",
    "choices": [
      {
        "id": "a",
        "text": "Read the file in chunks and/or restrict columns and dtypes, processing incrementally"
      },
      {
        "id": "b",
        "text": "Load the entire file and rely on swap memory"
      },
      {
        "id": "c",
        "text": "Convert the CSV to Excel and load the workbook"
      },
      {
        "id": "d",
        "text": "Open several copies of the file in parallel pandas processes"
      }
    ],
    "answer": "a",
    "explanation": "Đọc theo chunksize giúp xử lý từng phần; usecols và dtype giảm dữ liệu nạp vào bộ nhớ. CSV parse thành object có thể chiếm RAM lớn hơn dung lượng file. Không nối lại mọi chunk ở cuối; các phép dedup/aggregate toàn cục cần state hoặc lưu trữ trung gian phù hợp.",
    "lessonUrl": "lessons/unit-06.html#practice-2-s1-q05",
    "practiceSet": 2,
    "title": "CSV 20 GB trên máy RAM 8 GB"
  },
  {
    "id": "practice-2-s1-q06",
    "unit": 2,
    "topic": "practice-2",
    "difficulty": "applied",
    "prompt": "A data script has one 200-line function that reads a file, cleans values, validates rows, writes output, and updates counters stored in global variables. Which refactoring best matches the course expectations?",
    "choices": [
      {
        "id": "a",
        "text": "Split the work into small functions with clear parameters and return values, minimizing shared global state"
      },
      {
        "id": "b",
        "text": "Keep one function so all processing remains in one place"
      },
      {
        "id": "c",
        "text": "Move all variables to module-level globals so every function can access them"
      },
      {
        "id": "d",
        "text": "Duplicate the function for each input file type"
      }
    ],
    "answer": "a",
    "explanation": "Tách đọc, biến đổi, kiểm tra và ghi thành các hàm có input/output rõ giúp kiểm thử từng bước. Trả summary thay vì sửa nhiều biến global giúp lượt chạy này không ảnh hưởng lượt khác. Bắt đầu với hàm nhỏ trước khi thêm abstraction phức tạp.",
    "lessonUrl": "lessons/unit-02.html#practice-2-s1-q06",
    "practiceSet": 2,
    "title": "Tách hàm 200 dòng"
  },
  {
    "id": "practice-2-s1-q07",
    "unit": 2,
    "topic": "practice-2",
    "difficulty": "basic",
    "prompt": "In Python, when does a finally block execute?",
    "choices": [
      {
        "id": "a",
        "text": "Only when no exception occurs"
      },
      {
        "id": "b",
        "text": "Only when an exception occurs"
      },
      {
        "id": "c",
        "text": "Only when an exception is re-raised"
      },
      {
        "id": "d",
        "text": "Whether an exception occurs or not"
      }
    ],
    "answer": "d",
    "explanation": "Trong luồng thực thi Python thông thường, finally chạy khi rời khối try dù có exception hay không. Vì vậy có thể đặt cleanup vào đó; với file nên ưu tiên with. Không hiểu điều này như bảo đảm chạy khi tiến trình bị hệ điều hành kill hoặc máy mất điện.",
    "lessonUrl": "lessons/unit-02.html#practice-2-s1-q07",
    "practiceSet": 2,
    "title": "finally dùng để làm gì?"
  },
  {
    "id": "practice-2-s1-q08",
    "unit": 2,
    "topic": "practice-2",
    "difficulty": "applied",
    "prompt": "You must repeatedly check whether each incoming customer_id already exists among 2 million processed IDs. You only need membership checks, not values associated with each ID. Which Python structure is most appropriate?",
    "choices": [
      {
        "id": "a",
        "text": "set"
      },
      {
        "id": "b",
        "text": "list"
      },
      {
        "id": "c",
        "text": "tuple"
      },
      {
        "id": "d",
        "text": "nested list"
      }
    ],
    "answer": "a",
    "explanation": "set lưu phần tử duy nhất và hỗ trợ phép kiểm tra in trung bình O(1) nhờ hashing. Khi chỉ cần biết customer_id đã xuất hiện chưa, set thể hiện đúng nhu cầu. Với 2 triệu ID vẫn phải tính chi phí RAM; O(1) là trung bình, không phải bảo đảm mọi trường hợp.",
    "lessonUrl": "lessons/unit-02.html#practice-2-s1-q08",
    "practiceSet": 2,
    "title": "Kiểm tra membership bằng set"
  },
  {
    "id": "practice-2-s1-q09",
    "unit": 6,
    "topic": "practice-6",
    "difficulty": "basic",
    "prompt": "A sales feed contains nulls in discount_amount. What is the safest engineering response?",
    "choices": [
      {
        "id": "a",
        "text": "Replace every null with zero without confirmation"
      },
      {
        "id": "b",
        "text": "Confirm the business meaning of null, apply the agreed rule, and document the treatment"
      },
      {
        "id": "c",
        "text": "Drop every record that contains a null"
      },
      {
        "id": "d",
        "text": "Convert the column to text so nulls no longer cause type issues"
      }
    ],
    "answer": "b",
    "explanation": "Null có thể là chưa biết, không áp dụng hoặc dữ liệu chưa đến. Zero khẳng định giá trị bằng không. Cần xác nhận với business rồi áp quy tắc và ghi lại, vì thay null bằng zero không đúng nghĩa sẽ làm lệch doanh thu hoặc discount.",
    "lessonUrl": "lessons/unit-06.html#practice-2-s1-q09",
    "practiceSet": 2,
    "title": "Null không tự động bằng zero"
  },
  {
    "id": "practice-2-s1-q10",
    "unit": 10,
    "topic": "practice-10",
    "difficulty": "applied",
    "prompt": "Why is Parquet usually a better curated-layer format than CSV for analytical workloads?",
    "choices": [
      {
        "id": "a",
        "text": "Parquet is always smaller regardless of the data"
      },
      {
        "id": "b",
        "text": "Parquet can only store numeric values"
      },
      {
        "id": "c",
        "text": "Parquet removes the need to validate schemas"
      },
      {
        "id": "d",
        "text": "Parquet is columnar, compressed, and preserves schema information"
      }
    ],
    "answer": "d",
    "explanation": "Parquet lưu dữ liệu theo cột, hỗ trợ nén và lưu thông tin schema. Query chỉ cần vài cột có thể đọc ít dữ liệu hơn CSV. Vẫn phải validate chất lượng và schema; kích thước thực tế phụ thuộc dữ liệu và codec, không phải lúc nào cũng nhỏ hơn.",
    "lessonUrl": "lessons/unit-10.html#practice-2-s1-q10",
    "practiceSet": 2,
    "title": "Tại sao chọn Parquet?"
  },
  {
    "id": "practice-2-s1-q11",
    "unit": 6,
    "topic": "practice-6",
    "difficulty": "basic",
    "prompt": "A data job encounters invalid records that the agreed rule allows to be rejected. Which behavior is best?",
    "choices": [
      {
        "id": "a",
        "text": "Stop permanently without recording which rows failed"
      },
      {
        "id": "b",
        "text": "Separate rejected records, record counts/reasons, and continue processing valid records when the rule allows"
      },
      {
        "id": "c",
        "text": "Silently discard invalid rows so the final dataset looks clean"
      },
      {
        "id": "d",
        "text": "Replace every invalid field with an empty string"
      }
    ],
    "answer": "b",
    "explanation": "Khi policy cho phép tiếp tục, tách record lỗi vào quarantine cùng lý do, run_id và tham chiếu nguồn. Dòng hợp lệ vẫn được xử lý, nhưng tổng count phải đối soát được. Nếu vi phạm schema lõi hoặc vượt ngưỡng lỗi, policy có thể yêu cầu fail toàn batch.",
    "lessonUrl": "lessons/unit-06.html#practice-2-s1-q11",
    "practiceSet": 2,
    "title": "Xử lý record không hợp lệ"
  },
  {
    "id": "practice-2-s1-q12",
    "unit": 6,
    "topic": "practice-6",
    "difficulty": "basic",
    "prompt": "For a large numeric array, which approach best reflects the intended use of NumPy?",
    "choices": [
      {
        "id": "a",
        "text": "Convert every value to a string before calculation"
      },
      {
        "id": "b",
        "text": "Use nested Python loops for every element even when a vectorized operation exists"
      },
      {
        "id": "c",
        "text": "Use vectorized array operations for repeated numerical calculations"
      },
      {
        "id": "d",
        "text": "Store every number in a separate dictionary"
      }
    ],
    "answer": "c",
    "explanation": "Vectorization biểu diễn phép tính trên cả array như quantity * price để thư viện xử lý bằng vòng lặp tối ưu bên dưới. Cách này giảm overhead lặp từng phần tử bằng Python. Dữ liệu cần kiểu số phù hợp và phải kiểm tra shape, dtype, overflow.",
    "lessonUrl": "lessons/unit-06.html#practice-2-s1-q12",
    "practiceSet": 2,
    "title": "NumPy và vectorization"
  },
  {
    "id": "practice-2-s2-q01",
    "unit": 3,
    "topic": "practice-3",
    "difficulty": "basic",
    "prompt": "An order can contain many products, and a product can appear in many orders. Which relational design best represents this relationship?",
    "choices": [
      {
        "id": "a",
        "text": "Store all product IDs as a comma-separated column in orders"
      },
      {
        "id": "b",
        "text": "Add one order_id column to products"
      },
      {
        "id": "c",
        "text": "Use an order_items junction table with foreign keys to orders and products"
      },
      {
        "id": "d",
        "text": "Duplicate each product table for every order"
      }
    ],
    "answer": "c",
    "explanation": "Một đơn có nhiều sản phẩm và một sản phẩm thuộc nhiều đơn là quan hệ nhiều-nhiều. Bảng order_items chứa order_id, product_id, quantity và giá bán của từng dòng, nối tới hai bảng gốc bằng foreign key. Nó cho phép ràng buộc và truy vấn từng dòng hàng rõ ràng.",
    "lessonUrl": "lessons/unit-03.html#practice-2-s2-q01",
    "practiceSet": 2,
    "title": "Quan hệ đơn hàng và sản phẩm"
  },
  {
    "id": "practice-2-s2-q02",
    "unit": 3,
    "topic": "practice-3",
    "difficulty": "basic",
    "prompt": "Inside one transaction, a query reads the same row twice and gets different values because another transaction committed an update between the two reads. Which concurrency issue is this?",
    "choices": [
      {
        "id": "a",
        "text": "Dirty read"
      },
      {
        "id": "b",
        "text": "Lost update"
      },
      {
        "id": "c",
        "text": "Non-repeatable read"
      },
      {
        "id": "d",
        "text": "Deadlock"
      }
    ],
    "answer": "c",
    "explanation": "Giao dịch A đọc row có balance=100. Giao dịch B cập nhật thành 80 và commit; A đọc lại cùng row được 80. Đây là non-repeatable read vì giá trị đã commit thay đổi giữa hai lần đọc trong cùng transaction; không phải đọc dữ liệu chưa commit.",
    "lessonUrl": "lessons/unit-03.html#practice-2-s2-q02",
    "practiceSet": 2,
    "title": "Non-repeatable read"
  },
  {
    "id": "practice-2-s2-q03",
    "unit": 4,
    "topic": "practice-4",
    "difficulty": "basic",
    "prompt": "Which FastAPI application structure best matches the course guidance?",
    "choices": [
      {
        "id": "a",
        "text": "Put routing, SQL, validation, and business logic in every endpoint function"
      },
      {
        "id": "b",
        "text": "Let clients send already-validated objects and skip server-side validation"
      },
      {
        "id": "c",
        "text": "Put all database logic in global variables initialized by the first request"
      },
      {
        "id": "d",
        "text": "Separate routing, validation, business logic, and database-access responsibilities"
      }
    ],
    "answer": "d",
    "explanation": "Router tiếp nhận HTTP, schema kiểm tra cấu trúc input, service áp quy tắc nghiệp vụ, repository truy cập database. Ví dụ endpoint đặt hàng gọi service thay vì chứa tất cả SQL. Tách trách nhiệm giúp thay database hoặc test business rule mà không dựng cả HTTP stack.",
    "lessonUrl": "lessons/unit-04.html#practice-2-s2-q03",
    "practiceSet": 2,
    "title": "Phân lớp FastAPI"
  },
  {
    "id": "practice-2-s2-q04",
    "unit": 3,
    "topic": "practice-3",
    "difficulty": "basic",
    "prompt": "Which statement about WHERE and HAVING is correct?",
    "choices": [
      {
        "id": "a",
        "text": "HAVING always runs before WHERE"
      },
      {
        "id": "b",
        "text": "They are interchangeable in grouped queries"
      },
      {
        "id": "c",
        "text": "WHERE filters rows before grouping; HAVING filters groups after aggregation"
      },
      {
        "id": "d",
        "text": "HAVING can only be used when there is no GROUP BY"
      }
    ],
    "answer": "c",
    "explanation": "WHERE lọc từng dòng trước khi gom nhóm, chẳng hạn chỉ giữ đơn paid. Sau SUM theo customer, HAVING lọc những nhóm có tổng lớn hơn 1.000. Trình tự này giải thích vì sao điều kiện trên kết quả aggregate thuộc HAVING.",
    "lessonUrl": "lessons/unit-03.html#practice-2-s2-q04",
    "practiceSet": 2,
    "title": "WHERE và HAVING"
  },
  {
    "id": "practice-2-s2-q05",
    "unit": 3,
    "topic": "practice-3",
    "difficulty": "basic",
    "prompt": "A staging table can contain several rows per customer_id; only the row with the latest updated_at must be kept, including all of its other columns. Which SQL approach is most appropriate?",
    "choices": [
      {
        "id": "a",
        "text": "Use ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY updated_at DESC) and keep row number 1"
      },
      {
        "id": "b",
        "text": "Use SELECT DISTINCT customer_id"
      },
      {
        "id": "c",
        "text": "Use GROUP BY customer_id and assume the other columns come from the latest row"
      },
      {
        "id": "d",
        "text": "Sort the table and manually delete duplicates after the query"
      }
    ],
    "answer": "a",
    "explanation": "ROW_NUMBER chia partition theo customer_id rồi đánh số theo updated_at giảm dần. Giữ rn=1 lấy được cả dòng mới nhất, bao gồm các cột đi cùng nó. Nếu timestamp bằng nhau, thêm khóa phụ như source_sequence để kết quả deterministic.",
    "lessonUrl": "lessons/unit-03.html#practice-2-s2-q05",
    "practiceSet": 2,
    "title": "Giữ nguyên dòng mới nhất"
  },
  {
    "id": "practice-2-s2-q06",
    "unit": 3,
    "topic": "practice-3",
    "difficulty": "basic",
    "prompt": "An orders table repeats customer name, phone, and address on every order row. Which redesign best supports normalization?",
    "choices": [
      {
        "id": "a",
        "text": "Keep the duplicated customer fields because joins should be avoided"
      },
      {
        "id": "b",
        "text": "Store customer attributes in a customer table and reference it from orders using a key"
      },
      {
        "id": "c",
        "text": "Move all order columns into the customer table"
      },
      {
        "id": "d",
        "text": "Store customer details as one unstructured text field"
      }
    ],
    "answer": "b",
    "explanation": "Lặp tên và số điện thoại trên mọi đơn khiến một thay đổi phải sửa nhiều dòng và dễ không đồng nhất. Tách customers và cho orders tham chiếu customer_id giúp quản lý thuộc tính ở một nơi. Riêng địa chỉ giao hàng của đơn tại thời điểm mua có thể là snapshot nghiệp vụ cần giữ.",
    "lessonUrl": "lessons/unit-03.html#practice-2-s2-q06",
    "practiceSet": 2,
    "title": "Chuẩn hóa thông tin khách hàng"
  },
  {
    "id": "practice-2-s2-q07",
    "unit": 3,
    "topic": "practice-3",
    "difficulty": "basic",
    "prompt": "What is the normal trade-off when adding indexes to a heavily updated OLTP table?",
    "choices": [
      {
        "id": "a",
        "text": "Indexes reduce both read and write cost"
      },
      {
        "id": "b",
        "text": "Indexes improve every query equally"
      },
      {
        "id": "c",
        "text": "Useful indexes can improve targeted reads but add storage and write-maintenance overhead"
      },
      {
        "id": "d",
        "text": "Indexes matter only after the table is archived"
      }
    ],
    "answer": "c",
    "explanation": "Index là cấu trúc tìm kiếm phụ giúp một số query đọc ít hơn. Khi INSERT/UPDATE/DELETE, database phải duy trì index nên tăng storage và công việc ghi. Chọn index theo query thực tế, kiểm tra execution plan và đo trước/sau.",
    "lessonUrl": "lessons/unit-03.html#practice-2-s2-q07",
    "practiceSet": 2,
    "title": "Index có chi phí"
  },
  {
    "id": "practice-2-s2-q08",
    "unit": 3,
    "topic": "practice-3",
    "difficulty": "basic",
    "prompt": "A transaction debits one account and credits another. If the system fails after the debit, the entire operation is rolled back. Which ACID property is demonstrated?",
    "choices": [
      {
        "id": "a",
        "text": "Consistency"
      },
      {
        "id": "b",
        "text": "Atomicity"
      },
      {
        "id": "c",
        "text": "Isolation"
      },
      {
        "id": "d",
        "text": "Durability"
      }
    ],
    "answer": "b",
    "explanation": "Debit và credit thuộc một transaction: hoặc cả hai cùng commit hoặc cùng rollback. Khi lỗi xảy ra sau debit, rollback trả lại trạng thái trước thao tác. Đây là atomicity, tức tính toàn vẹn của nhóm thao tác như một đơn vị.",
    "lessonUrl": "lessons/unit-03.html#practice-2-s2-q08",
    "practiceSet": 2,
    "title": "Chuyển tiền và atomicity"
  },
  {
    "id": "practice-2-s2-q09",
    "unit": 3,
    "topic": "practice-3",
    "difficulty": "basic",
    "prompt": "An execution plan for a large orders table shows a full scan for a query that filters on a selective customer_id and returns only three columns. What is the most reasonable first optimization to investigate?",
    "choices": [
      {
        "id": "a",
        "text": "Add indexes to every column in the table"
      },
      {
        "id": "b",
        "text": "Check whether an appropriate index exists for the filter and avoid selecting unnecessary columns"
      },
      {
        "id": "c",
        "text": "Replace the query with a CTE because CTEs guarantee better performance"
      },
      {
        "id": "d",
        "text": "Move the business logic into a trigger"
      }
    ],
    "answer": "b",
    "explanation": "Nếu filter customer_id chọn rất ít dòng, hãy xem index phù hợp và plan thực tế; chỉ chọn cột cần giúp giảm dữ liệu đọc/trả. Index không chắc luôn được dùng hoặc luôn nhanh hơn. Statistics, selectivity và chi phí lookup ảnh hưởng quyết định của optimizer.",
    "lessonUrl": "lessons/unit-03.html#practice-2-s2-q09",
    "practiceSet": 2,
    "title": "Điều tra full scan"
  },
  {
    "id": "practice-2-s2-q10",
    "unit": 3,
    "topic": "practice-3",
    "difficulty": "applied",
    "prompt": "A query uses LEFT JOIN orders o ON c.customer_id = o.customer_id and then applies WHERE o.order_date >= '2026-01-01'. What is the effect?",
    "choices": [
      {
        "id": "a",
        "text": "Customers without orders are preserved with null order columns"
      },
      {
        "id": "b",
        "text": "The filter removes null-extended rows, so customers without qualifying orders are excluded"
      },
      {
        "id": "c",
        "text": "SQL raises an error because null cannot be compared with a date"
      },
      {
        "id": "d",
        "text": "The filter applies only to the customer table"
      }
    ],
    "answer": "b",
    "explanation": "LEFT JOIN tạo row với các cột orders bằng NULL cho khách không có đơn. So sánh NULL >= ngày không cho TRUE, nên WHERE loại các row đó. Nếu cần giữ mọi khách và chỉ ghép đơn đạt điều kiện, đưa điều kiện ngày vào ON.",
    "lessonUrl": "lessons/unit-03.html#practice-2-s2-q10",
    "practiceSet": 2,
    "title": "LEFT JOIN rồi lọc WHERE"
  },
  {
    "id": "practice-2-s2-q11",
    "unit": 4,
    "topic": "practice-4",
    "difficulty": "basic",
    "prompt": "What is the main purpose of a Pydantic request model in the taught FastAPI workflow?",
    "choices": [
      {
        "id": "a",
        "text": "Schedule the API"
      },
      {
        "id": "b",
        "text": "Validate field types, required values, and simple constraints before persistence logic"
      },
      {
        "id": "c",
        "text": "Replace the relational database"
      },
      {
        "id": "d",
        "text": "Generate database indexes automatically"
      }
    ],
    "answer": "b",
    "explanation": "Request model mô tả field bắt buộc, type và constraint đơn giản như quantity > 0. Framework kiểm tra đầu vào trước khi gọi persistence logic. Những quy tắc như còn hàng hay được phép đặt hàng vẫn cần service và database kiểm tra.",
    "lessonUrl": "lessons/unit-04.html#practice-2-s2-q11",
    "practiceSet": 2,
    "title": "Pydantic request model"
  },
  {
    "id": "practice-2-s2-q12",
    "unit": 4,
    "topic": "practice-4",
    "difficulty": "basic",
    "prompt": "Which database-access practice is most appropriate for a FastAPI CRUD endpoint?",
    "choices": [
      {
        "id": "a",
        "text": "Concatenate user input directly into SQL strings"
      },
      {
        "id": "b",
        "text": "Use parameterized database operations and handle the connection/transaction lifecycle deliberately"
      },
      {
        "id": "c",
        "text": "Keep one transaction open for the entire lifetime of the API service"
      },
      {
        "id": "d",
        "text": "Log database passwords with each failed query"
      }
    ],
    "answer": "b",
    "explanation": "Parameterized query truyền giá trị riêng khỏi cấu trúc SQL để dữ liệu người dùng không biến thành câu lệnh. Quản lý connection và commit/rollback rõ ràng giúp tránh leak, transaction treo và ghi nửa chừng. Placeholder cụ thể phụ thuộc driver database.",
    "lessonUrl": "lessons/unit-04.html#practice-2-s2-q12",
    "practiceSet": 2,
    "title": "Query tham số hóa và transaction"
  },
  {
    "id": "practice-2-s3-q01",
    "unit": 11,
    "topic": "practice-11",
    "difficulty": "basic",
    "prompt": "A nightly process must copy files from SFTP to ADLS, run Spark transformations, and expose curated data for analytical reporting. Which Azure design best fits the taught responsibilities?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Data Factory for orchestration/copy, Azure Databricks for transformation, and Synapse or Azure SQL for serving"
      },
      {
        "id": "b",
        "text": "Event Hubs for file copy, Azure Monitor for transformation, and Key Vault for serving"
      },
      {
        "id": "c",
        "text": "Cosmos DB for orchestration, Databricks for monitoring, and Blob Storage as the BI engine"
      },
      {
        "id": "d",
        "text": "Stream Analytics for all batch ingestion, transformation, and serving"
      }
    ],
    "answer": "a",
    "explanation": "ADF điều phối và copy SFTP → ADLS; Databricks/Spark biến đổi; Synapse hoặc Azure SQL có thể phục vụ query báo cáo tùy workload. Tách nơi chứa dữ liệu, nơi tính toán và nơi điều phối giúp xác định trách nhiệm và nơi điều tra khi lỗi.",
    "lessonUrl": "lessons/unit-11.html#practice-2-s3-q01",
    "practiceSet": 2,
    "title": "Chia vai trò Azure"
  },
  {
    "id": "practice-2-s3-q02",
    "unit": 11,
    "topic": "practice-11",
    "difficulty": "basic",
    "prompt": "A daily batch fails after writing some rows. It is rerun, and the target now contains duplicated revenue for that date. Which redesign best makes reruns safe?",
    "choices": [
      {
        "id": "a",
        "text": "Increase the number of retries"
      },
      {
        "id": "b",
        "text": "Append the same output again but add a rerun flag"
      },
      {
        "id": "c",
        "text": "Replace the affected partition or merge deterministically on the intended keys for that run"
      },
      {
        "id": "d",
        "text": "Disable historical reruns"
      }
    ],
    "answer": "c",
    "explanation": "Nếu cùng ngày bị append lần nữa, doanh thu bị nhân đôi. Replace partition bị ảnh hưởng hoặc merge theo khóa xác định giúp cùng input tạo cùng trạng thái cuối. Cần staging, kiểm tra và publish có kiểm soát để thay partition không làm mất bản tốt khi bước ghi lỗi.",
    "lessonUrl": "lessons/unit-11.html#practice-2-s3-q02",
    "practiceSet": 2,
    "title": "Chạy lại batch an toàn"
  },
  {
    "id": "practice-2-s3-q03",
    "unit": 5,
    "topic": "practice-5",
    "difficulty": "basic",
    "prompt": "Which statement best distinguishes ELT from ETL?",
    "choices": [
      {
        "id": "a",
        "text": "ELT can only be used for streaming"
      },
      {
        "id": "b",
        "text": "ELT loads data into the target platform before performing transformations there"
      },
      {
        "id": "c",
        "text": "ELT always stores data in Parquet"
      },
      {
        "id": "d",
        "text": "ETL cannot use cloud services"
      }
    ],
    "answer": "b",
    "explanation": "ETL biến đổi trước khi load vào đích phân tích; ELT load trước rồi dùng compute của nền tảng đích để transform. Cả hai đều extract và load, khác chủ yếu ở vị trí/thứ tự biến đổi. Một hệ thống có thể kết hợp hai cách cho các luồng khác nhau.",
    "lessonUrl": "lessons/unit-05.html#practice-2-s3-q03",
    "practiceSet": 2,
    "title": "ETL và ELT"
  },
  {
    "id": "practice-2-s3-q04",
    "unit": 5,
    "topic": "practice-5",
    "difficulty": "basic",
    "prompt": "What is the main structural difference between a star schema and a snowflake schema?",
    "choices": [
      {
        "id": "a",
        "text": "A star keeps dimensions relatively denormalized, while a snowflake normalizes dimension structures into additional tables"
      },
      {
        "id": "b",
        "text": "A snowflake schema has no fact table"
      },
      {
        "id": "c",
        "text": "A star schema allows only one dimension"
      },
      {
        "id": "d",
        "text": "A snowflake schema cannot support SQL queries"
      }
    ],
    "answer": "a",
    "explanation": "Star nối fact với các dimension tương đối phẳng, ví dụ dim_product chứa cả category_name. Snowflake tách category thành bảng khác để giảm lặp. Snowflake thêm join và độ phức tạp; lựa chọn phụ thuộc nhu cầu quản lý và query.",
    "lessonUrl": "lessons/unit-05.html#practice-2-s3-q04",
    "practiceSet": 2,
    "title": "Star và snowflake"
  },
  {
    "id": "practice-2-s3-q05",
    "unit": 5,
    "topic": "practice-5",
    "difficulty": "applied",
    "prompt": "Why is a surrogate key useful in a warehouse dimension?",
    "choices": [
      {
        "id": "a",
        "text": "It provides a warehouse-controlled identifier that can support history even when source-system natural keys change or are reused"
      },
      {
        "id": "b",
        "text": "It removes the need for a business key"
      },
      {
        "id": "c",
        "text": "It guarantees all facts are additive"
      },
      {
        "id": "d",
        "text": "It replaces data-quality validation"
      }
    ],
    "answer": "a",
    "explanation": "Surrogate key là mã do warehouse quản lý, ví dụ customer_sk=101 và 205 là hai version của cùng customer_id. Fact có thể trỏ đúng version lịch sử dù business key nguồn giữ nguyên. Vẫn giữ business key để đối chiếu nguồn và load incremental.",
    "lessonUrl": "lessons/unit-05.html#practice-2-s3-q05",
    "practiceSet": 2,
    "title": "Surrogate key"
  },
  {
    "id": "practice-2-s3-q06",
    "unit": 5,
    "topic": "practice-5",
    "difficulty": "basic",
    "prompt": "A warehouse stores one inventory balance per product at the end of every day. Which introductory fact-table pattern best matches this design?",
    "choices": [
      {
        "id": "a",
        "text": "Periodic snapshot fact"
      },
      {
        "id": "b",
        "text": "Transaction fact"
      },
      {
        "id": "c",
        "text": "Accumulating snapshot fact"
      },
      {
        "id": "d",
        "text": "Dimension-only model"
      }
    ],
    "answer": "a",
    "explanation": "Một dòng mỗi sản phẩm mỗi cuối ngày là snapshot được chụp định kỳ. Nó cho biết trạng thái tồn kho tại thời điểm đó, không phải từng lần nhập/xuất kho. Grain nên ghi rõ product × date, và không cộng số dư qua nhiều ngày.",
    "lessonUrl": "lessons/unit-05.html#practice-2-s3-q06",
    "practiceSet": 2,
    "title": "Periodic snapshot fact"
  },
  {
    "id": "practice-2-s3-q07",
    "unit": 6,
    "topic": "practice-6",
    "difficulty": "basic",
    "prompt": "What is the primary purpose of a source-to-target mapping?",
    "choices": [
      {
        "id": "a",
        "text": "List project budget approvals"
      },
      {
        "id": "b",
        "text": "Define source fields, target fields, transformations, types, defaults, and validation rules"
      },
      {
        "id": "c",
        "text": "Replace all technical documentation"
      },
      {
        "id": "d",
        "text": "Record only server names and IP addresses"
      }
    ],
    "answer": "b",
    "explanation": "Mapping mô tả mỗi cột đầu ra lấy từ đâu, đổi kiểu hay tính toán thế nào, có default gì và kiểm tra bằng rule nào. Ví dụ source.total_text → target.amount decimal, lỗi parse vào quarantine. Đây là hợp đồng triển khai giúp giảm suy đoán khi viết code.",
    "lessonUrl": "lessons/unit-06.html#practice-2-s3-q07",
    "practiceSet": 2,
    "title": "Source-to-target mapping"
  },
  {
    "id": "practice-2-s3-q08",
    "unit": 5,
    "topic": "practice-5",
    "difficulty": "basic",
    "prompt": "A customer moves to a new city, but historical reports must continue showing old sales against the previous city. Which dimension handling is appropriate?",
    "choices": [
      {
        "id": "a",
        "text": "Overwrite the city in place"
      },
      {
        "id": "b",
        "text": "Delete the customer and reload all historical facts"
      },
      {
        "id": "c",
        "text": "Store the city only in the fact table"
      },
      {
        "id": "d",
        "text": "Create a new dimension version with effective dates, following SCD Type 2 behavior"
      }
    ],
    "answer": "d",
    "explanation": "Đóng version thành phố cũ và mở version mới với effective dates. Fact lịch sử giữ surrogate key cũ nên báo cáo doanh thu cũ không chuyển hết sang thành phố mới. Khi load fact đến muộn phải lookup theo thời điểm sự kiện, không chỉ version hiện tại.",
    "lessonUrl": "lessons/unit-05.html#practice-2-s3-q08",
    "practiceSet": 2,
    "title": "SCD2 và doanh thu theo thành phố"
  },
  {
    "id": "practice-2-s3-q09",
    "unit": 5,
    "topic": "practice-5",
    "difficulty": "basic",
    "prompt": "Daily inventory balance can be summed across products for one day, but summing the same balance across many dates would overstate inventory. How should the measure be classified?",
    "choices": [
      {
        "id": "a",
        "text": "Semi-additive"
      },
      {
        "id": "b",
        "text": "Fully additive"
      },
      {
        "id": "c",
        "text": "Non-additive in every dimension"
      },
      {
        "id": "d",
        "text": "A dimension attribute"
      }
    ],
    "answer": "a",
    "explanation": "Tại một ngày có thể cộng tồn kho các sản phẩm để biết tổng số lượng, nếu đơn vị đo tương thích. Cộng snapshot của cùng sản phẩm qua nhiều ngày sẽ tính lặp cùng hàng tồn. Vì vậy measure cộng được theo một số dimension, không cộng được theo time.",
    "lessonUrl": "lessons/unit-05.html#practice-2-s3-q09",
    "practiceSet": 2,
    "title": "Số dư semi-additive"
  },
  {
    "id": "practice-2-s3-q10",
    "unit": 5,
    "topic": "practice-5",
    "difficulty": "basic",
    "prompt": "A fact table stores one row per order line. An order-level shipping fee is repeated on every line. What is the main modeling risk?",
    "choices": [
      {
        "id": "a",
        "text": "Summing shipping fee across fact rows can double count the order-level value"
      },
      {
        "id": "b",
        "text": "The fact table can no longer join to dimensions"
      },
      {
        "id": "c",
        "text": "The table automatically changes to order grain"
      },
      {
        "id": "d",
        "text": "Surrogate keys become invalid"
      }
    ],
    "answer": "a",
    "explanation": "Một đơn có ba dòng hàng, shipping_fee=30 được ghi trên mỗi dòng sẽ cho SUM=90 dù thực thu 30. Cần giữ phí ở fact grain order hoặc phân bổ theo quy tắc có tổng bằng 30. Grain của bảng không tự thay đổi vì thêm cột này.",
    "lessonUrl": "lessons/unit-05.html#practice-2-s3-q10",
    "practiceSet": 2,
    "title": "Phí vận chuyển khác grain"
  },
  {
    "id": "practice-2-s3-q11",
    "unit": 11,
    "topic": "practice-11",
    "difficulty": "basic",
    "prompt": "A pipeline activity reports success, but the curated total revenue differs materially from the validated source total for the same business date. What should happen before publishing?",
    "choices": [
      {
        "id": "a",
        "text": "Publish because the technical activity succeeded"
      },
      {
        "id": "b",
        "text": "Reconcile the stages, investigate rejected/filtered records or transformation logic, and resolve the mismatch"
      },
      {
        "id": "c",
        "text": "Add more compute and rerun without investigation"
      },
      {
        "id": "d",
        "text": "Hide the difference in the reporting layer"
      }
    ],
    "answer": "b",
    "explanation": "Technical success chỉ chứng minh activity chạy xong. Trước publish cần đối soát cùng business date, filter, grain và currency; xem rejected rows, duplicate join và logic tính tiền. Quality gate phải ngăn số liệu chưa giải thích được tới người dùng.",
    "lessonUrl": "lessons/unit-11.html#practice-2-s3-q11",
    "practiceSet": 2,
    "title": "Job xanh nhưng revenue sai"
  },
  {
    "id": "practice-2-s3-q12",
    "unit": 6,
    "topic": "practice-6",
    "difficulty": "basic",
    "prompt": "Which result set best represents a data-profiling report?",
    "choices": [
      {
        "id": "a",
        "text": "CPU usage, memory usage, and network latency"
      },
      {
        "id": "b",
        "text": "Row counts, null rates, distinct counts, ranges, and notable value distributions"
      },
      {
        "id": "c",
        "text": "Sprint velocity and issue counts"
      },
      {
        "id": "d",
        "text": "Only a list of column names"
      }
    ],
    "answer": "b",
    "explanation": "Profiling mô tả dữ liệu bằng row count, null rate, distinct count, min/max và phân bố. Ví dụ customer_id lặp hay amount âm là bằng chứng để thiết kế rule. Metric CPU/RAM mô tả hệ thống chạy, không mô tả chất lượng tập dữ liệu.",
    "lessonUrl": "lessons/unit-06.html#practice-2-s3-q12",
    "practiceSet": 2,
    "title": "Data profiling đo gì?"
  },
  {
    "id": "practice-2-s4-q01",
    "unit": 12,
    "topic": "practice-12",
    "difficulty": "basic",
    "prompt": "A streaming job must recover after restart and also handle events that arrive later than their event time. Which pair of concepts is most relevant?",
    "choices": [
      {
        "id": "a",
        "text": "Checkpoint/recovery state plus event-time/window handling for late data"
      },
      {
        "id": "b",
        "text": "OLTP normalization plus a clustered index"
      },
      {
        "id": "c",
        "text": "dbt snapshots plus a daily batch trigger"
      },
      {
        "id": "d",
        "text": "Resource groups plus cost tags"
      }
    ],
    "answer": "a",
    "explanation": "Checkpoint lưu progress/state để stream khôi phục sau restart. Event-time window và late-data policy xử lý sự kiện xảy ra từ trước nhưng đến trễ. Hai cơ chế giải quyết hai vấn đề khác nhau; checkpoint một mình không xử lý đúng business window.",
    "lessonUrl": "lessons/unit-12.html#practice-2-s4-q01",
    "practiceSet": 2,
    "title": "Restart và event đến muộn"
  },
  {
    "id": "practice-2-s4-q02",
    "unit": 8,
    "topic": "practice-8",
    "difficulty": "applied",
    "prompt": "Why is a dbt model reference such as ref() useful?",
    "choices": [
      {
        "id": "a",
        "text": "It stores source-system passwords"
      },
      {
        "id": "b",
        "text": "It creates Azure resource groups"
      },
      {
        "id": "c",
        "text": "It converts SQL models into Python"
      },
      {
        "id": "d",
        "text": "It expresses model dependencies so dbt can build execution order and lineage"
      }
    ],
    "answer": "d",
    "explanation": "ref('stg_orders') khai báo model đang phụ thuộc stg_orders, giúp dbt sắp thứ tự build và ghi lineage. Nó còn resolve tên relation theo environment. Điều này tốt hơn hard-code tên bảng vì dependency trở nên kiểm tra được.",
    "lessonUrl": "lessons/unit-08.html#practice-2-s4-q02",
    "practiceSet": 2,
    "title": "ref tạo dependency"
  },
  {
    "id": "practice-2-s4-q03",
    "unit": 8,
    "topic": "practice-8",
    "difficulty": "basic",
    "prompt": "Which statement best describes dbt's role in the taught workflow?",
    "choices": [
      {
        "id": "a",
        "text": "It is primarily a source-system CDC tool"
      },
      {
        "id": "b",
        "text": "It replaces all workflow orchestrators"
      },
      {
        "id": "c",
        "text": "It is a BI visualization product"
      },
      {
        "id": "d",
        "text": "It manages SQL-based transformations, tests, documentation, and model dependencies on data already available to the analytical platform"
      }
    ],
    "answer": "d",
    "explanation": "dbt quản lý transformation SQL, tests, documentation và dependencies khi dữ liệu đã có ở platform phân tích. Nó có thể xây tầng staging → intermediate → mart. Công cụ ingest vẫn chịu trách nhiệm đưa dữ liệu từ nguồn vào nơi dbt truy vấn.",
    "lessonUrl": "lessons/unit-08.html#practice-2-s4-q03",
    "practiceSet": 2,
    "title": "dbt trong workflow"
  },
  {
    "id": "practice-2-s4-q04",
    "unit": 7,
    "topic": "practice-7",
    "difficulty": "basic",
    "prompt": "When is pandas generally the more appropriate tool than PySpark?",
    "choices": [
      {
        "id": "a",
        "text": "When several terabytes must be processed across a cluster"
      },
      {
        "id": "b",
        "text": "Whenever the output must be Parquet"
      },
      {
        "id": "c",
        "text": "When the dataset fits comfortably on one machine and distributed execution is unnecessary"
      },
      {
        "id": "d",
        "text": "When hundreds of executors are available"
      }
    ],
    "answer": "c",
    "explanation": "Nếu dữ liệu và các bước trung gian vừa một máy, pandas đơn giản hơn và tránh chi phí lập lịch phân tán. PySpark phù hợp khi volume/compute vượt khả năng thực tế của máy đơn. Định dạng Parquet tự nó không bắt buộc dùng Spark.",
    "lessonUrl": "lessons/unit-07.html#practice-2-s4-q04",
    "practiceSet": 2,
    "title": "Chọn pandas hay PySpark"
  },
  {
    "id": "practice-2-s4-q05",
    "unit": 10,
    "topic": "practice-10",
    "difficulty": "basic",
    "prompt": "You need a raw/curated data zone for CSV, JSON, and Parquet files, organized by folders for analytical processing. Which Azure storage choice best matches the course?",
    "choices": [
      {
        "id": "a",
        "text": "Azure SQL Database"
      },
      {
        "id": "b",
        "text": "Azure Database for PostgreSQL"
      },
      {
        "id": "c",
        "text": "Azure Event Hubs"
      },
      {
        "id": "d",
        "text": "Azure Data Lake Storage Gen2"
      }
    ],
    "answer": "d",
    "explanation": "ADLS Gen2 giữ nhiều loại file như CSV, JSON, Parquet và tổ chức theo đường dẫn. Có thể tách raw/ và curated/ với quyền khác nhau. Query engine đọc các file này; storage không tự biến chúng thành báo cáo đúng.",
    "lessonUrl": "lessons/unit-10.html#practice-2-s4-q05",
    "practiceSet": 2,
    "title": "Raw và curated trên ADLS"
  },
  {
    "id": "practice-2-s4-q06",
    "unit": 8,
    "topic": "practice-8",
    "difficulty": "basic",
    "prompt": "What is the main purpose of Jinja or macros in a small dbt project?",
    "choices": [
      {
        "id": "a",
        "text": "Replace SQL with a BI dashboard"
      },
      {
        "id": "b",
        "text": "Store raw source files"
      },
      {
        "id": "c",
        "text": "Reduce repeated SQL patterns through reusable templating logic"
      },
      {
        "id": "d",
        "text": "Provision Azure networks"
      }
    ],
    "answer": "c",
    "explanation": "Jinja sinh SQL từ template; macro đóng gói mẫu SQL lặp lại. Ví dụ chuẩn hóa cách tính net_amount ở nhiều model. Hãy kiểm tra compiled SQL vì đó mới là câu lệnh warehouse thực thi; tránh abstraction làm query khó hiểu.",
    "lessonUrl": "lessons/unit-08.html#practice-2-s4-q06",
    "practiceSet": 2,
    "title": "Jinja và macro"
  },
  {
    "id": "practice-2-s4-q07",
    "unit": 7,
    "topic": "practice-7",
    "difficulty": "basic",
    "prompt": "A Spark job writes thousands of very small files, creating inefficient downstream reads. Which basic improvement should be considered?",
    "choices": [
      {
        "id": "a",
        "text": "Convert every output to CSV"
      },
      {
        "id": "b",
        "text": "Cache every intermediate DataFrame permanently"
      },
      {
        "id": "c",
        "text": "Review partitioning and reduce excessive output partitions before writing"
      },
      {
        "id": "d",
        "text": "Increase the number of small files so work is more distributed"
      }
    ],
    "answer": "c",
    "explanation": "Nhiều output partitions có thể tạo hàng nghìn file nhỏ, tăng metadata và chi phí mở file khi đọc. Xem kích thước dữ liệu, phân phối key rồi điều chỉnh repartition/coalesce hoặc compact. Không ép về một partition cho mọi workload vì có thể tạo bottleneck.",
    "lessonUrl": "lessons/unit-07.html#practice-2-s4-q07",
    "practiceSet": 2,
    "title": "Quá nhiều file nhỏ"
  },
  {
    "id": "practice-2-s4-q08",
    "unit": 7,
    "topic": "practice-7",
    "difficulty": "applied",
    "prompt": "A Spark stage runs 200 tasks. 199 finish quickly, while one task runs for 40 minutes. What is the most likely data-related cause?",
    "choices": [
      {
        "id": "a",
        "text": "Too many SQL comments"
      },
      {
        "id": "b",
        "text": "The output is Parquet"
      },
      {
        "id": "c",
        "text": "Data skew causing one partition to contain a disproportionate amount of work"
      },
      {
        "id": "d",
        "text": "The DataFrame API was used instead of SQL"
      }
    ],
    "answer": "c",
    "explanation": "Skew nghĩa là công việc không chia đều: một partition có rất nhiều row hoặc key nặng. Kiểm tra task metrics và phân bố key để xác nhận, đặc biệt giá trị NULL hoặc một customer rất lớn. Thêm executor chưa chắc giảm công việc của task bị lệch.",
    "lessonUrl": "lessons/unit-07.html#practice-2-s4-q08",
    "practiceSet": 2,
    "title": "199 task nhanh, một task chậm"
  },
  {
    "id": "practice-2-s4-q09",
    "unit": 7,
    "topic": "practice-7",
    "difficulty": "applied",
    "prompt": "Why are distributed processing frameworks such as Spark used?",
    "choices": [
      {
        "id": "a",
        "text": "They always make calculations more accurate"
      },
      {
        "id": "b",
        "text": "They remove the need to define schemas"
      },
      {
        "id": "c",
        "text": "They are required for every Parquet file"
      },
      {
        "id": "d",
        "text": "They distribute work when data volume or compute demand exceeds practical single-machine capacity"
      }
    ],
    "answer": "d",
    "explanation": "Framework phân tán chia dữ liệu và phép tính qua nhiều máy khi máy đơn không đủ. Nó thêm chi phí network, shuffle và scheduling, nên chỉ có lợi khi workload cần đến. Kết quả đúng vẫn phụ thuộc schema, thuật toán và quality checks.",
    "lessonUrl": "lessons/unit-07.html#practice-2-s4-q09",
    "practiceSet": 2,
    "title": "Vì sao cần xử lý phân tán?"
  },
  {
    "id": "practice-2-s4-q10",
    "unit": 8,
    "topic": "practice-8",
    "difficulty": "basic",
    "prompt": "Which dbt generic tests are most appropriate for a column that is intended to be the model's primary key?",
    "choices": [
      {
        "id": "a",
        "text": "accepted_values only"
      },
      {
        "id": "b",
        "text": "relationships only"
      },
      {
        "id": "c",
        "text": "No tests are needed if the model runs"
      },
      {
        "id": "d",
        "text": "unique and not_null"
      }
    ],
    "answer": "d",
    "explanation": "unique kiểm tra không có hai dòng cùng khóa, not_null kiểm tra không thiếu khóa. Cột chỉ unique vẫn có thể có NULL theo cách test/engine xử lý, nên cần cả hai. Hai test này kiểm chứng identity của model nhưng chưa chứng minh các measure đúng.",
    "lessonUrl": "lessons/unit-08.html#practice-2-s4-q10",
    "practiceSet": 2,
    "title": "unique kết hợp not_null"
  },
  {
    "id": "practice-2-s4-q11",
    "unit": 7,
    "topic": "practice-7",
    "difficulty": "basic",
    "prompt": "A PySpark job defines several filters and joins immediately, but most work occurs only when write is called. Which Spark concept explains this?",
    "choices": [
      {
        "id": "a",
        "text": "Schema evolution"
      },
      {
        "id": "b",
        "text": "Eager execution"
      },
      {
        "id": "c",
        "text": "Row-level locking"
      },
      {
        "id": "d",
        "text": "Lazy evaluation"
      }
    ],
    "answer": "d",
    "explanation": "Các filter và join xây plan lazily. Khi write cần dữ liệu thực, Spark thực thi plan để tính rồi ghi output. Vì vậy thời gian khai báo transformation nhỏ không có nghĩa join rẻ; xem Spark UI và physical plan khi action chạy.",
    "lessonUrl": "lessons/unit-07.html#practice-2-s4-q11",
    "practiceSet": 2,
    "title": "write kích hoạt Spark"
  },
  {
    "id": "practice-2-s4-q12",
    "unit": 9,
    "topic": "practice-9",
    "difficulty": "basic",
    "prompt": "In Azure, what is a resource group?",
    "choices": [
      {
        "id": "a",
        "text": "A logical container used to organize related resources for lifecycle and access management"
      },
      {
        "id": "b",
        "text": "A replacement for the Azure subscription"
      },
      {
        "id": "c",
        "text": "A network firewall rule"
      },
      {
        "id": "d",
        "text": "A database schema"
      }
    ],
    "answer": "a",
    "explanation": "Resource group là container logic gom tài nguyên Azure để quản lý lifecycle và quyền theo scope. Ví dụ một storage và Data Factory thuộc cùng workload. Subscription vẫn là cấp quản lý riêng; resource group không phải firewall hay database schema.",
    "lessonUrl": "lessons/unit-09.html#practice-2-s4-q12",
    "practiceSet": 2,
    "title": "Resource group"
  },
  {
    "id": "practice-2-s5-q01",
    "unit": 15,
    "topic": "practice-15",
    "difficulty": "applied",
    "prompt": "Why is data lineage valuable?",
    "choices": [
      {
        "id": "a",
        "text": "It automatically speeds up SQL queries"
      },
      {
        "id": "b",
        "text": "It replaces all data-quality testing"
      },
      {
        "id": "c",
        "text": "It shows how data moves from source through transformations to outputs, supporting impact and root-cause analysis"
      },
      {
        "id": "d",
        "text": "It automatically anonymizes sensitive values"
      }
    ],
    "answer": "c",
    "explanation": "Lineage nối nguồn → phép biến đổi → bảng/metric đích. Nếu source đổi cột amount, lineage cho thấy model và dashboard có thể bị ảnh hưởng. Khi báo cáo sai, cũng có thể lần ngược để tìm stage bắt đầu lệch.",
    "lessonUrl": "lessons/unit-15.html#practice-2-s5-q01",
    "practiceSet": 2,
    "title": "Lineage giúp điều tra"
  },
  {
    "id": "practice-2-s5-q02",
    "unit": 16,
    "topic": "practice-16",
    "difficulty": "applied",
    "prompt": "Why should data-pipeline assets be promoted through separate development and production environments?",
    "choices": [
      {
        "id": "a",
        "text": "Because source control cannot handle multiple versions"
      },
      {
        "id": "b",
        "text": "Because production data must always be copied to developer laptops"
      },
      {
        "id": "c",
        "text": "To make every deployment require manual code changes"
      },
      {
        "id": "d",
        "text": "To validate changes before they affect production workloads and consumers"
      }
    ],
    "answer": "d",
    "explanation": "Thay đổi cần được kiểm chứng bằng test và dữ liệu kiểm soát trước khi tác động consumer thật. Tách credential/schema/target ngăn test ghi nhầm production. Sau đó promote artifact đã kiểm chứng bằng quy trình có thể truy vết.",
    "lessonUrl": "lessons/unit-16.html#practice-2-s5-q02",
    "practiceSet": 2,
    "title": "Tách dev và production"
  },
  {
    "id": "practice-2-s5-q03",
    "unit": 16,
    "topic": "practice-16",
    "difficulty": "basic",
    "prompt": "Which validation is most appropriate in CI for a data project pull request?",
    "choices": [
      {
        "id": "a",
        "text": "Rebuild the full production platform on every commit"
      },
      {
        "id": "b",
        "text": "Deploy directly to production and wait for user feedback"
      },
      {
        "id": "c",
        "text": "Run code checks and relevant automated tests against a non-production target before merge"
      },
      {
        "id": "d",
        "text": "Skip tests if the SQL compiles locally"
      }
    ],
    "answer": "c",
    "explanation": "CI chạy kiểm tra code và test liên quan trên môi trường không phải production trước merge. Ví dụ unit test transformation, schema test và integration test với dataset nhỏ. Nó phát hiện lỗi sớm nhưng vẫn cần kiểm tra sau deploy.",
    "lessonUrl": "lessons/unit-16.html#practice-2-s5-q03",
    "practiceSet": 2,
    "title": "CI cho pull request"
  },
  {
    "id": "practice-2-s5-q04",
    "unit": 15,
    "topic": "practice-15",
    "difficulty": "basic",
    "prompt": "Which statement about encryption is correct?",
    "choices": [
      {
        "id": "a",
        "text": "Encryption at rest protects only data moving across networks"
      },
      {
        "id": "b",
        "text": "Encryption in transit protects only database backups"
      },
      {
        "id": "c",
        "text": "At-rest and in-transit encryption are the same control"
      },
      {
        "id": "d",
        "text": "Encryption at rest protects stored data, while encryption in transit protects data moving over networks"
      }
    ],
    "answer": "d",
    "explanation": "At rest bảo vệ dữ liệu khi nằm trên đĩa/object storage; in transit bảo vệ dữ liệu đi trên mạng, chẳng hạn TLS. Hai trạng thái cần kiểm soát tương ứng. Mã hóa không thay thế quyền truy cập: người được cấp quyền đọc vẫn có thể xem plaintext.",
    "lessonUrl": "lessons/unit-15.html#practice-2-s5-q04",
    "practiceSet": 2,
    "title": "Mã hóa lưu trữ và truyền tải"
  },
  {
    "id": "practice-2-s5-q05",
    "unit": 14,
    "topic": "practice-14",
    "difficulty": "basic",
    "prompt": "A source outage caused an Airflow daily workflow to miss three historical run dates. The source is now fixed, while later dates are already successful. Which concept is most relevant to process the missed historical intervals deliberately?",
    "choices": [
      {
        "id": "a",
        "text": "Backfill or rerun of the affected historical intervals with controlled task execution"
      },
      {
        "id": "b",
        "text": "Increase the worker count and wait for the next scheduled run"
      },
      {
        "id": "c",
        "text": "Delete the metadata database"
      },
      {
        "id": "d",
        "text": "Disable scheduling permanently"
      }
    ],
    "answer": "a",
    "explanation": "Backfill hoặc rerun chọn đúng các interval lịch sử bị lỗi để xử lý lại có chủ đích. Truyền data interval vào task, giới hạn concurrency và đảm bảo output idempotent. Không dùng ngày hiện tại cho extraction vì như vậy sẽ chạy nhầm khoảng dữ liệu.",
    "lessonUrl": "lessons/unit-14.html#practice-2-s5-q05",
    "practiceSet": 2,
    "title": "Backfill ba ngày bị thiếu"
  },
  {
    "id": "practice-2-s5-q06",
    "unit": 13,
    "topic": "practice-13",
    "difficulty": "basic",
    "prompt": "Which statement correctly distinguishes logs and metrics in operations?",
    "choices": [
      {
        "id": "a",
        "text": "Logs and metrics are identical except for file format"
      },
      {
        "id": "b",
        "text": "Logs contain event/detail records for investigation, while metrics are numerical signals that can be tracked over time"
      },
      {
        "id": "c",
        "text": "Metrics contain full stack traces and row-level error details by definition"
      },
      {
        "id": "d",
        "text": "Logs are only useful for security events"
      }
    ],
    "answer": "b",
    "explanation": "Log ghi sự kiện chi tiết như batch nào lỗi, error_code gì để điều tra. Metric là số đo theo thời gian như error_count hoặc duration để theo dõi xu hướng và alert. Có thể dùng run_id nối tới log, nhưng không nên biến mọi run_id thành metric label vô hạn.",
    "lessonUrl": "lessons/unit-13.html#practice-2-s5-q06",
    "practiceSet": 2,
    "title": "Logs và metrics"
  },
  {
    "id": "practice-2-s5-q07",
    "unit": 15,
    "topic": "practice-15",
    "difficulty": "basic",
    "prompt": "Which statement best distinguishes masking from anonymization in the course?",
    "choices": [
      {
        "id": "a",
        "text": "Masking reduces visibility of sensitive values, while anonymization aims to prevent identification"
      },
      {
        "id": "b",
        "text": "Masking encrypts network traffic, while anonymization encrypts disks"
      },
      {
        "id": "c",
        "text": "Masking and anonymization are identical terms"
      },
      {
        "id": "d",
        "text": "Anonymization is only a logging technique"
      }
    ],
    "answer": "a",
    "explanation": "Masking hạn chế khả năng nhìn thấy giá trị nhạy cảm, ví dụ email a***@example.com. Anonymization hướng tới ngăn nhận diện cá nhân kể cả khi kết hợp thông tin khác trong phạm vi đánh giá. Hai cách có mục tiêu khác nhau; masking chưa bảo đảm anonymous.",
    "lessonUrl": "lessons/unit-15.html#practice-2-s5-q07",
    "practiceSet": 2,
    "title": "Masking và anonymization"
  },
  {
    "id": "practice-2-s5-q08",
    "unit": 6,
    "topic": "practice-6",
    "difficulty": "basic",
    "prompt": "A source silently renames a critical column. The pipeline still runs but begins writing nulls to the curated layer. Which control best reduces the chance of this becoming silent bad data?",
    "choices": [
      {
        "id": "a",
        "text": "Increase the cluster size"
      },
      {
        "id": "b",
        "text": "Run the same pipeline twice"
      },
      {
        "id": "c",
        "text": "Validate the incoming schema and enforce critical-field data-quality tests so the run fails on breach"
      },
      {
        "id": "d",
        "text": "Store the curated layer as CSV instead of Parquet"
      }
    ],
    "answer": "c",
    "explanation": "Schema validation phát hiện field bắt buộc bị mất trước khi transformation tạo ra NULL. Critical-field tests ở curated là lớp kiểm tra bổ sung. Khi vi phạm contract quan trọng, fail/chặn publish để tránh dữ liệu xấu trông như một run thành công.",
    "lessonUrl": "lessons/unit-06.html#practice-2-s5-q08",
    "practiceSet": 2,
    "title": "Nguồn đổi tên cột âm thầm"
  },
  {
    "id": "practice-2-s5-q09",
    "unit": 1,
    "topic": "practice-1",
    "difficulty": "basic",
    "prompt": "A real database password was committed and pushed to a shared repository. What should happen first?",
    "choices": [
      {
        "id": "a",
        "text": "Make the repository private and continue using the password"
      },
      {
        "id": "b",
        "text": "Treat the credential as compromised and rotate it, then remove the secret from the repository/history and use an approved secret store"
      },
      {
        "id": "c",
        "text": "Delete only the latest file version and keep the credential"
      },
      {
        "id": "d",
        "text": "Wait until someone confirms the password was used"
      }
    ],
    "answer": "b",
    "explanation": "Coi credential đã lộ và revoke/rotate trước để chặn sử dụng giá trị cũ. Sau đó xử lý file/history và chuyển sang secret store theo quy trình. Chỉ xóa dòng trong commit mới không vô hiệu hóa credential đã có trong clone hoặc log khác.",
    "lessonUrl": "lessons/unit-01.html#practice-2-s5-q09",
    "practiceSet": 2,
    "title": "Secret đã push phải xử lý ngay"
  },
  {
    "id": "practice-2-s5-q10",
    "unit": 13,
    "topic": "practice-13",
    "difficulty": "basic",
    "prompt": "A pipeline retries once every night because of a short transient issue and always recovers. The team has started ignoring alerts. What is the best response?",
    "choices": [
      {
        "id": "a",
        "text": "Tune alert conditions so notifications focus on failures or thresholds requiring human action"
      },
      {
        "id": "b",
        "text": "Increase alert frequency"
      },
      {
        "id": "c",
        "text": "Remove monitoring entirely"
      },
      {
        "id": "d",
        "text": "Send every retry to more recipients"
      }
    ],
    "answer": "a",
    "explanation": "Nếu retry tự phục hồi mỗi đêm, paging từng lần làm đội vận hành dần bỏ qua thông báo. Điều chỉnh alert theo failure cuối, freshness hoặc ngưỡng cần hành động, vẫn giữ retry metrics/log để theo dõi. Mỗi alert nên có owner và hướng điều tra.",
    "lessonUrl": "lessons/unit-13.html#practice-2-s5-q10",
    "practiceSet": 2,
    "title": "Alert cần người xử lý"
  },
  {
    "id": "practice-2-s5-q11",
    "unit": 15,
    "topic": "practice-15",
    "difficulty": "basic",
    "prompt": "What does least privilege mean for a pipeline service identity?",
    "choices": [
      {
        "id": "a",
        "text": "Give owner access so the job never encounters permission errors"
      },
      {
        "id": "b",
        "text": "Reuse a personal administrator account"
      },
      {
        "id": "c",
        "text": "Grant only the specific permissions required on the specific resources the pipeline needs"
      },
      {
        "id": "d",
        "text": "Disable authentication inside the VNet"
      }
    ],
    "answer": "c",
    "explanation": "Cấp pipeline identity đúng quyền trên những resource thực sự cần, ví dụ read raw và write curated. Không cần Owner toàn subscription cho tác vụ đó. Quyền theo scope nhỏ dễ audit và giới hạn thiệt hại khi có lỗi.",
    "lessonUrl": "lessons/unit-15.html#practice-2-s5-q11",
    "practiceSet": 2,
    "title": "Least privilege cho service"
  },
  {
    "id": "practice-2-s5-q12",
    "unit": 14,
    "topic": "practice-14",
    "difficulty": "basic",
    "prompt": "In Airflow, what primarily defines the execution order between dependent pipeline steps?",
    "choices": [
      {
        "id": "a",
        "text": "The order in which Python files are alphabetically named"
      },
      {
        "id": "b",
        "text": "The metadata database table order"
      },
      {
        "id": "c",
        "text": "The number of workers"
      },
      {
        "id": "d",
        "text": "Task dependencies defined in the DAG"
      }
    ],
    "answer": "d",
    "explanation": "Dependency trong DAG xác định task nào phải hoàn tất trước task khác. Worker count quyết định khả năng chạy song song nhưng không thay đổi quan hệ đó. Ví dụ extract >> validate >> load khiến load chờ validation theo trigger rule.",
    "lessonUrl": "lessons/unit-14.html#practice-2-s5-q12",
    "practiceSet": 2,
    "title": "Thứ tự chạy task"
  }
];
  if(typeof module === 'object' && module.exports) module.exports=bank;
  else root.DE01_PRACTICE_BANK=bank;
}(typeof globalThis !== 'undefined' ? globalThis : this));
