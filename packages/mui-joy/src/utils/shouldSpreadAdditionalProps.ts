import { isHostComponent } from '@temp-mui/base';

const shouldSpreadAdditionalProps = (Slot: any) => {
  return !Slot || !isHostComponent(Slot);
};

export default shouldSpreadAdditionalProps;
