import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import Block from "../../../components/Block/Block"
import "antd/dist/antd.css";
import "./Classlist.scss";
import classList from '../../../img/classList.png';
import {
  Table,
  Form,
  Input,
  Space,
  Button,
  DatePicker,
  Popconfirm,
  Typography,
  Select,
  TimePicker
} from "antd";
import moment from "moment";
const { Title } = Typography;
const EditableContext = React.createContext(null);

const RULES_INPUT = [
  { required: true, message: "Falta rellenar la caja de texto" }
];
const format = 'HH:mm';
const RULES_DATE_PICKER = [
  { type: "object", required: true, message: "Selecciona la fecha" }
];

const options = [{ value: '월요일' }, { value: '화요일' }, { value: '수요일' }, { value: '목요일' },{ value: '금요일' },{ value: '토요일' },{ value: '일요일' }];

const columns = [
  {
    title: "반",
    dataIndex: "class",
    editable: true
  },
  {
    title: "수업명",
    dataIndex: "name",
    editable: true
  },
  {
    title: "시간",
    dataIndex: "time",
    type:"time",
    editable: true
  },
  {
    title: "요일",
    dataIndex: "date",
    type: "date",
    editable: true
  },
  {
    title: "수정",
    dataIndex: "operation",
    isAction: true
  }
];

const dummyData = [
  {
    key: "0",
    class: "3반",
    name: "수학",
    time: "11~1시",
    date: "",
  },
  {
    key: "1",
    class: "3반",
    name: "도덕",
    time: "3시~5시",
    date: "",
  }
];

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  isAction,
  children,
  dataIndex,
  isExistData,
  record,
  handleSave,
  handleDelete,
  type,
  ...restProps
}) => {
  const form = useContext(EditableContext);

  const save = async () => {
    try {
      await form.validateFields();
      const values = await form.getFieldsValue();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode;

  if (isAction) {
    childNode = (
        
      <Space>
          <Link to="/teacher/detail-class">
            <Button type="text" style={{ float: 'right'}}>출석/퀴즈</Button>
          </Link>
        {isExistData ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null}
      </Space>
    );
  }

  if (editable) {
    switch (type) {
        case "time":
            childNode = (
            <Form.Item
                name={dataIndex}
            >
                <TimePicker defaultValue={moment('12:08', format)} format={format} />
                <TimePicker defaultValue={moment('12:08', format)} format={format} />

            </Form.Item>
            );
            break;
        case "date":
            childNode = (
            <Form.Item
                name={dataIndex}
            >
                <Select
                placeholder="Please select"
                mode="multiple"
                defaultValue={['월요일', '수요일']}
                options={options}
                ></Select>
                
            </Form.Item>
            );
        break;
      default:
        childNode = (
             
          <Form.Item
            name={dataIndex}
            rules={RULES_INPUT}
            style={{ margin: 0 }}
            initialValue={record[dataIndex]}
          >
            <Input type="text" placeholder="입력" />
          </Form.Item>

        );
        break;
    }
  }
  return <td {...restProps}>{childNode}</td>;
};

const Classlist= () => {
  const [count, setCount] = useState(0);
  const [dataSource, setDataSource] = useState(dummyData);

  const handleDelete = (key) => {
    const data = [...dataSource];
    setDataSource(data.filter((item) => item.key !== key));
  };

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell
    }
  };

  const columnsData = columns.map((col) => {
    if (col.isAction) {
      return {
        ...col,
        onCell: (record) => ({
          record,
          title: col.title,
          isAction: col.isAction,
          dataIndex: col.dataIndex,
          handleDelete: handleDelete,
          handleSave: handleSave,
          isExistData: dataSource.length >= 1
        })
      };
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        title: col.title,
        editable: col.editable,
        dataIndex: col.dataIndex,
        handleSave: handleSave,
        type: col?.type || "input"
      })
    };
  });

  return (
    <div>
    <Block>
        <div>
          <Link to="/teacher/add-class">
            <Button type="primary" style={{ float: 'right'}}>수업추가</Button>
          </Link>
        </div>
          <img className="class-list" src={classList} style={{ float: 'left'}}/>
          <Title >수업리스트</Title>
      <hr></hr>
      <div style={{marginTop:'2rem'}}>
        <Table
            bordered
            components={components}
            rowClassName={() => "editable-row"}
            dataSource={dataSource}
            columns={columnsData}
        /></div>
    </Block>
    </div>

  );

}
export default Classlist;