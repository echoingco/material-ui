// @flow weak

import React from 'react';
import { FormLabel } from 'material-ui/Form';
import { RadioGroup, LabelRadio as Radio } from 'material-ui/Radio';

export default function RadioGroupWithLabelError() {
  return (
    <div style={{ width: 100 }}>
      <FormLabel required error>Location</FormLabel>
      <RadioGroup selectedValue="home">
        <Radio label="Home" value="home" />
        <Radio label="Work" value="work" />
      </RadioGroup>
    </div>
  );
}