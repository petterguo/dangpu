import React from 'react'
import { List, Icon, Button } from 'antd';
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

class Admin extends React.Component {
    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                        <div>
                            <a href="#"><Button type="primary">修改</Button></a>
                            <a href="#"><Button type="danger">删除</Button></a>
                        </div>
                    </List.Item>
                )}
            />
        )
    }
}

export default Admin;