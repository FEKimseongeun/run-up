import React, { useState,  useEffect, useRef }  from "react"; 
import ReactDOM from "react-dom";
import { Link} from "react-router-dom";
import { Space, Button,Cascader, Tabs,Table, Input, InputNumber, Popconfirm, Form, Typography   } from 'antd';
import 'antd/dist/antd.css';
import Block from "../../../components/Block/Block"
import addClass from "../../../img/addClass.png";
import Tr from "./Tr";
import axios from "axios";

const { Title } = Typography;
const { TabPane } = Tabs;
// const originData = [];
const options = [
  {
    value: '가나다',
    label: '가나다',
    children: [
      {
        value: '출석',
        label: '출석',
      },
      {
          value: '지각',
          label: '지각',
      },
      {
        value: '결석',
        label: '결석',
      },
    ],
  },
];
function onChange(value) {
  console.log(value);
}

// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     quiz: `${i}+1은?`,
//     answer: `${i}`
//   });
// }


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`
            }
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
function Detailclass(props) {
  const [info, setInfo]=useState([]);
  const [state,setState] =useState('');
  const [modalOn, setModalOn] = useState(false);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);




  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      axios.get("https://runuptoolcloud22.paas-ta.org/quiz/getQuizAll/1" ,{
        header: {
          "Content-Type": `application/json`,
          'Authorization':localStorage.getItem('JWT')
        },
        widthCredentials: true,
      })
          .then(res =>{
            setInfo(res.data)
            console.log(JSON.stringify(res.data))
          })
          .catch(ex=>{
            console.log(" requset fail : " + ex);
          })
          .finally(()=>{console.log("login request end")}
              //document.location.href = `/teacher/class-list`}
          );
    }catch(e){
      console.log(e);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  const att_name=new Array(20)

  const originData = [
    {
      key: "0",
      quiz: `1+1은?`,
      answer: `2`
    },
    {
      key: "1",
      quiz: `1+1은?`,
      answer: `2`
    }
  ];

  const [form] = Form.useForm();
  const [data, setData] = useState(info);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.q_no === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      q_ques: "",
      q_ans: "",
      ...record
    });
    setEditingKey(record.q_no);
  };

  const cancel = () => {
    setEditingKey("");
  };


  const save = async (q_no) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => q_no === item.q_no);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };


  const columns = [
    {
      title: "문제",
      dataIndex: "q_ques",
      width: "25%",
      editable: true
    },
    {
      title: "답",
      dataIndex: "q_ans",
      width: "40%",
      editable: true
    },
    {
      title: "변경",
      dataIndex: "operation",
      render: (_, record) => {
        
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.q_no)}
              style={{
                marginRight: 8
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            수정
          </Typography.Link>
        );
      }
    },
    {
      title: "삭제",
      dataIndex: 'operation',
      render: (_, record) => {
        
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.q_no)}>
              <a>Delete</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.q_no)}>
              <a>Delete</a>
            </Popconfirm>
          </span>
        );
      }
      },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });

  return (
      <Block>
    <div>
      <div style={{ margin: "0.5rem auto", marginBottom:"2rem" }}>
        <a href="/teacher/class-list">
          <Button type="primary">목록으로 가기</Button>
        </a>
      </div>
      <img className="add-class" src={addClass} style={{ float: 'left', width:'50px'}}/>
      <Title >도덕 3반 </Title>
      <hr></hr>
      <div style={{ textAlign: "left", marginBottom: "5px", display:"flex" , flexDirection: 'row',justifyContent: 'space-between'}}>
            <table>
            <td>{props.classtitle}</td></table>
            <Link to ='/teacher/invite'>
              <Button>학생 초대</Button>
            </Link>
          </div>
          <Tabs defaultActiveKey="2">
          <TabPane
            tab={
              <span>
                출석
              </span>
            }
            key="1"
          >
              <div className="att">
              <Space size={[8, 16]} wrap>
                {att_name.fill(null).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Cascader options={options} onChange={onChange} placeholder="가나다" />
                ))}
                </Space>
              </div>
          <div style={{ margin: "2rem auto" }}>{props.handleComment}</div>
          <div style={{ margin: "2rem auto" }}>
            <Link to={`/edit/${props.id}?isForEdit=true`}>
              <Button type="primary">수정</Button>
            </Link>
          </div>
          <div style={{ margin: "auto" }}>
            <Button onClick={props.handleDeleteClick}>삭제</Button>
          </div>
          </TabPane>
          <TabPane
      tab={
        <span>
          퀴즈
        </span>
      }
      key="2"
    >
      <div>
          <Link to={`/teacher/add-quiz`}>
            <Button type="primary" style={{ float: 'left', marginBottom:'10px'}}>퀴즈추가</Button>
          </Link>
        </div>
            <div style={{marginTop:'2rem'}}>
              {/*<table>*/}
              {/*  <thead style={{justifyContent:"space-between"}}>*/}
              {/*  <tr>*/}
              {/*    <th>문제</th>*/}
              {/*    <th>수업시간</th>*/}
              {/*  </tr>*/}
              {/*  </thead>*/}
              {/*  <Tr info={info} handleRemove={handleRemove} />*/}
              {/*</table>*/}
            <Form form={form} component={false}>
              <Table
                  components={{
                    body: {
                      cell: EditableCell
                    }
                  }}
                  bordered
                  dataSource={data}
                  columns={mergedColumns}
                  rowClassName="editable-row"
                  pagination={{
                    onChange: cancel
                  }}
              />
            </Form>
            </div>
    </TabPane>
      </Tabs>
    </div>
    </Block>
  );
}



export default Detailclass;
