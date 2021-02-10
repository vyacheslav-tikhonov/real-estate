export interface FlatsFilterSettins {
  floor: [number, number];
  square: [number, number];
  price: [number, number];
  flats: number[];
};

export interface FlatsFilterInterface {
  getSettings: () => FlatsFilterSettins
}
