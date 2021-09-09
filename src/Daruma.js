import { ReactComponent as DarumaVector } from './daruma.svg';
import React from 'react';
import { OverlapComponents } from './OverlapComponents.js';

class Daruma extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dancing-daruma">
        <OverlapComponents>
          <div className="center-children-horizontal">
            <DarumaVector
                fill="crimson"
                alt="The selected daruma goal"
                width="200px" /></div>
          <div className="center-children-vertical">
            <img className="daruma-left-eye"
                alt="left eye"
                src={this.props.leftEye}
                width="100px" />
          </div>
        </OverlapComponents>
      </div>
    );
  }

}

export { Daruma };
