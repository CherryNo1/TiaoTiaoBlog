import React, { useState, useEffect } from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, List, Skeleton, Space } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { Outlet } from "react-router-dom";
interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ArtcleList: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);
  const pullMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    pullMoreData();
  }, []);

  return (
    <React.Fragment>
      <div
        id="scrollableDiv"
        style={{
          height: "calc(90vh - 64px - 64px)",
          overflow: "auto",
          padding: "0 16px",
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={pullMoreData}
          hasMore={data.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>老妹儿,哥真的一滴都没了 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            itemLayout="vertical"
            size="large"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item
                key={`${index}`}
                actions={[
                  <IconText
                    icon={StarOutlined}
                    text="156"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text="2"
                    key="list-vertical-message"
                  />,
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
                  avatar={
                    <Avatar src={`#`}>
                      <img
                        width={32}
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    </Avatar>
                  }
                  title={<a href="artcle/2">{`文章《${item.email}》`}</a>}
                  description={item.email}
                />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, earum quo mollitia consequuntur dignissimos similique
                nemo distinctio, blanditiis vero saepe iusto ipsa! Sed, maiores
                ratione! Est ab doloribus error inventore.
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </React.Fragment>
  );
};

export default ArtcleList;
