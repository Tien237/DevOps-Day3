const request = require("supertest");
const app = require("../app");

describe("App basic test", () => {
  test("GET / should return 200 and contain login page", async () => {
    const res = await request(app).get("/");
    console.log(res.text); // debug nếu fail
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Đăng Nhập"); // kiểm tra nội dung trang login
  });
});
