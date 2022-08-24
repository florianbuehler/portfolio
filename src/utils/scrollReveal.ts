import ScrollReveal from 'scrollreveal';

type ScrollRevealRotateObject = {
  x?: number | undefined;
  y?: number | undefined;
  z?: number | undefined;
};

type ScrollRevealPositionObject = {
  top?: number | undefined;
  right?: number | undefined;
  bottom?: number | undefined;
  left?: number | undefined;
};

type ScrollRevealObjectOptions = {
  origin?: string | undefined;
  distance?: string | undefined;
  duration?: number | undefined;
  delay?: number | undefined;
  interval?: number | undefined;
  rotate?: ScrollRevealRotateObject | undefined;
  opacity?: number | undefined;
  scale?: number | undefined;
  easing?: string | undefined;
  cleanup?: boolean | undefined;
  container?: unknown;
  mobile?: boolean | undefined;
  reset?: boolean | undefined;
  useDelay?: string | undefined;
  viewFactor?: number | undefined;
  viewOffset?: ScrollRevealPositionObject | undefined;
  beforeReveal?(domEl: HTMLElement | NodeListOf<Element>): void;
  afterReveal?(domEl: HTMLElement | NodeListOf<Element>): void;
  beforeReset?(domEl: HTMLElement | NodeListOf<Element>): void;
  afterReset?(domEl: HTMLElement | NodeListOf<Element>): void;
};

export const getScrollRevealConfig = (
  delay = 200,
  viewFactor = 0.25
): ScrollRevealObjectOptions => ({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
});

const isSSR = typeof window === 'undefined';
const scrollReveal = isSSR ? null : ScrollReveal();

export default scrollReveal;
