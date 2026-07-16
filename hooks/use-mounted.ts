import * as React from 'react';

// Never changes: the "store" is just whether we are past hydration.
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function useMounted() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
