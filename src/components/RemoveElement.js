// @flow
import * as React from "react";

type Props = {
  elementId: string,
  children: React.Node
};

const RemoveElement = ({ elementId, children }: Props) => {
  React.useEffect(() => {
    const element = document.getElementById(elementId);
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }, [elementId]);

  return children;
};

export default RemoveElement;
