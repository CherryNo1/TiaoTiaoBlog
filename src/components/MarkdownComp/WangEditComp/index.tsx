import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import * as utils from '@/utils/commonUtils'

import React, { useState, useEffect } from "react";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig, createEditor } from "@wangeditor/editor";
import { Col, Divider, Row, Space } from "antd";
import { useMount } from 'ahooks';
import { service } from "@/utils/request";
import Article from "@/api/Article";
function WangEditorComp() {
  // editor 实例
  var [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  // const [editor, setEditor] = useState(null)                   // JS 语法
  // 编辑器内容
  const [html, setHtml] = useState("<h1>hello</h1>");


  // 模拟componentDidMount 异步设置 html
  useEffect(() => {
    Article.getArticle().then((res) => {
      console.log(res);
      setHtml(res.data.context);
    })
  }, []);

  // 及时销毁 editor ，重要！
  useEffect(() => {
    utils.editorShow("editor-show", html)

    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);



  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // TS 语法
    // const editorConfig = {                         // JS 语法
    placeholder: "请输入内容...",
  };




  return (
    <React.Fragment>
      <Row gutter={100} style={{ marginTop: '50px' }}>
        <Col span={12}>
          <Toolbar
            editor={editor}
            defaultConfig={toolbarConfig}
            mode="default"
            style={{ borderBottom: "1px solid #ccc" }}
          />
          <Editor
            defaultConfig={editorConfig}
            value={html}
            onCreated={setEditor}
            onChange={(editor) => setHtml(editor.getHtml())}
            mode="default"
            style={{ height: "500px", overflowY: "hidden" }}
          />
        </Col>
        <Col id="editor-show" span={12}>
        </Col>
      </Row>
    </React.Fragment >
  );
}

export default WangEditorComp;
