// export const VOLUME_THRESHOLD = 1000;
// export const LIQUIDITY_THRESHOLD = 1;
export const VOLUME_THRESHOLD = 10000;
export const LIQUIDITY_THRESHOLD = 7;
export const CHECK_INTERVAL = 5 * 60;
export const CLEANUP_INTERVAL = 30;
export const MAX_START_TIME = 60 * 10;
export const AGE_THRESHOLD = 10;
export const PUBLIC_CHANNEL_DELAY = 40;

export const transactionValidTime = 25 * 60;
export const splitPaymentsWith: {
  [key: string]: { address: string; share: number };
} = {
  dev: {
    address: "Cd4qPLh7UAfKog5EyHv7ZXPyPCWuuyWbqk3LxRzpC1u4",
    share: 0.4,
  },
  gag: {
    address: "DDKBZuQ6gDdyzwR8QgiP7Wmkx14wPXGCuqv1MfKsjizY",
    share: 0.2,
  },
  tetsuo: {
    address: "MuJWi1UHKDJ8xfYvHU7iWhy5jz4UfD1gpGaqQyqL1GV",
    share: 0.2,
  },
  neo: {
    address: "Aq8bbkfMtsVbTnJvkdU1ktib2ftfuHXzEbswDD7xM3LW",
    share: 0.2,
  },
};
