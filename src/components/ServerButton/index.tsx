import React from 'react';

import rocket from '../../assets/rocket.svg';

import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
  return (
      <Button
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected ? 'active' : ''}
      >
          {isHome && <img src={rocket} alt='Logo'/>}
      </Button>
  );
}

export default ServerButton;