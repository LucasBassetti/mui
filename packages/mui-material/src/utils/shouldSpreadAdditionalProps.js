import { isHostComponent } from '@temp-mui/base/utils';

const shouldSpreadAdditionalProps = (Slot) => {
  return !Slot || !isHostComponent(Slot);
};

export default shouldSpreadAdditionalProps;
