import { authenticateSaga } from "./authSaga";
import { authenticate } from "../actions/login";
import { recordSaga } from "../helpers/recordSaga";

jest.mock("./../api/api", () => ({ serverLogIn: jest.fn(() => true) }));

describe("authSaga", () => {
  describe("#AUTHENTICATE", () => {
    it("authenticates through api", async () => {
      const dispatched = await recordSaga(
        authenticateSaga,
        authenticate("testlogin", "testpassword")
      );

      expect(dispatched).toEqual([
        {
          type: "LOG_IN",
        },
      ]);
    });
  });
});