import { Mutations } from 'vuex-smart-module';
import RealEstateState from './state';
import { Flat } from "@/interfaces/entities/realEstate/types";

export default class RealEstateMutations extends Mutations<RealEstateState> {
  public setFlats(flats: Flat[]) {
    this.state.flats = flats;
  }
}
