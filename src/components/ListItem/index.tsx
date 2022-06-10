import * as C from './styles';
import {Item} from '../../types/item'
import { useState } from 'react';
type Props = {
    item: Item 
}

export const ListItem = ({item}: Props) =>{
    const [isCheckd, setIsCheckd] = useState(item.done);
    return(
        <C.Container done={isCheckd}>
           <input
            type="checkbox"
            checked={isCheckd} 
            onChange={e => setIsCheckd(e.target.checked)}
            />
           <label htmlFor="">{item.name}</label>
        </C.Container>
    );
}