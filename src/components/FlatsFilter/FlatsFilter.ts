import { Vue, Component, Emit } from 'vue-property-decorator';
import { FlatsFilterSettins, FlatsFilterInterface } from './types';

@Component
export default class FlatsFilter extends Vue implements FlatsFilterInterface  {
  private floor: [number, number] = [1, 99];
  private square: [number, number] = [1, 999];
  private price: [number, number] = [0, 120];
  private flats: number[] = [];

  public getSettings(): FlatsFilterSettins {
    return this.prepareSettingsObject();
  }

  private onChangeFloor(value: number , index: number): void {
    this.$set(this.floor, index, value);
  }

  private onChangePrice(value: number , index: number): void {
    this.$set(this.price, index, value);
  }

  private onChangeSquare(value: number , index: number): void {
    this.$set(this.square, index, value);
  }

  private prepareSettingsObject() {
    const data = {
      floor: this.floor,
      square: this.square,
      price: this.price,
      flats: this.flats,
    };  
    return data;
  }

  @Emit('update')
  private onApply(): FlatsFilterSettins {
    return this.prepareSettingsObject();
  }

  private clearFilter(): void {
    this.floor = [1, 99];
    this.square = [1, 999];
    this.price = [0, 120];
    this.flats = [];
    this.onApply();
  }
}