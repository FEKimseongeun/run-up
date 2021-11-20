import React from "react";
import { Link} from "react-router-dom";
const Td =({item,handleRemove}) =>{
    const onRemove = () =>{
        handleRemove(item.id)
    }

    return (
        <>
            <tr>
                <td>{item.c_name}</td>
                <td>{item.c_time}</td>
                <Link to={`/teacher/detail-class/${item.c_name}`}>
                    <td >상세정보</td>
                </Link>
                    <td onClick={onRemove}>삭제</td>

            </tr>
        </>
    )
}

export default Td;