import React from 'react';
import { Form, Input, Button } from 'antd';
import PicturesWall from './Upload';
class ChangeFrom extends React.Component {
    render(){
        const FormItem = Form.Item;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return(
            <Form>
                <FormItem
                    {...formItemLayout}
                    label="上传文件名称"
                >                    
                    <Input />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="上传/修改日期"
                >
                    <Input />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="上传图片"
                >
                    <PicturesWall />
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">提交修改</Button>
                </FormItem>
            </Form>
        )
    }
}

export default ChangeFrom;