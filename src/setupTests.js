import '@testing-library/jest-dom/extend-expect';

const matchMedia = jest.fn(() => ({
  matches: false,
  media: '',
  onchange: null,
}));

global.window.matchMedia = matchMedia;
