import React, { useState } from "react";
import { Form, Input, Modal, Button } from "antd";
import { Add_Movies } from "../js/actions";
import { useDispatch } from "react-redux";
const AddMovie = () => {
  const dispatch = useDispatch();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(Add_Movies({ title, description, rate }));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Movie{" "}
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form {...layout} name="basic" />
        <Form.Item {...tailLayout} label="Title" name="title">
          <Input onChange={(e) => setTitle(e.target.value)} />{" "}
        </Form.Item>
        <Form.Item {...tailLayout} label="Description" name="Description">
          <Input onChange={(e) => setDescription(e.target.value)} />{" "}
        </Form.Item>
        <Form.Item
          onChange={(e) => setRate(e.target.value)}
          {...tailLayout}
          label="rate"
          name="rate"
        >
          <Input />{" "}
        </Form.Item>
      </Modal>
    </>
  );
};

export default AddMovie;
