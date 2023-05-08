import { protoUser, User, UserBackResponse } from "../models/user.model";
import { UsersApiRepo } from "./users.api.repo";

const mockResp = {
  results: [
    {
      token: "test",
      user: {
        name: "test",
      } as User,
    },
  ],
} as unknown as UserBackResponse;

const mockUser = {
  name: "test",
} as protoUser;
describe("Given the users api repo", () => {
  const repo = new UsersApiRepo();

  describe("When instantiated", () => {
    test("Then it should make a new instance", () => {
      expect(repo).toBeInstanceOf(UsersApiRepo);
    });
  });
  describe("When we call the register method", () => {
    test("if the answer is not ok, then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("error");
      const result = repo.registerUserRepo(mockUser);
      await expect(result).rejects.toThrow();
    });
    test("If the answer is ok, then it should return the login info", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResp),
      });
      const result = await repo.registerUserRepo(mockUser);
      expect(result).toEqual(mockResp);
    });
  });
  describe("When we call the login user method", () => {
    test("If the answer is not ok, then it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue("error");
      const result = repo.loginUserRepo(mockUser);
      await expect(result).rejects.toThrow();
    });
    test("If the answer is ok, then it should return the login info", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResp),
      });
      const result = await repo.loginUserRepo(mockUser);
      expect(result).toEqual(mockResp);
    });
  });
});
