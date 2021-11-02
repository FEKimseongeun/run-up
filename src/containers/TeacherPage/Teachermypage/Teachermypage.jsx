import React from 'react'
import AuthForm from '../../../components/AuthForm/AuthForm'
import Block from '../../../components/Block/Block'
import {Avatar, Image, Input} from 'antd';
import { UserOutlined } from '@ant-design/icons';



function Teachermypage() {
    return (
        <div>
            <Block>
                <Avatar size={100} src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 100}} />} />
            </Block>
        </div>
    )
}

export default Teachermypage
