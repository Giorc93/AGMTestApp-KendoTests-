import React from "react";

import { useHistory, withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";

const TestComponent = () => {
  const history = useHistory();
  return (
    <div>
      <p>Test Component</p>
      <Button onClick={() => history.push("/home")}>Go To Home</Button>
    </div>
  );
};

export default withRouter(TestComponent);
