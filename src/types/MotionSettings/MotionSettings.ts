export type MotionSettings = {
  nth?: number;
  ease?: string;
  delay?: number;
  finish?: (definition: unknown) => void;
};
