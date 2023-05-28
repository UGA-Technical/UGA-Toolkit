import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { pages } from './pages/pages'
import { ConfigProvider, Layout, Menu, Space, Switch, theme } from 'antd'
import { BulbFilled, BulbOutlined, BulbTwoTone } from '@ant-design/icons'
import uga from './uga.svg'
import './App.css'

function App () {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#007524'
        },
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}
    >
      <div className='appBody'>
        <Layout className='fill'>
          <Layout.Header
            className='appHeader'
            theme={darkMode ? 'dark' : 'light'}
            style={{
              backgroundColor: darkMode ? '#141414' : '#fff'
            }}
          >
            <img className='logo' src={uga} alt='' height='50px' width='50px' />
            <Menu
              style={{ flex: 1, borderBottom: '0px' }}
              mode='horizontal'
              onClick={e => console.log(e)}
              defaultSelectedKeys={[pages[0].key]}
              items={pages.map(page => {
                return {
                  key: page.key,
                  label: page.label,
                  icon: page.icon,
                  onClick: () => navigate(page.url)
                }
              })}
            ></Menu>
            <Switch
              style={{ marginLeft: '50px' }}
              unCheckedChildren={<BulbFilled />}
              checkedChildren={<BulbOutlined />}
              defaultChecked={darkMode}
              onChange={e => {
                window.darkMode = e
                setDarkMode(e)
              }}
            />
          </Layout.Header>
          <Layout style={{ height: '100%' }}>
            <Routes>
              {pages.map(page => (
                <Route
                  key={page.key}
                  path={page.url + '/*'}
                  element={page.content}
                />
              ))}
            </Routes>
          </Layout>
        </Layout>
      </div>
    </ConfigProvider>
  )
}

export default App
