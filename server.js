const app = require("./app");

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${port}`);
  console.log(`📝 Tài khoản test: admin / 123`);
});
