# partition-object

Splits an object into two, one with the specified keys (pick) and one without the specified keys (omit).

```typescript
const [withFoo, withBar] = partitionObject({ foo: 1, bar: 2 }, ['foo']);

withFoo.foo; // 1
withFoo.bar; // undefined (and typescript error)

withBar.bar; // 2
withBar.foo; // undefined (and typescript error)
```
