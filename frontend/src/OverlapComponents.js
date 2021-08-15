import React from 'react';

class OverlapComponents extends React.Component {

  render() {
    return (
      <div className="overlap-container">
      { 
        this.props.children.map ( child =>
          <div className="overlap-item">
            {child}
          </div>
        )
      }
      </div>
    );
  }
}

export { OverlapComponents };
