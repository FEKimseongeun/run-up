import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, Typography} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Block from "../../../components/Block/Block";
import invite from "../../../img/invite.png";
const { Title } = Typography;

function InviteStudent() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    return (
        <div>
            <Block>
                <img className="invite" src={invite} style={{ float: 'left', width:'50px'}}/>
                <Title >수업 추가</Title>
                <hr></hr>
            <div
                id="inviteInput"
                style={{
                    height: 400,
                    width: 500,
                    padding: '0 16px',
                    margin:'2rem auto'
                    
                }}
            >
                <div style={{fontSize:'30px'}}>
                    초대할 학생 이메일 입력
                </div>
                    <Input placeholder="이메일 입력" prefix={<UserOutlined />} style={{margin:'1rem auto'}}/>
                    <Input placeholder="이메일 입력" prefix={<UserOutlined />}style={{margin:'1rem auto'}} />
                    <Input placeholder="이메일 입력" prefix={<UserOutlined />} style={{margin:'1rem auto'}}/>

                <div style={{width : 200}}>
                    <Button type="primary" >초대하기</Button></div>
            </div>

            </Block>
        </div>
    )
}

export default InviteStudent;


