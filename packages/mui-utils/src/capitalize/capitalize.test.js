import { expect } from 'chai';
import capitalize from '@temp-mui/utils/capitalize';

describe('capitalize', () => {
  it('should work', () => {
    expect(capitalize('foo')).to.equal('Foo');
  });

  it('should throw when not used correctly', () => {
    expect(() => {
      capitalize();
    }).toThrowMinified(/expects a string argument/);
  });
});
