import {
  describeConformance as baseDescribeConformance,
  ConformanceOptions,
} from '@temp-mui-internal/test-utils';
import { ThemeProvider, createTheme } from '@temp-mui/system';

export default function describeConformance(
  minimalElement: React.ReactElement,
  getOptions: () => ConformanceOptions,
) {
  function getOptionsWithDefaults() {
    return {
      ThemeProvider,
      createTheme,
      ...getOptions(),
    };
  }

  return baseDescribeConformance(minimalElement, getOptionsWithDefaults);
}
