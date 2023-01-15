import { ArticleApi } from '@/api';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List } from 'antd';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IconText = ({ icon, text }: { icon: any; text: string }) => (
  <span>
    {React.createElement(icon, { style: { marginInlineEnd: 8 } })}
    {text}
  </span>
);
type ArticleType = {
  articleId: number;
  articleTag: string;
  collectionCount: number;
  commentCount: number;
  likeCount: number;
  readCount: number;
  status: string;
  context: string;
  coverUrl: string;
  createTime: Date;
  title: string;
  userInfoId: number;
}
export default () => {
  const navigate = useNavigate();

  const [articleList, setArticleList] = useState<ArticleType[]>()
  useEffect(() => {
    ArticleApi.getArticleList(1, 10).then(res => {
      console.log(res.data.records);
      setArticleList(res.data.records)
    })
  }
  )

  return (

    <List<ArticleType>
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={articleList}
      footer={
        <div>
          ant design footer part
        </div>
      }
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
            avatar={<Avatar src={''} />}
            title={<a href={item.title}>{item.title}</a>}
            description={item.articleTag}
          />
          {item.context}
        </List.Item>
      )}
    />
  );
};


