import * as React from 'react';
import Dialog from '@temp-mui/material/Dialog';
import DialogTitle from '@temp-mui/material/DialogTitle';
import DialogContent from '@temp-mui/material/DialogContent';
import DialogContentText from '@temp-mui/material/DialogContentText';

function TestStandardPropsCallbackRefUsage() {
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const setContentRef = React.useCallback((node: HTMLDivElement | null) => {
    contentRef.current = node;
    // ...
  }, []);

  return (
    <Dialog open>
      <DialogTitle>Dialog Demo</DialogTitle>
      <DialogContent ref={setContentRef}>
        <DialogContentText>Dialog content</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

function TestStandardPropsObjectRefUsage() {
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <Dialog open>
      <DialogTitle>Dialog Demo</DialogTitle>
      <DialogContent ref={contentRef}>
        <DialogContentText>Dialog content</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
