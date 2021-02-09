import { Getters } from "vuex-smart-module";                                                                                                                                  
import { Flat } from "@/interfaces/entities/realEstate/types";
import RealEstateState from "./state"; 

export default class RealEstateGetters extends Getters<RealEstateState> {
  public getFlats():  Flat[] {
    return this.state.flats;
  }
}