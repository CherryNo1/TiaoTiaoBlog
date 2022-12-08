import React, { useState } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Button, List, Space } from 'antd';
import { Pagination } from 'antd';
import { render } from 'react-dom';
import LocaleProvider from 'antd/es/locale-provider';
const data = Array.from({ length: 23 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi animi ea! Sint nihil accusantium aliquam, hic nesciunt nobis id, culpa, iste voluptatum porro dolor libero? Autem dignissimos minima nemo.',
    content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat veniam saepe molestiae maiores inventore dicta ipsum omnis quasi, quis, aut quo, alias maxime mollitia quae. Assumenda, inventore! Eaque, culpa placeat!',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Artcle: React.FC = () => {
    const [loadingFlag, setLoadingFlag] = useState(false);
    const [more, less] = useState('加载更多');
    const simulationLoading = () => {
        setLoadingFlag(!loadingFlag)
        if (more == "取消加载") {
            less("加载更多")
        } else {
            less("取消加载")
        }
    }
    return (<>
        <Button onClick={simulationLoading} >{more}</Button>
        <List
            split={true}
            loading={loadingFlag}
            header={<h1 >文章列表</h1>}
            bordered={true}
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
                style: { "justifyContent": "center", display: 'flex' },
                showQuickJumper: true
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item
                    key={item.title}
                    actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    </>)

}


export default Artcle;