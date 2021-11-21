import React from "react";
import { Link} from "react-router-dom";
const Td =({item,handleRemove}) =>{
    const onRemove = () =>{
        handleRemove(item.id)
    }

    return (
        <>
            <tr style={{border:'solid 1px #F6AD55', padding:'5px' , fontSize:'20px',}}>
                <td style={{padding:'5px', width:'170px'}}>{item.q_no}</td>
                <td style={{padding:'5px', width:'170px'}}>{item.q_ques}</td>
                <td style={{padding:'5px', width:'170px'}}>{item.q_ans}</td>
                    <td onClick={onRemove}>삭제</td>

            </tr>
        </>
    )
}

export default Td;