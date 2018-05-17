import React, { Component } from 'react'
import Form from 'react-vanilla-form'
import { Input
  ,
  Form as FormAnt,
  Row,
  Col,
  Button,
} from 'antd';
import FormInput from './FormInput'

const FormItem = FormAnt.Item;


export default class ProductoForm extends Component {
  render = () => {
    return (
    <Form
      onChange={(data) => console.log(data)}
      onSubmit={(data) => console.log(data)}
    >
      <Row>
        <Col span={12}>
          <FormItem label="Nome">
            <Input placeholder="nome do produto" name="name" />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormInput label="Input Test" name="Windows"/>
        </Col>
      </Row>
      <Row>
        <Col offset={20}>
          <Button type="primary" htmlType="submit">Criar Produto</Button>
        </Col>
      </Row>
    </Form>)
  }
}