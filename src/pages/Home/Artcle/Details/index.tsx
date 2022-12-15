import { useParams } from "react-router-dom";

import React from "react";
import { Anchor, Col, Image, Layout, Menu, Row, theme } from "antd";
import AnchorComp from "../../../../components/AnchorComp";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../../../components/CodeBlock/CodeBlock";

const { Header, Content, Footer, Sider } = Layout;
let markdown =
  "# 这是标题\n" +
  "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
  "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
  "**这是加粗的文字**\n\n" +
  "*这是倾斜的文字*`\n\n" +
  "***这是斜体加粗的文字***\n\n" +
  "~~这是加删除线的文字~~ \n\n" +
  "`console.log(Hello World)` \n\n" +
  "```const a=2; ```";

const Details: React.FC = () => {
  // const params = useParams();
  // console.log(params.artcleId);
  return (
    <Layout>
      <Sider theme="light">
        <AnchorComp />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "80vh",
            }}
          >
            <Row
              style={{
                justifyContent: "center",
                fontSize: "36px",
              }}
            >
              文章标题
            </Row>
            <Row>
              <Col>发布时间</Col>
            </Row>
            <div className="text">
              <Image src="https://img-blog.csdnimg.cn/2021060522035638.png" />
              <Image src="https://img-blog.csdnimg.cn/2021060517021422.png" />
            </div>
            <ReactMarkdown
              children={markdown}

              //   escapeHtml={false} //不进行HTML标签的转化
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Details;
