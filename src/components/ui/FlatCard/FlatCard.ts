import { Vue, Component, Prop } from 'vue-property-decorator';
import { Flat } from '@/interfaces/entities/realEstate/types';


@Component({})
export default class FlatCard extends Vue {
  @Prop() private readonly flat!: Flat;

  private isHovered = false;
  private readonly formater = new Intl.NumberFormat('ru-RU', {currency: 'Rub'});

  private readonly square = '2';
  private get flour() {
    return `${this.flat.floor} этаж`;
  }

  private get rooms() {
    const rooms = this.flat.rooms > 1 ? 'комнаты' : 'комната';
    return `${this.flat.rooms} ${rooms}`;
  }

  private get size() {
    return `${this.flat.square}м`
  }

  private get number() {
    return `№${this.flat.number}`;
  }

  private get price() {
    return `${this.formatMoney(this.flat.price)}р.`;
  }

  private get pricePerMeter() {
    return `${this.formatMoney(Math.floor(this.flat.price / this.flat.square))} р. за м`;
  }

  private get getImageUrl() {                                                                                                                                                 
    return require('@/assets/images/plan.jpg');                                                                                                                    
  } 

  private onFocus(focus: boolean) {
    this.isHovered = focus;
  }

  private formatMoney(sum: number) {
    return this.formater.format(sum);
  }
}
