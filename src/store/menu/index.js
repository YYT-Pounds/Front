const actions = {};
const mutations = {
    SET_COLLAPSE(state){
        state.isCollapse = !state.isCollapse;
    }
};
const state = {
    isCollapse:false,
};

export default {
    actions,mutations,state
}
