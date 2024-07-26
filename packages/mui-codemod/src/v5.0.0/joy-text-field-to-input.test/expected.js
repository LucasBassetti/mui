import { Input as JoyInput } from "@temp-mui/joy";
import JoyInput2 from "@temp-mui/joy/Input";
// the codemod should transform only Joy TextField
import TextField from "@temp-mui/material/TextField"

<div>
  <FormControl
    aria-hidden={false}
    component={'span'}
    id="Id"
    required={true}
    size="sm"
    color="primary">
    <FormLabel aria-hidden={false} component={'span'} id="Id-label">
      Label
    </FormLabel>
    <JoyInput
      aria-hidden={false}
      component={'span'}
      placeholder="Placeholder"
      name="Name"
      type="button"
      autoComplete="on"
      autoFocus={true}
      error={true}
      fullWidth={true}
      defaultValue="DefaultValue"
      variant="outlined" />
    <FormHelperText aria-hidden={false} component={'span'} id="Id-helper-text">
      Help!
    </FormHelperText>
  </FormControl>
  <JoyInput2 />
  <TextField />
</div>;
