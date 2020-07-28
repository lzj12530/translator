import React, { useState, useRef } from 'react';
import styles from './index.css';
import { Row, Col, Input, Button, Layout } from 'antd';
import md from '../../md/Object-Oriented Programming in JavaScript - CodeSource.io.md';
import * as html2md from 'html-to-md';
import * as marked from 'marked';
import cuid from 'cuid';
import * as md5 from 'md5';
import store from 'store2';
const { TextArea } = Input
const { Content } = Layout
export default function () {

  const [textMap, setTextMap] = useState({})
  const [textNode, setNode] = useState()
  const [targetText, setTargetText] = useState('')
  const [activeDataId,setActiveDataId] = useState('')
  const [fileId, setFileId] = useState()
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
    store.set(fileId, content.current.innerHTML)
    store.set('textMap', textMap)
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
    store.set('textMap', textMap)
    
  }
  fetch(md).then(res => {
    return res.text()
  }).then(text => {
    
    if(!fileId) {
      let id = md5(text)
      setFileId(id)
      if (store.has(id)) {
        content.current.innerHTML = store.get(id)
        console.log(store.get('textMap'))
        setTextMap(store.get('textMap'))
      } else {
        content.current.innerHTML = marked(text)
      }
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
