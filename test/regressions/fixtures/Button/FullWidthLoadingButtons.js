import * as React from 'react';
import LoadingButton from '@temp-mui/lab/LoadingButton';
import FormControlLabel from '@temp-mui/material/FormControlLabel';
import Switch from '@temp-mui/material/Switch';
import SaveIcon from '@temp-mui/icons-material/Save';
import SendIcon from '@temp-mui/icons-material/Send';

export default function FullWidthLoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

  return (
    <div>
      <FormControlLabel
        sx={{
          display: 'block',
        }}
        control={
          <Switch
            checked={loading}
            onChange={() => setLoading(!loading)}
            name="loading"
            color="primary"
          />
        }
        label="Loading"
      />
      <LoadingButton onClick={handleClick} loading={loading} variant="outlined" fullWidth>
        Fetch data
      </LoadingButton>
      <LoadingButton
        onClick={handleClick}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        fullWidth
      >
        Send
      </LoadingButton>
      <LoadingButton
        color="secondary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
        fullWidth
      >
        Save
      </LoadingButton>
    </div>
  );
}
