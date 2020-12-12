import React from "react";
import { FormattedMessage } from "react-intl";

export default function LocalizationComponent() {
  return (
    <div>
      <FormattedMessage id="common.name">
        <span>Todo</span>
      </FormattedMessage>
    </div>
  );
}
