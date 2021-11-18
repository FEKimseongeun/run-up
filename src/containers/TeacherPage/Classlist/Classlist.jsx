import React, {useContext, useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import Block from "../../../components/Block/Block"
import "antd/dist/antd.css";
import "./Classlist.scss";
import classList from '../../../img/classList.png';
import axios from "axios";
import Tr from "./Tr";
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
import API from "../../api"
const { Title } = Typography;
const EditableContext = React.createContext(null);

const RULES_INPUT = [
  { required: true, message: "Falta rellenar la caja de texto" }
];
// const format = 'HH:mm';
// const RULES_DATE_PICKER = [
//   { type: "object", required: true, message: "Selecciona la fecha" }
// ];


const columns = [
  {
    title: "과목/반",
    dataIndex: "c_name",
    editable: true
  },
  {
    title: "수업 날짜/시간",
    dataIndex: "c_time",
    editable: true
  },
  {
    title: "수정",
    dataIndex: "operation",
    isAction: true
  }
];
// const [dataSource, setDataSource] = useState([]);
// const tableApi= async () => {
//   const url = "https://runuptoolmy.paas-ta.org/class/teacher";
//   let data = await axios.get(url)
//       .then(function(response) {
//         setDataSource(response.data);
//         console.log("성공");
//       })
//       .catch(function(error) {
//         console.log("실패");
//       })
//   console.log('data is ' +  JSON.stringify(data));
// }

// const EditableRow = ({ index, ...props }) => {
//   const [form] = Form.useForm();
//
//   return (
//     <Form form={form} component={false}>
//       <EditableContext.Provider value={form}>
//         <tr {...props} />
//       </EditableContext.Provider>
//     </Form>
//   );
// };
//
// const EditableCell = ({
//   title,
//   editable,
//   isAction,
//   children,
//   dataIndex,
//   isExistData,
//   record,
//   handleSave,
//   handleDelete,
//   type,
//   ...restProps
// }) => {
//   const form = useContext(EditableContext);
//
//   let childNode;
//
//   if (isAction) {
//     childNode = (
//       <Space>
//           <Link to="/teacher/detail-class">
//             <Button type="text" style={{ float: 'right'}}>출석/퀴즈</Button>
//           </Link>
//         {isExistData ? (
//           <Popconfirm
//             title="Sure to delete?"
//             onConfirm={() => handleDelete(record.key)}
//           >
//             <a>Delete</a>
//           </Popconfirm>
//         ) : null}
//       </Space>
//     );
//   }
//
//   if (editable) {
//     switch (type) {
//       default:
//         childNode = (
//           <Form.Item
//             name={dataIndex}
//             style={{ margin: 0 }}
//             initialValue={record[dataIndex]}
//           >
//             <Input type="text" placeholder="입력" />
//           </Form.Item>
//         );
//         break;
//     }
//   }
//   return <td {...restProps}>{childNode}</td>;
// };
// const fetchData =()=>{
//   const url ="https://runuptoolmy.paas-ta.org/class/teacher";
//   fetch(url)
//       .then(function(response) {return response.json();})
//       .then(function(myJson) {
//         console.log(JSON.stringify(myJson));
//       });
// }
const Classlist= () => {

  const [info, setInfo]=useState([]);
  const [selected,setSelected] =useState('');
  const [modalOn, setModalOn] = useState(false);

  const nextId=useRef(11);

  useEffect(()=>{
    const {data } = API.get(
        "/class/teacher"
    );
    console.log(data);
    return data;
  },null);


  // const handleDelete = (key) => {
  //   const data = [...dataSource];
  //   setDataSource(data.filter((item) => item.key !== key));
  // };

  const handleSave = (data) => {
    if (data.id) {
      setInfo(
          info.map(row => data.id === row.id ? {
            c_name: data.c_name,
            c_time: data.c_time,
          } : row))
    } else {
      setInfo(info => info.concat(
          {
            c_name: nextId.c_name,
            c_time: nextId.c_time,
          }
      ))
      nextId.current += 1;
    }
  }

    const handleRemove = (id) => {
      setInfo(info => info.filter(item => item.id!==id));
    }

    const handleEdit = (item) =>{
      setModalOn(true);
      const selectedData={
        c_name:item.c_name,
        c_time:item.c_time,
      };
      console.log(selectedData);
      setSelected(selectedData);
    }

    const handleCancel=()=>{
      setModalOn(false);
    }

    const handleEditSubmit=(item) => {
      console.log(item);
      handleSave(item);
      setModalOn(false);
    }
    // const newData = [...info];
    // const index = newData.findIndex((item) => row.key === item.key);
    // const item = newData[index];
    // newData.splice(index, 1, { ...item, ...row });
    // setDataSource(newData);

  // const components = {
  //   body: {
  //     row: EditableRow,
  //     cell: EditableCell
  //   }
  // };
  //
  // const columnsData = columns.map((col) => {
  //   if (col.isAction) {
  //     return {
  //       ...col,
  //       onCell: (record) => ({
  //         record,
  //         title: col.title,
  //         isAction: col.isAction,
  //         dataIndex: col.dataIndex,
  //         handleDelete: handleDelete,
  //         handleSave: handleSave,
  //         isExistData: dataSource.length >= 1
  //       })
  //     };
  //   }
  //
  //   return {
  //     ...col,
  //     onCell: (record) => ({
  //       record,
  //       title: col.title,
  //       editable: col.editable,
  //       dataIndex: col.dataIndex,
  //       handleSave: handleSave,
  //       type: col?.type || "input"
  //     })
  //   };
  // });

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
      {/*<Button type="primary" onClick={tableApi}>새로고침</Button>*/}
      <div style={{marginTop:'2rem'}}>
        <table>
          <thead style={{justifyContent:"space-between"}}>
            <tr>
              <th>과목/반</th>
              <th>수업시간</th>
            </tr>
          </thead>
          <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit}/>
        </table>
      </div>
      {/*  <Table*/}
      {/*      bordered*/}
      {/*      components={components}*/}
      {/*      rowClassName={() => "editable-row"}*/}
      {/*      dataSource={dataSource}*/}
      {/*      columns={columnsData}*/}
      {/*  /></div>*/}
    </Block>
    </div>

  );

}
export default Classlist;