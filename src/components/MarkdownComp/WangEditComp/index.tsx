import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import * as utils from '@/utils/commonUtils'
import style from './index.module.scss'
import React, { useState, useEffect } from "react";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig, createEditor } from "@wangeditor/editor";
import { Button, Col, Divider, Form, Input, Layout, Menu, MenuProps, Row, Space, theme } from "antd";
import { useMount } from 'ahooks';
import { service } from "@/utils/request";
import Article from "@/api/ArticleApi";
import { Content, Header } from "antd/es/layout/layout";
import Search from "antd/es/input/Search";
function WangEditorComp() {
  // editor 实例
  var [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  // const [editor, setEditor] = useState(null)   // JS 语法
  // 编辑器内容
  const [html, setHtml] = useState("");


  // 模拟componentDidMount 异步设置 html
  useEffect(() => {
    Article.getArticle().then((res) => {
      setHtml(res.data.context);
      const domv = document.getElementById("editor-show")
      if (domv != null) {
        domv.innerHTML = html
      }
    })
  }, []);


  //didUpdate 当编辑器的代码改变时，重新渲染页面
  useEffect(() => {
    if (editor != null) {
      console.log(editor.getHtml());
      setHtml(editor?.getHtml());
    }
    const domv = document.getElementById("editor-show")
    if (domv != null) {
      domv.innerHTML = html
    }
  })
  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);


  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {
  }; // TS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    placeholder: "请输入内容...",
    scroll: false,
    MENU_CONF: {

    },
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <React.Fragment>
      <Layout className="layout">
        <Header style={{ "width": "100%" }}>
          <div className="title">
            <Row>
              <Col span={2}>
                文章标题:
              </Col>
              <Col span={14}>
                <Form.Item>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Button type="primary">发布文章</Button>
              </Col>
            </Row>
          </div>
          <Toolbar
            editor={editor}
            defaultConfig={toolbarConfig}
            mode="default"
            style={{ borderBottom: "1px solid #ccc", borderTop: "1px solid #ccc" }}
          />
        </Header>
        <Row>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content" style={{ background: colorBgContainer }}>
              <Row gutter={100} style={{ marginTop: '50px' }}>
                <Col span={12}>
                  <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={(editor) => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: "100%", overflowY: "hidden" }}
                  />
                </Col>
                <Col id="editor-show" span={12} className={style.editorShow}>

                </Col>
              </Row>
            </div>

          </Content>
        </Row>
      </Layout>
    </React.Fragment >
  );
}

export default WangEditorComp;
