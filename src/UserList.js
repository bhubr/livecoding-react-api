import React from 'react';

const UserList = props => (
  <div>
    {
      props.users.map(
        user => (
          <div key={user.login}>
            {user.login}
          </div>
        )
      )
    }
  </div>
);

export default UserList;