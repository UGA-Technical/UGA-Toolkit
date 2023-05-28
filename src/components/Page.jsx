/* eslint-disable no-unused-vars */
import { Layout, Space, Typography } from 'antd'
import './Page.css'

const { Text, Title } = Typography
/**
 * @description Wrapper for page content, manages layout
 */
export default function Page ({
  title, // Page title
  subTitle, // Page subtitle
  header = <></>, // header jsx
  subHeader = <></>, // subheader jsx
  content = <></>, // Page content jsx
  leftSider, // Left sider jsx
  rightSider, // Right sider jsx
  footer = <></>, // Footer jsx
  ...props
}) {
  return (
    <>
      {leftSider ? <>{leftSider}</> : null}
      <div className='page'>
        {title || subTitle ? (
          <div className='pageHeader'>
            <Title level={4} style={{ marginTop: '-8px' }}>
              {title}
            </Title>
            <Text type='secondary' style={{ marginTop: '-8px' }}>
              {subTitle}
            </Text>
          </div>
        ) : null}
        <div className='pageContent'>{content}</div>
      </div>
    </>
  )
}
