import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import FlatCard from '@/components/ui/FlatCard/FlatCard.vue';
import { Flat } from '@/interfaces/entities/realEstate/types';

const realEstateStore = namespace('realEstate');

@Component({
  components: { FlatCard }
})
export default class Flats extends Vue {
  @realEstateStore.Action('getFlats') private setFlats!: () => void;
  @realEstateStore.Getter('flats') private readonly flats!: Flat[];

  private mounted() {
    this.setFlats();
  }
}
