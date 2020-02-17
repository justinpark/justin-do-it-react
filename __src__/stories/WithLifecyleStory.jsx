import React from "react";
import { storiesOf } from "@storybook/react";

import { withLoadData } from "../05/lifecycle";
import Counter from "../03/Counter";

const CounterWithLoadData = withLoadData(Counter);

storiesOf("WithLifecycle", module)
  .addWithJSX("CounterWithLoadData", () => (
    <CounterWithLoadData loadData={() => Promise.resolve(10)} />
  ));
