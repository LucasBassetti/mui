const eslint = require('eslint');
const rule = require('./no-styled-box');

const ruleTester = new eslint.RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
});

ruleTester.run('no-styled-box', rule, {
  valid: [
    `
import { styled } from '@temp-mui/system';
styled('div');
`,
    `
import { styled } from '@temp-mui/system';
styled('div', {});
`,
  ],
  invalid: [
    {
      code: `
import { styled } from '@temp-mui/system';
import Box from '@temp-mui/material/Box';

const foo = styled(Box)({
  color: 'red',
});
`,
      errors: [
        {
          messageId: 'noBox',
          type: 'CallExpression',
        },
      ],
      output: `
import { styled } from '@temp-mui/system';
import Box from '@temp-mui/material/Box';

const foo = styled('div')({
  color: 'red',
});
`,
    },
    {
      code: `
import { styled } from '@temp-mui/system';
import Box from '@temp-mui/material/Box';

const foo = styled(Box, {})({
  color: 'red',
});
`,
      errors: [
        {
          messageId: 'noBox',
          type: 'CallExpression',
        },
      ],
      output: `
import { styled } from '@temp-mui/system';
import Box from '@temp-mui/material/Box';

const foo = styled('div', {})({
  color: 'red',
});
`,
    },
  ],
});
