import { Module } from 'vuex-smart-module';
import { realEstate } from './realEstate';

const root = new Module({
  modules: {
    realEstate
  },
});

export default root;