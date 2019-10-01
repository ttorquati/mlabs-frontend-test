import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSpinner, FaTimes, FaLongArrowAltRight } from 'react-icons/fa';

import api from '~/services/api';
import channelsApi from '~/services/channelsApi';
import Img from '~/components/Img';
import BoundProgress from '~/components/BoundProgress';

import { addChannelRequest } from '~/store/modules/channel/actions';

import {
  Wrapper,
  Container,
  ModalHeader,
  Form,
  SubmitSection,
  Profile,
  ProfileList,
  Scroll,
  PageSearch,
  Loading,
} from './styles';

export default function Channel({ match }) {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.channel.loading);
  const channelsSelectedHistory = useSelector(state => state.channel.list);

  const [channels, setChannels] = useState([]);
  const [channelSelected, setChannelSelected] = useState('');
  const [loadingChannels, setLoadingChannels] = useState(false);
  const [channelDescription, setChannelDescription] = useState('');

  const { channel_key } = match.params;

  useEffect(() => {
    async function loadChannels() {
      setLoadingChannels(true);
      const response = await api.get('https://demo2697181.mockable.io/pages');

      setChannels(
        response.data.data.filter(
          channel => channel.channel_key === channel_key
        )
      );
      setLoadingChannels(false);
    }

    loadChannels();

    const channelStored = channelsSelectedHistory.find(
      c => c.channel_key === channel_key
    );

    if (channelStored) {
      setChannelSelected(channelStored.id);
    }
  }, [channel_key, channelsSelectedHistory]);

  useEffect(() => {
    const response = channelsApi.find(
      channel => channel.channel_key === channel_key
    );
    setChannelDescription(response.description);
  }, [channel_key]);

  function handleSubmit(e) {
    e.preventDefault();
    const channel = channels.find(c => c.id === channelSelected);
    dispatch(addChannelRequest(channel));
  }

  return (
    <Wrapper>
      <Container>
        <ModalHeader>
          <div>
            <Img channel_key={channel_key} />

            <strong>
              Vincular página do <span>{channelDescription}</span>
            </strong>
          </div>
          <Link to="/">
            <FaTimes size={18} color="#535353" />
          </Link>
        </ModalHeader>

        <Form onSubmit={handleSubmit}>
          <BoundProgress />

          <strong>
            Selecione a página que você deseja vincular a este perfil
          </strong>

          {loadingChannels ? (
            <Loading>
              <FaSpinner size={26} color="#de2e4d" />
            </Loading>
          ) : (
            <ProfileList>
              <Scroll>
                {channels.map(channel => (
                  <Profile key={channel.id}>
                    <div>
                      <img src={channel.picture} alt={channel.name} />
                      <div>
                        <strong>{channel.name}</strong>
                        <Link to={channel.url}>{channel.url}</Link>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="channel_opt"
                      value={channel.id}
                      checked={channelSelected === channel.id}
                      onChange={() => setChannelSelected(channel.id)}
                    />
                  </Profile>
                ))}
              </Scroll>
            </ProfileList>
          )}
          <PageSearch>
            <strong>Não encontrou sua página?</strong>
            <Link to="/">
              Clique aqui para atualizar suas permissões do Facebook
            </Link>
          </PageSearch>

          <SubmitSection>
            <Link to="/">VOLTAR</Link>
            <button type="submit">
              {loading ? (
                <FaSpinner size={18} color="#fff" />
              ) : (
                <>
                  PRÓXIMO <FaLongArrowAltRight size={18} color="#fff" />
                </>
              )}
            </button>
          </SubmitSection>
        </Form>
      </Container>
    </Wrapper>
  );
}
