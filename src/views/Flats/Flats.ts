import { Component, Vue, Ref} from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import FlatCard from '@/components/ui/FlatCard/FlatCard.vue';
import { Flat } from '@/interfaces/entities/realEstate/types';
import FlatsFilter from '@/components/FlatsFilter/FlatsFilter.vue';
import { FlatsFilterSettins, FlatsFilterInterface } from '@/components/FlatsFilter/types';

const realEstateStore = namespace('realEstate');

@Component({
  components: { FlatCard, FlatsFilter }
})
export default class Flats extends Vue {
  @realEstateStore.Action('getFlats') private setFlats!: () => void;
  @realEstateStore.Getter('flats') private readonly flats!: Flat[];

  @Ref('flatsFilter') private readonly filter!: FlatsFilterInterface;

  private filterSettings: FlatsFilterSettins = this.filter.getSettings();

  private onFilterUpdate(data: FlatsFilterSettins) {
    this.filterSettings = data;
  }

  private mounted() {
    this.setFlats();
  }
}
