import { partitionObject } from '../src/index';

describe('partitionObject', () => {
  it('partitions object', () => {
    const [withFoo, withBar] = partitionObject({ foo: 1, bar: 2 }, ['foo']);

    expect(withFoo.foo).toEqual(1);
    // @ts-expect-error
    expect(withFoo.bar).toBeUndefined();

    expect(withBar.bar).toEqual(2);
    // @ts-expect-error
    expect(withBar.foo).toBeUndefined();
  });
});
