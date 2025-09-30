const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// 👉 Trang login đẹp, hiện đại
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8" />
      <title>Đăng nhập</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
      <style>
        body {
          margin: 0;
          font-family: 'Roboto', sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .login-box {
          background: #fff;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          width: 380px;
          text-align: center;
          animation: fadeIn 1s ease;
        }
        .login-box h2 {
          margin-bottom: 25px;
          font-size: 24px;
          font-weight: 700;
          color: #333;
        }
        .input-group {
          position: relative;
          margin-bottom: 20px;
        }
        .input-group input {
          width: 100%;
          padding: 12px 40px 12px 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 15px;
          outline: none;
          transition: 0.3s;
        }
        .input-group input:focus {
          border-color: #667eea;
          box-shadow: 0 0 5px rgba(102,126,234,0.5);
        }
        .input-group i {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }
        button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }
        button:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .footer {
          margin-top: 20px;
          font-size: 13px;
          color: #555;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
      <script src="https://kit.fontawesome.com/4b9ba14b0f.js" crossorigin="anonymous"></script>
    </head>
    <body>
      <div class="login-box">
        <h2>🔐 Đăng Nhập</h2>
        <form action="/login" method="POST">
          <div class="input-group">
            <input type="text" name="username" placeholder="Tên đăng nhập" required />
            <i class="fas fa-user"></i>
          </div>
          <div class="input-group">
            <input type="password" name="password" placeholder="Mật khẩu" required />
            <i class="fas fa-lock"></i>
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
        <div class="footer">© 2025 Student Attendance System</div>
      </div>
    </body>
    </html>
  `);
});

// 👉 Trang thành công
const successPage = (username) => `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Thành công</title>
    <style>
      body {
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(135deg, #43e97b, #38f9d7);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .box {
        background: #fff;
        padding: 40px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      }
      h2 { color: #2e7d32; }
      a {
        display: inline-block;
        margin-top: 20px;
        text-decoration: none;
        color: #667eea;
        font-weight: 500;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <h2>Xin chào, ${username}!</h2>
      <p>🎉 Đăng nhập thành công</p>
      <a href="/">Đăng xuất</a>
    </div>
  </body>
  </html>
`;

// 👉 Trang lỗi
const errorPage = `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Lỗi đăng nhập</title>
    <style>
      body {
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(135deg, #ff758c, #ff7eb3);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .box {
        background: #fff;
        padding: 40px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      }
      h2 { color: #c62828; }
      a {
        display: inline-block;
        margin-top: 20px;
        text-decoration: none;
        color: #667eea;
        font-weight: 500;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <h2>❌ Sai tài khoản hoặc mật khẩu</h2>
      <a href="/">Thử lại</a>
    </div>
  </body>
  </html>
`;

// 👉 Xử lý login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "123") {
    res.send(successPage(username));
  } else {
    res.send(errorPage);
  }
});

module.exports = app;
