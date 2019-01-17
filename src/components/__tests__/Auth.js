// @flow
import * as React from "react";
import { shallow } from "enzyme";

import { withAuth, getDisplayName } from "../Auth";
import { TOKEN } from "../../test/fixtures";

type Props = { token: string };
const Component = ({ token }: Props) => <p>{token}</p>;
const Auth = withAuth(Component);

describe("withAuth", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("without token", () => {
    it("redirects", () => {
      const wrapper = shallow(<Auth />);
      expect(wrapper).toContainMatchingElement("Redirect");
    });
  });

  describe("with token", () => {
    beforeEach(() => {
      localStorage.setItem("token", TOKEN);
    });

    it("renders component", () => {
      const wrapper = shallow(<Auth />);
      expect(wrapper).toContainMatchingElement("Component");
    });

    it("passes token to component", () => {
      const wrapper = shallow(<Auth />);
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
