import * as React from 'react';
import './index.less';

export interface IProfileProps {
}

export default class Profile extends React.Component<IProfileProps> {
  public render() {
    return (
      <div className='profile-wrapper'>
        Profile
      </div>
    );
  }
}
