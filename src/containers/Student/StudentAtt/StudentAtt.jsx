import React, { useState } from 'react';
import attImg from "../../../img/modal.png"
import Block from "../../../components/Block/Block";
import list from "../../../img/book.png";
import "antd/dist/antd.css";
import {
    Modal,
    Table,
    Space,
    Button,
    Typography,
} from "antd";
import {Link} from "react-router-dom";
const { Title } = Typography;
const state = {
    loading: false,
    visible: false,
};

function StudentAtt() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return(
        <div>
            <Block>
                <Title>도덕</Title>
                <h3>월 | 오전 11시 ~ 오후 1시 / 화 | 오전 10시 ~ 오후 12시</h3>
                <div style={{margin:"4rem auto"}}>
                    <img className="att-img" src={attImg} style={{marginLeft:"4rem", width:"400px"}}/>
                        <Button onClick={showModal} type="default" shape="round" size="large" style={{width:"500px", height:"100px" ,backgroundColor:"#F2AA55", color:"white", marginLeft : "4rem", fontSize:"34px"}}>출석하기</Button>
                    {/*<Modal*/}
                    {/*    visible={visible}*/}
                    {/*    title="Title"*/}
                    {/*    onOk={handleOk}*/}
                    {/*    onCancel={handleCancel}*/}
                    {/*>*/}
                    {/*    <p>Some contents...</p>*/}
                    {/*    <p>Some contents...</p>*/}
                    {/*    <p>Some contents...</p>*/}
                    {/*    <p>Some contents...</p>*/}
                    {/*    <p>Some contents...</p>*/}
                    {/*</Modal>*/}
                    <Modal title="출석 완료" visible={isModalVisible} onOk={handleOk}
                           width={1000}
                           footer={[
                               <Button
                                   type="primary"
                                   onClick={handleCancel}
                               >
                                   Cancel
                               </Button>,
                               <Button
                                   key="link"
                                   href="/student/quiz-stu"
                                   type="primary"
                                   onClick={handleOk}
                               >
                                   퀴즈풀러가기
                               </Button>,
                           ]}
                           style={{}}>
                        <p>출석 하였습니다.</p>
                    </Modal>
                </div>
            </Block>
        </div>
    );
}

export default StudentAtt;