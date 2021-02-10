import React, {useEffect} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions';
import Preloader from './Preloader/Preloader';

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);
    const {getUsers} = useActions();

    useEffect(() => {
        getUsers();
    }, [])

    if (loading) {
        return  <Preloader/>
    }

    if (error) {
        return <h2>  {error} </h2>
    }

    return (
        <div>
            <ol>
                {users.map(user => {
                    return <li key={user.id}>{user.name}</li>
                    
                })}
            </ol>
        </div>
    )
}

export default UserList
