// @flow
import * as React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { mount } from "enzyme";
import { Cookies, CookiesProvider } from "react-cookie";

import withAuth, { getDisplayName } from "../withAuth";
import { TOKEN } from "../../test/fixtures";

type Props = { token: string };
const Component = ({ token }: Props) => <p>{token}</p>;
const ComponentWithAuth = withAuth(Component);
const Auth = () => <ComponentWithAuth />;
const cookies = new Cookies();

describe("withAuth", () => {
  describe("without token", () => {
    beforeEach(() => {
      cookies.remove("token");
    });

    it("redirects to /login", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <CookiesProvider cookies={cookies}>
            <Route path="/" exact component={Auth} />
          </CookiesProvider>
        </MemoryRouter>
      );
      const history = wrapper.find("Router").prop("history");
      expect(history.location.pathname).toEqual("/login");
    });
  });

  describe("with token", () => {
    beforeEach(() => {
      cookies.set("token", TOKEN);
    });

    it("renders component", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <CookiesProvider cookies={cookies}>
            <Route path="/" exact component={Auth} />
          </CookiesProvider>
        </MemoryRouter>
      );
      expect(wrapper).toContainMatchingElement("Component");
    });

    it("passes token to component", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <CookiesProvider cookies={cookies}>
            <Route path="/" exact component={Auth} />
          </CookiesProvider>
        </MemoryRouter>
      );
      const component = wrapper.find(Component);
      expect(component).toHaveProp({ token: TOKEN });
    });
  });
});

describe("getDisplayName", () => {
  describe("when displayName exists", () => {
    it("returns displayName", () => {
      const Foo = () => <p>Foo</p>;
      const result = getDisplayName(Foo);
      expect(result).toEqual("Foo");
    });
  });

  describe("when displayName does not exist", () => {
    it("returns 'Component'", () => {
      const result = getDisplayName(() => <p>Foo</p>);
      expect(result).toEqual("Component");
    });
  });
});
