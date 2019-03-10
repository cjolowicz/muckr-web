// @flow
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import type { Dispatch } from "../artist";
import {
  fetchArtists,
  createArtist,
  FETCH_ARTISTS_REQUEST,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE,
  CREATE_ARTIST_REQUEST,
  CREATE_ARTIST_SUCCESS,
  CREATE_ARTIST_FAILURE
} from "../artist";
import * as api from "../../api/artist";
import { unsafeCast } from "../../utils";
import { mock } from "../../test/utils";
import { TOKEN, ARTISTS, ARTIST } from "../../test/fixtures";

const mockStore = configureStore([thunk]);

const mockFetchArtists = promise => {
  beforeAll(() => {
    jest.spyOn(api, "fetchArtists").mockReturnValue(promise);
  });

  afterAll(() => {
    mock(api.fetchArtists).mockRestore();
  });

  return promise;
};

const mockCreateArtist = promise => {
  beforeAll(() => {
    jest.spyOn(api, "createArtist").mockReturnValue(promise);
  });

  afterAll(() => {
    mock(api.createArtist).mockRestore();
  });

  return promise;
};

describe("fetchArtists", () => {
  describe("on success", () => {
    const promise = mockFetchArtists(Promise.resolve(ARTISTS));

    it("dispatches FETCH_ARTISTS_REQUEST", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(fetchArtists(TOKEN));

      const actions = store.getActions();
      const action = actions[0];

      expect(action.type).toEqual(FETCH_ARTISTS_REQUEST);
    });

    it("dispatches FETCH_ARTISTS_SUCCESS", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(fetchArtists(TOKEN));
      await promise;

      const actions = store.getActions();
      const action = actions[1];

      expect(action.type).toEqual(FETCH_ARTISTS_SUCCESS);
    });
  });

  describe("on error", () => {
    expect.assertions(1);

    const error = Error("fail");
    const promise = mockFetchArtists(Promise.reject(error));

    it("dispatches FETCH_ARTISTS_REQUEST", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(fetchArtists(TOKEN));

      const actions = store.getActions();
      const action = actions[0];

      expect(action.type).toEqual(FETCH_ARTISTS_REQUEST);
    });

    it("dispatches FETCH_ARTISTS_FAILURE", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(fetchArtists(TOKEN));

      try {
        await promise;
      } catch (unused) {
        // ignore
      }

      const actions = store.getActions();
      const action = actions[1];

      expect(action.type).toEqual(FETCH_ARTISTS_FAILURE);
    });
  });
});

describe("createArtist", () => {
  describe("on success", () => {
    const promise = mockCreateArtist(Promise.resolve(ARTIST));

    it("dispatches CREATE_ARTIST_REQUEST", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(createArtist(TOKEN, ARTIST.name));

      const actions = store.getActions();
      const action = actions[0];

      expect(action.type).toEqual(CREATE_ARTIST_REQUEST);
    });

    it("dispatches CREATE_ARTIST_SUCCESS", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(createArtist(TOKEN, ARTIST.name));
      await promise;

      const actions = store.getActions();
      const action = actions[1];

      expect(action.type).toEqual(CREATE_ARTIST_SUCCESS);
    });
  });

  describe("on error", () => {
    expect.assertions(1);

    const error = Error("fail");
    const promise = mockCreateArtist(Promise.reject(error));

    it("dispatches CREATE_ARTIST_REQUEST", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(createArtist(TOKEN, ARTIST.name));

      const actions = store.getActions();
      const action = actions[0];

      expect(action.type).toEqual(CREATE_ARTIST_REQUEST);
    });

    it("dispatches CREATE_ARTIST_FAILURE", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(createArtist(TOKEN, ARTIST.name));

      try {
        await promise;
      } catch (unused) {
        // ignore
      }

      const actions = store.getActions();
      const action = actions[1];

      expect(action.type).toEqual(CREATE_ARTIST_FAILURE);
    });
  });
});
