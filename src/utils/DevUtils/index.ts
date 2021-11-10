// eslint-disable-next-line @typescript-eslint/ban-types
export const sleep = (milliSeconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliSeconds))
