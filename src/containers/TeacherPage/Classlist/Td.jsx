import React from "react";
import { Link} from "react-router-dom";
const Td =({item,handleRemove}) =>{
    const onRemove = () =>{
        handleRemove(item.id)
    }

    return (
        <>
            <tr style={{border:'solid 1px #F6AD55', padding:'5px' , fontSize:'20px',}}>
                <td style={{padding:'5px', width:'170px'}}>{item.c_name}</td>
                <td style={{padding:'5px', width:'170px'}}>{item.c_time}</td>
                <Link to={`/teacher/detail-class/${item.c_name}`}>
                    <td style={{padding:'5px', width:'170px'}}>수업 상세</td>
                </Link>
                    <td onClick={onRemove} style={{padding:'5px', width:'170px'}}>삭제</td>

            </tr>
        </>
    )
}

export default Td;