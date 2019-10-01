import produce from 'immer';

const INITIAL_STATE = {
  list: [],
  loading: false,
};

export default function channel(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@channel/ADD_CHANNEL_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@channel/ADD_CHANNEL_SUCCESS': {
        const { payload } = action;

        const channelIndex = draft.list.findIndex(
          c => c.channel_key === payload.channel_key
        );

        if (channelIndex >= 0) {
          draft.list[channelIndex].id = payload.id;
          draft.list[channelIndex].name = payload.name;
          draft.list[channelIndex].url = payload.url;
          draft.list[channelIndex].picture = payload.picture;
        } else {
          draft.list.push(payload);
        }
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
