import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import channelsApi from '~/services/channelsApi';

import Img from '~/components/Img';

import Header from '~/components/Header';

import {
  Wrapper,
  Content,
  Dashboard,
  Media,
  MediaAccountBound,
  HelperContainer,
} from './styles';

export default function Home() {
  const channelsSelectedHistory = useSelector(state => state.channel.list);

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const response = channelsApi.map(channel => ({
      ...channel,
      accountBound: channelsSelectedHistory.find(
        store => store.channel_key === channel.channel_key
      ),
    }));
    setChannels(response);
  }, [channelsSelectedHistory]);

  return (
    <Wrapper>
      <Content>
        <Header />

        <Dashboard>
          {channels.map(channel => {
            return channel.accountBound ? (
              <MediaAccountBound
                key={channel.channel_key}
                backgroundColor={channel.backgroundColor}>
                <Link to={`/channel/${channel.channel_key}`}>
                  <strong>{channel.accountBound.name}</strong>
                  <Img channel_key={channel.channel_key} />
                </Link>
              </MediaAccountBound>
            ) : (
              <Media key={channel.channel_key} helper>
                <HelperContainer>
                  <button type="button">?</button>
                </HelperContainer>

                <Img channel_key={channel.channel_key} />
                <span>{channel.description}</span>
                <Link to={`/channel/${channel.channel_key}`}>Adicionar</Link>
              </Media>
            );
          })}
        </Dashboard>
      </Content>
    </Wrapper>
  );
}
