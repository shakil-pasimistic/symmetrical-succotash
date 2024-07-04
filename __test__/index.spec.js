import request from "supertest";

import app from "../index";

describe('GET /status', () => {
  it('should return the server status of OK', async () => {
    const res = await request(app)
      .get('/status')
      .expect(200);
    
      expect(res.statusCode).toEqual(200)
      expect(res.body).toEqual({
        code: 200,
        success: true,
        message: "OK"
      })
  });
});