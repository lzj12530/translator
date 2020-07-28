import React, { useState, useRef } from 'react';
import styles from './index.css';
import { Row, Col, Input, Button, Layout } from 'antd';
import md from '../../md/Object-Oriented Programming in JavaScript - CodeSource.io.md';
import Markdown from 'markdown-to-jsx';
import * as html2md from 'html-to-md';
import * as marked from 'marked';
import cuid from 'cuid';
const { TextArea } = Input
const { Content } = Layout
export default function () {

  const [textMap, setTextMap] = useState({})
  const [textNode, setNode] = useState()
  const [targetText, setTargetText] = useState('')
  const [innerHtml, setInnterHtml] = useState('')
  const [activeDataId,setActiveDataId] = useState('')
  const content = useRef(null);
  const onClick = function (e) {
    setNode(e.target)
    setTargetText('')
    let dataId
    if(!e.target.hasAttribute('data-id')) {
      dataId = cuid()
      e.target.setAttribute('data-id', dataId)
      setTextMap({
        ...textMap,
        [dataId]: {
          src: e.target.innerText,
          target: ''
        }
      })
    } else {
      dataId = e.target.getAttribute('data-id')
    }
    setTargetText(textMap[dataId]?.target)
    setActiveDataId(dataId)
  }
  const changeText = ({ target }) => {
    setTargetText(target.value)
  }
  const onSave = () => {
    textNode.innerText = targetText
    setTextMap({
      ...textMap,
      [activeDataId]: {
        src: textMap[activeDataId]?.src,
        target: targetText,
      }
    })
    
  }
  fetch(md).then(res => res.text()).then(text => {
    if(!innerHtml) {
      setInnterHtml(text)
      content.current.innerHTML = marked(text)
    }
    
  })
  const onTransfer = () => {
    // console.log(content.current.innerHTML);
    console.log(html2md(content.current.innerHTML))
  }
  return (
    <Content style={{textAlign: 'left'}}>
      <Row>
        <Col span={12} style={{padding: 10}}>
          <h3>原文</h3>
          <div className={styles['md-content']} ref={content} onClick={onClick}>
            {/* <Markdown children={innerHtml} /> */}
          </div>
        </Col>
        <Col span={12} style={{position:'sticky',top: '60px'}}>
          <section>
            <h3>当前</h3>
            <div className={styles['src-content']}>
              {textMap[activeDataId]?.src}
            </div>
          </section>
          <section style={{marginTop: '10px'}}>
            <h3>译文</h3>
            <TextArea className={styles['target-content']} rows={5} value={targetText} onChange={changeText}></TextArea>
            <div style={{marginTop: '10px'}}>
              <Button onClick={onSave} style={{marginRight: '10px'}}>保存</Button>
              <Button onClick={onTransfer}>转译</Button>
            </div>
            
          </section>
        </Col>
      </Row>
    
    </Content >
  );
}
