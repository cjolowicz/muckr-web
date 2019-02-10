// @flow
import * as React from "react";

type Props = {
  elementId: string,
  children: React.Node
};

export default class RemoveElement extends React.Component<Props> {
  componentDidMount() {
    const { elementId } = this.props;
    const element = document.getElementById(elementId);
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}
