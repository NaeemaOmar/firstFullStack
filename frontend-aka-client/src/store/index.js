import { createStore } from 'vuex'
import axios from 'axios'


const baseUrl = 'http://localhost:8596'


export default createStore({
  state: {
    productsArray: []
  },
  getters: {
  },
  mutations: {
    setProductsArray(state, theArray){
      state.productsArray = theArray
    }
  },
  actions: {
    async getProductsArray({commit}){
      let {data} = await axios.get(baseUrl + '/products')
      console.log(data);
      commit('setProductsArray', data)
    }
  },
  modules: {
  }
})
