'use client';
import * as React from 'react';
import Pagination from '@temp-mui/material/Pagination';

let warnedOnce = false;

/**
 * @ignore - do not document.
 */
export default React.forwardRef(function DeprecatedPagination(props, ref) {
  if (!warnedOnce) {
    console.warn(
      [
        'MUI: The Pagination component was moved from the lab to the core.',
        '',
        "You should use `import { Pagination } from '@temp-mui/material'`",
        "or `import Pagination from '@temp-mui/material/Pagination'`",
      ].join('\n'),
    );

    warnedOnce = true;
  }

  return <Pagination ref={ref} {...props} />;
});
