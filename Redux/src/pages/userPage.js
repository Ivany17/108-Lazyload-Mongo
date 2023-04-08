import UserForm from 'components/UserForm';
import UsersList from 'components/UsersList';
import React from 'react';

const UserPage = () => {
    return (
        <div>
            <UserForm />
            <hr />
            <UsersList />    
        </div>
    );
}

export default UserPage;
