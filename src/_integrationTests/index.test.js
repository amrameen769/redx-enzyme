import { testStore } from "../utils";
import { fetchPosts } from "../actions";
import moxios from "moxios";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("store updated correctly", async () => {
    const expectedState = [
      {
        title: "Test Title 1",
        body: "Test Data",
      },
      {
        title: "Test Title 1",
        body: "Test Data",
      },
      {
        title: "Test Title 1",
        body: "Test Data",
      },
    ];

    const store = testStore();

    await moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
