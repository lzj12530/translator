import React, {useState, useRef} from 'react';
import styles from './index.css';
import {Row,Col,Input,Button} from 'antd';
import * as marked from 'marked';
import md from '../../md/test.md';
import Markdown from 'markdown-to-jsx';
import * as html2md from 'html-to-md';
const {TextArea} = Input
export default function() {
  
  const [text1, setText1] = useState('')
  const [textNode, setNode] = useState() 
  const [text2, setText2] = useState('')
  const [innerHtml,setInnterHtml] = useState('')
  const content = useRef(null);
  const onClick = function(e) {
    console.log(e.target.innerText)
    setText1(e.target.innerText)
    setNode(e.target)
    setText2('')
  }
  const changeText = ({target}) => {
    setText2(target.value)
  }
  const onSave = () => {
    textNode.innerText = text2
  }
  fetch(md).then(res => res.text()).then(text => {
    console.log(text)
    setInnterHtml(text)
  })
  const onTransfer = () => {
    // console.log(content.current.innerHTML);
    console.log(html2md(content.current.innerHTML))
  }
  return (
    <Row>
      <Col span={12}>
        <div ref={content} onClick={onClick}>
          <Markdown  children={innerHtml} />
        </div>
      </Col>
      <Col span={12}>
        <p>{text1}</p>
        <div>
          <TextArea value={text2} onChange={changeText}></TextArea>
          <Button onClick={onSave}>保存</Button>
          <Button onClick={onTransfer}>转译</Button>
        </div>
      </Col>
    </Row>
    // <div className={styles.normal} onClick={(e) => onClick(e)}>
    //   <div className={styles.welcome} />
    //   <ul className={styles.list}>
    //     <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
    //     <li>
    //       <a href="https://umijs.org/guide/getting-started.html">
    //         Getting Started
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}
