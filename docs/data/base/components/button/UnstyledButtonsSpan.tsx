import * as React from 'react';
import Button, { buttonClasses, ButtonTypeMap } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { PolymorphicComponent } from '@mui/base/utils';

export default function UnstyledButtonsSpan() {
  return (
    <Stack spacing={2} direction="row">
      <CustomButton slots={{ root: 'span' }}>Button</CustomButton>
      <CustomButton slots={{ root: 'span' }} disabled>
        Disabled
      </CustomButton>
    </Stack>
  );
}

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButton = styled(Button)`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  line-height: 1.5rem;
  background-color: ${blue[500]};
  color: white;
  border-radius: 8px;
  font-weight: 600;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 150ms ease;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
` as PolymorphicComponent<ButtonTypeMap>;
