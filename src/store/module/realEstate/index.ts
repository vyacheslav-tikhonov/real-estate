import { Module } from 'vuex-smart-module';
import RealEstateState from './state';
import RealEstateGetters from './getters';
import RealEstateMutations from './mutations';
import RealEstateActions from './actions';

export const realEstate = new Module({
  state: RealEstateState,
  getters: RealEstateGetters,
  mutations: RealEstateMutations,
  actions: RealEstateActions,
  namespaced: true,
});