export function addChannelRequest(channel) {
  return {
    type: '@channel/ADD_CHANNEL_REQUEST',
    payload: channel,
  };
}

export function addChannelSuccess(channel) {
  return {
    type: '@channel/ADD_CHANNEL_SUCCESS',
    payload: channel,
  };
}
