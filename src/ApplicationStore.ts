import Vue from 'vue';
import Vuex from 'vuex';
import CardStore from './components/card/CardStore';
import ServicesStore from './components/services/ServicesStore';
import SocialStore from './components/social/SocialStore';
import ActivityStore from './components/activity/ActivityStore';
import TimelineStore from './components/timeline/TimelineStore';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    modules: {
        CardStore,
        ServicesStore,
        SocialStore,
        ActivityStore,
        TimelineStore
    }
  })

export default store;