import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import imgs from './img/loadingImg.png';
function App() {
  const [loading, setLoading] = useState(true);

  const children = 
  <div style={{height: 600}}>
  <div style={{display: 'flex', justifyContent: 'center',flexDirection: 'row',height: 400, background: 'lightblue', overflow: 'hidden'}}>
              这个是加载中的内容这个是加载中的内容这个是加载中 的内容这个是加载中的内容这个是加载中
              的内容这个是加载中的内容这个是加载中的
  </div>
</div>

  // 局部动画
	const focalIcon =  
  <div className="more">
    {/* 上下动的图片 */}
    <img className="more-img" style={{ position: 'absolute',left: 0, top: 0, width: '100%', height: '40%', zIndex: 10 }} src={imgs} />
    <div style={{ opacity: 0 }}>{children}</div>
    {/* 蒙层 */}
    <div
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        background: '#FAFAFA',
      }}
    />
  </div>
  return (
    <div className="App">
        <Button type="primary" style={{margin: 20}} onClick={() => setLoading(true)}>
    开启
  </Button>
  <Button type="primary" onClick={() => setLoading(false)}>
    停止
  </Button>
      {loading ? focalIcon : children}
    </div>
  );
}

export default App;
