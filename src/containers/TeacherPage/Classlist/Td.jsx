import React from "react";

const Td =({item,handleRemove, handleEdit}) =>{
    const onRemove = () =>{
        handleRemove(item.id)
    }
    const onEdit = ()=>{
        handleEdit(item);
    }

    return (
        <>
            <tr>
                <td>{item.c_name}</td>
                <td>{item.c_time}</td>
                <td onClick={onEdit}>수정</td>
                <td onClick={onRemove}>삭제</td>
            </tr>
        </>
    )
}

export default Td;