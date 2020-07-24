import React, { ReactElement, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { changeUser } from '../store/reducers/userReducer';

interface Props {
    
}

function User({}: Props): ReactElement {

    const user = useSelector((state: RootState) => state.user.value);

    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    return (
        <div>
            user
            <hr/>
            <div>Usuario é: {user}</div>
            <input type="text" value={input} onChange={(e) =>  setInput(e.target.value)}/>
            <button onClick={() => dispatch(changeUser({value: input, token: 'PORRA'}))}>
                Trocar usuario
            </button>
        </div>
    )
}

export default User
