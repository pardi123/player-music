import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {

            light: {
                primary: '#7576A6',
                secondary: '#d1dce1',
                accent: '#8c9eff',
                error: '#b71c1c',
                btn: '#6E42E9',
            },
        },
    },

});