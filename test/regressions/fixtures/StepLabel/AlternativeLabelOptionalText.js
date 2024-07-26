import * as React from 'react';
import Box from '@temp-mui/material/Box';
import Stepper from '@temp-mui/material/Stepper';
import Step from '@temp-mui/material/Step';
import StepLabel from '@temp-mui/material/StepLabel';

const steps = ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];

export default function AlternativeLabelOptionalText() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} expanded>
            <StepLabel optional="optional">{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
