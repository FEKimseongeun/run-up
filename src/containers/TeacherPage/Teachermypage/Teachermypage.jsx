import React from 'react'
import AuthForm from '../../../components/AuthForm/AuthForm'
import Block from '../../../components/Block/Block'
import {Avatar, Image, Typography, Input} from 'antd';
import setting from "../../../img/Setting.png";
import "./Teachermypage.scss";

const { Title } = Typography;

function Teachermypage() {
    return (
        <div>
            <Block>
                <div style={{marginBottom:20}}>
                    <img className="setting" src={setting} style={{ float: 'left', width:'40px', marginRight:'10px'}}/>
                    <div className="setting-title">설정</div>
                    <hr></hr>
                    <div className="profile-body">
                        <Avatar size={200} src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 200}} />} />
                        <h1>홍길동 선생님</h1>
                    </div>
                </div>


                <div className="body-text" style={{textAlign:'center'}}>
                    <h4>
                        이름:<span>홍길동</span>
                    </h4>
                    <h4>
                        Email: <span>sk123@gmail.com</span>
                    </h4>
                    <h4>
                        소속학교: <span>상명초등학교</span>
                    </h4>
                    <h4>
                        전화번호: <span>9823992010</span>
                    </h4>
                </div>
            </Block>
        </div>
    )
}

export default Teachermypage
