import Vue from "vue";

export const state = () => ({
  queue: [
    // ordered array of {id,state}; dashboard & sidebar order, order of execution.
    //   we need both the id and the state for the sidebar/dashboard to update with changing states
    // todo: apparently there's something I'm not getting...
  ]
});

export const mutations = {
  addToQueue(state, { id, id_state }) {
    console.log(`Adding ${id} @ ${id_state} to queue`);
    state.queue = [...state.queue, { id: id, state: id_state }];
    console.log(state.queue);
  },
  _updateState(state, { index, id_state }) {
    console.log(`Updating state of ${index} to ${id_state}`);
    console.log(state);
    state.queue[index] = { id: state.queue[index].id, id_state: id_state };
  },
  _dropFromQueue(state, { index }) {
    Vue.set(state, "queue", state.queue.splice(index, 1)); // todo: probably wrong
  },
  clearQueue(state) {
    state.queue = [];
  },
  setQueue(state, { queue }) {
    state.queue = queue;
  }
};

export const getters = {
  getQueue: state => {
    return state.queue;
  },
  getQueueIds: state => {
    let q = [];
    for (let i = 0; i < state.queue.length; i++) {
      q = [...q, state.queue[i].id];
    }
    return q;
  },
  getIndex: state => id => {
    console.log(`Trying to get index of ${id}...`);
    console.log(state.queue);
    for (let i = 0; i < state.queue.length; i++) {
      if (state.queue[i].id === id) {
        return i;
      }
    }
  }
};

export const actions = {
  updateState({ getters, commit }, payload) {
    console.log("Trying to update state");
    console.log(payload);
    commit("_updateState", {
      index: getters.getIndex(payload.id),
      id_state: payload.id_state
    });
  },
  dropFromQueue({ getters, commit }, payload) {
    console.log("Trying to drop from queue");
    console.log(payload);
    commit("_dropFromQueue", {
      index: getters.getIndex(payload.id)
    });
  }
};
