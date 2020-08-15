import React, { useRef, useEffect} from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current 

    if(div) {
      div.scrollTop = div.scrollHeight
    }

  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author='Gustavo Emanuel'
          data='15/08/2020'
          content='Discord Clone'
        />
        <ChannelMessage
          author='Gustavo Emanuel'
          data='15/08/2020'
          content='Discord Clone'
        />
        <ChannelMessage
          author='Gustavo Emanuel'
          data='15/08/2020'
          content='Discord Clone'
        />
        <ChannelMessage
          author='Gustavo Emanuel'
          data='15/08/2020'
          content='Discord Clone'
        /><ChannelMessage
          author='Gustavo Emanuel'
          data='15/08/2020'
          content='Discord Clone'
        />
        <ChannelMessage
          author='Gustavo Emanuel'
          data='15/08/2020'
          content='Discord Clone'
        />
        <ChannelMessage
          author='Gustavo Emanuel'
          data='15/08/2020'
          content='Discord Clone'
        />
        <ChannelMessage
          author='Gustavo Emanuel'
          data='15/08/2020'
          content='Discord Clone'
        />
        <ChannelMessage
          author='Gustavo Emanuel'
          data='15/08/2020'
          content='Discord Clone'
        />
        <ChannelMessage
          author='Gustavo Emanuel'
          data='15/08/2020'
          content='Discord Clone'
        />
        <ChannelMessage
          author='Gustavo Emanuel'
          data='15/08/2020'
          content='Discord Clone'
        />


        <ChannelMessage
          author='Marcos Antônio'
          data='15/08/2020'
          content={
            <>
              <Mention>@Gustavo Emanuel</Mention>, Vamos Jogar?
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type='text' placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;