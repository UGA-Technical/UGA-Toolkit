import { Card, Space, Tag, Typography } from 'antd'
import { useState, useEffect } from 'react'
import Page from '../components/Page'
import './Home.css'
import config from '../config/config'

const { Text, Paragraph } = Typography

export default function Home(props) {
  const tags = [
    {
      label: 'Version',
      value: config.version
    },
    {
      label: 'Author',
      value: config.author
    },
    {
      label: 'License',
      value: config.license
    }
  ]

  const [bubbles, setBubbles] = useState([])
  useEffect(() => {
    let bubbles = []
    for (let i = 0; i < 50; i++) {
      let bubble = (
        <span
          style={{
            left: (i / 50) * 100 + '%',
            animationDelay: '-' + 7 * Math.random() + 's',
            animationDuration: 4 + Math.random() * 2 + 's'
          }}
        />
      )
      bubbles.push(bubble)
    }
    setBubbles(bubbles)
    return () => {
      setBubbles([])
    }
  }, [])

  let content = (
    <>
      <div className='homeHeader'>
        {tags.map((tag, index) => {
          return (
            <Tag key={index} color={tag.color}>
              {tag.label}: {tag.value}
            </Tag>
          )
        })}
      </div>
      <div className='bubblesContainer'>
        <div className='bubbles'>{bubbles}</div>
      </div>

      <div className='home'>
        <Card>
          <Space direction='vertical' size='large'>
            <Space direction='vertical' size='small'>
              <Text style={{ fontSize: '2em' }}>Welcome to the</Text>
              <Text style={{ fontSize: '2.5em' }}>UGA Technical Toolkit!</Text>
            </Space>
            <Paragraph>
              This website is a collection of tools and resources for the United
              Gaming Association. <br />
              Please see the navigation bar above to get started. <br />
            </Paragraph>
            <Paragraph>
              If you have any questions or suggestions, please contact us at{' '}
              <a href='mailto:uga.technical@gmail.com'>
                uga.technical@gmail.com
              </a>
              .
            </Paragraph>
          </Space>
        </Card>
      </div>
    </>
  )

  return <Page content={content} />
}
