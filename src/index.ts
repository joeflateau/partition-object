import { omit, pick } from 'lodash';

export function partitionObject<
  T extends Record<string, unknown>,
  TKey extends keyof T
>(obj: T, keys: TKey[]): [Pick<T, TKey>, Omit<T, TKey>] {
  const objWith = pick(obj, keys);
  const objWithout = omit(obj, keys);
  return [objWith, objWithout];
}
