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
    // Article.getArticle().then((res) => {
    //   setHtml(res.data.context);
    //   //组件挂载后渲染文章列表
    //   const domv = document.getElementById("editor-show")
    //   if (domv != null) {
    //     domv.innerHTML = html
    //   }
    // })
  }, []);


  //didUpdate 当编辑器的代码改变时，重新渲染页面
  useEffect(() => {
    if (editor != null) {
      // console.log(editor.getHtml());
      setHtml(editor?.getHtml());
    } //组件更新后渲染文章列表
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
  const [articleTitle, setArticleTitle] = useState('');

  return (
    <React.Fragment>
      {articleTitle}
      <Layout className="layout">
        <Header style={{ "width": "100%", background: colorBgContainer }}>
          <div className="title">
            <Row gutter={20}>
              <Col span={2} style={{ textAlign: "center", fontSize: "36px" }}>
                <span>文章标题:</span>
              </Col>
              <Col span={20}>
                <Input
                  onBlur={(title) => {
                    //文章标题
                    setArticleTitle(title.target.value)
                  }}
                  allowClear
                  showCount={true}
                  maxLength={60}
                  onPressEnter={() => {
                    console.log("PressEnter");
                  }}
                  style={{ borderStyle: "none none solid", borderRadius: "0", outline: "none" }}
                  onFocus={() => {
                    var v = document.getElementsByTagName('input')
                    var style = v[0].style
                    //TODO: 优化input
                    //FIXME:待修复。
                  }}
                />
              </Col>
              <Col span={2}>
                <Button type="primary" size="large">发布文章</Button>
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
        <Content >
          <div className="site-layout-content" style={{ background: colorBgContainer }}>
            <Row gutter={100} style={{ marginTop: '50px' }}>
              <Col span={12}>
                <Editor
                  defaultConfig={editorConfig}
                  value={html}
                  onCreated={setEditor}
                  onChange={(editor) => setHtml(editor.getHtml())}
                  mode="default"
                  style={{ overflowY: "hidden", minHeight: "90vh" }}
                />
              </Col>
              <Col id="editor-show" span={12} className={style.editorShow}>

              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </React.Fragment >
  );
}

export default WangEditorComp;
