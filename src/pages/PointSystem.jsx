import { Button, Card, Col, Layout, Menu, Row, Tag, Typography } from 'antd'
import Page from '../components/Page'
import { Content } from 'antd/es/layout/layout'
import { Route, Routes, useNavigate } from 'react-router-dom'
const { Text, Title, Paragraph } = Typography
const { Sider } = Layout

export default function PointSystem(props) {
  const navigate = useNavigate()

  const pages = [
    {
      key: 'info',
      label: 'Info',
      url: '',
      content: <>
        <div className="tagDiv">
          <Tag style={{ margin: '20px' }} color='red'>WIP</Tag>
        </div></>
    },
    {
      key: 'weapons',
      label: 'Weapons',
      url: 'weapons',
      content: <>
        <div className="tagDiv">
          <Tag style={{ margin: '20px' }} color='red'>WIP</Tag>
        </div></>
    },
    {
      key: 'classes', label: 'Classes', url: 'classes', content: <>
        <div className="tagDiv">
          <Tag style={{ margin: '20px' }} color='red'>WIP</Tag>
        </div>
      </>
    }
  ]

  return (
    <Layout style={{ height: '100%' }}>
      <Sider>
        <Menu
          style={{ height: '100%', textAlign: 'center' }}
          defaultSelectedKeys={['info']}
          items={pages.map(page => {
            return {
              key: page.key,
              label: page.label,
              url: page.url,
              onClick: () => navigate(page.url)
            }
          })}
        />
      </Sider>
      <Content>
        <Routes>
          <Route exact path='' element={pages[0].content} />
          {pages.map(page => {
            return <Route path={'/' + page.url} element={page.content} />
          })}
        </Routes>
      </Content>
    </Layout>
  )
}
