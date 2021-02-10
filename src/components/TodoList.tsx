import React, {useEffect} from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions';
import Preloader from './Preloader/Preloader';

const TodoList: React.FC = () => {
    const {error, todos, loading, limit, page} = useTypedSelector(state => state.todo);
    const {getTodos, setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        getTodos(page, limit);
    }, [page])

    if (loading) {
        return <Preloader/>
    }

    if (error) {
        return <h2> {error} </h2>
    }

    return (
        <div>
            {todos.map(todo => {
                return <div key={todo.id}> {todo.id} - {todo.title}</div>
                
            })}
         
            <div style={{display: 'flex'}}>
                    {pages.map(p => {
                        return <div 
                        onClick={() => setTodoPage(p)}
                        key={p}
                        style={{border: p === page ? '2px solid green' :  '1px solid gray', padding: 10, cursor: 'pointer'}} > 
                            {p} 
                        </div>
                    })}
            </div>
        </div>
    )
}

export default TodoList
