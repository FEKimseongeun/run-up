import React from "react";
import Td from './Td';

const Tr =({info, handleRemove}) => {
    return (
        <tbody >
        {
            info.map(item => {
                return (
                    <Td key ={item.id} item ={item} handleRemove={handleRemove} />
                )
            })
        }
        </tbody>
    )
}

export default Tr;