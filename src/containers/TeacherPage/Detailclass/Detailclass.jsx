import React, { useState,  useEffect, useRef }  from "react"; 
import ReactDOM from "react-dom";
import { Link} from "react-router-dom";
import { Space, Button,Cascader, Tabs,Table, Input, InputNumber, Popconfirm, Form, Typography   } from 'antd';
import 'antd/dist/antd.css';
import Block from "../../../components/Block/Block"
import addClass from "../../../img/addClass.png";

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
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      quiz: "",
      answer: "",
      ...record
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };


  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

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
      dataIndex: "quiz",
      width: "25%",
      editable: true
    },
    {
      title: "답",
      dataIndex: "answer",
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
              onClick={() => save(record.key)}
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
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
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
        <a href="/teacher">
          <Button type="primary">목록으로 가기</Button>
        </a>
      </div>
      <img className="add-class" src={addClass} style={{ float: 'left', width:'50px'}}/>
      <Title >도덕 3반 </Title>
      <hr></hr>
      <div style={{ textAlign: "left", marginBottom: "5px", display:"flex" , flexDirection: 'row',justifyContent: 'space-between'}}>
            <table>
            <td>{props.classtitle}</td></table>
            <Link to ='/inviteStudent'>
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
                {new Array(20).fill(null).map((_, index) => (
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
          <Link to={`/add-quiz`}>
            <Button type="primary" style={{ float: 'left', marginBottom:'10px'}}>퀴즈추가</Button>
          </Link>
        </div>
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
    </TabPane>
      </Tabs>
    </div>
    </Block>
  );
}



export default Detailclass;
