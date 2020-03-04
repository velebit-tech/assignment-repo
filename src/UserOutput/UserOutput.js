import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>This is the first paragraph. {props.username} is the owner of this paragraph.</p>
      <p>This is the second paragraph. We can change content of this paragraph.</p>
    </div>
  );
}

export default UserOutput;
