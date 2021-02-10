import { Vue, Component, Emit, Prop, Watch } from 'vue-property-decorator';
import { Flat } from '@/interfaces/entities/realEstate/types';
import { FlatsFilterSettins } from './types';

@Component
export default class FlatsFilter extends Vue {
  @Prop({default: () => ([])}) private readonly flats!: Flat[];

  private floor: [number, number] = [1, 120];
  private square: [number, number] = [1, 999];
  private price: [number, number] = [0, 120];
  private rooms: number[] = [];
  private settingsObject: FlatsFilterSettins = {} as FlatsFilterSettins; 

  @Watch('flats') 
  private onUpdateFlats(flats: Flat[]) {
    this.filterFlats(flats);
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

  private clearFilter(): void {
    this.floor = [1, 120];
    this.square = [1, 999];
    this.price = [0, 120];
    this.rooms = [];
    this.updateSettingsObject();
  }

  private prepareSettingsObject(): FlatsFilterSettins {
    return {
      floor: [...this.floor],
      square: [...this.square],
      price: [...this.price],
      rooms: [...this.rooms],
    }
  }

  private updateSettingsObject() {
    this.settingsObject = this.prepareSettingsObject();
    this.filterFlats(this.flats);
  }

  private filterFloor(flats: Flat[]): Flat[] {
    return flats.filter((flat: Flat) =>{
      return flat.floor >= this.settingsObject.floor[0] && flat.floor <= this.settingsObject.floor[1];
    })
  }

  private filterPrice(flats: Flat[]): Flat[] {
    const startPrice = this.settingsObject.price[0] * 1000000
    const endPrice = this.settingsObject.price[1] * 1000000

    return flats.filter((flat: Flat) =>{
      return flat.price >= startPrice && flat.price <= endPrice;
    })
  }

  private filterSquare(flats: Flat[]): Flat[] {
    return flats.filter((flat: Flat) => {
      return flat.square >= this.settingsObject.square[0] && flat.square <= this.settingsObject.square[1];
    })
  }

  private checkFlatByRoomsNumber(flat: Flat, rooms: number) {
    if (rooms === 0) {
      return flat.is_studio === 1;
    } else if (rooms >= 3) {
      return flat.rooms >= 3;
    } else {
      return flat.rooms === rooms;
    }
  }

  private filterRooms(flats: Flat[]): Flat[] {
    if (this.settingsObject.rooms.length > 0) {
      return flats.filter((flat: Flat) => {
        const isStudio: boolean = this.settingsObject.rooms.indexOf(0) !== -1;
        const isBig: boolean = this.settingsObject.rooms.indexOf(3) !== -1;

        return this.settingsObject.rooms.indexOf(flat.rooms) !== -1 || (isBig && flat.rooms >= 3) ||
          (isStudio && flat.is_studio === 1);
      })
    }
    return flats; 
  }

  @Emit('update')
  private filterFlats(flats: Flat[]) {
    return this.filterRooms(
      this.filterSquare(
        this.filterPrice(
          this.filterFloor(flats)
        )
      )
    );  
  }

  private mounted() {
    this.updateSettingsObject();
    this.filterFlats(this.flats);
  }
}