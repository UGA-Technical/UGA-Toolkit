import { useEffect, useState } from 'react'
import { Button, Card, Col, Layout, Menu, Row, Space, Table, Tag, Typography } from 'antd'
import Page from '../components/Page'
import { Content } from 'antd/es/layout/layout'
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { pages } from './pages'
import './CombatDocumentation.css'

import classes from './CombatDocumentation/classes.png'
import hitbox from './CombatDocumentation/hitbox.png'
import hitboxes from './CombatDocumentation/hitboxes.png'
import hitbox2 from './CombatDocumentation/hitbox2.png'
import pvpmenu from './CombatDocumentation/pvpmenu.png'

const { Text, Title, Paragraph } = Typography
const { Sider } = Layout

export default function CombatDocumentation(props) {
  const navigate = useNavigate()
  let index = window.location.pathname?.split('/')?.[2] || 'info'

  const [links, setLinks] = useState([])

  const pages = [
    {
      key: 'info',
      label: 'Index',
      url: '',
      content: (
        <Space className='indexBody' direction='vertical' space='large'>
          <Paragraph className='indexParagraph'>
            This is a collection of information gathered about the world PvP
            system used in most servers on the platform. Most is taken directly
            from the unity game objects, but some is based on observation and
            experience.
          </Paragraph>
          <div>
            <Title level={5}>Table of Contents</Title>
          </div>
          {links}
        </Space>
      )
    },
    {
      key: 'overview',
      label: 'Overview',
      url: 'overview',
      content: (
        <>
          <Space className='indexBody' direction='vertical' space='large'>
            <Paragraph>
              &nbsp;&nbsp; Each player spawns into a world with 2000 health.
              They spawn typically with the Assault class, but often overwrite
              their class through the class buttons on the wall. Classes change
              your speed, jump height, health, and occasionally other stats.
            </Paragraph>
            <Paragraph>
              &nbsp;&nbsp; Players either spawn with avatar weaponry or use
              weaponry from the weapon wall. All weapons are particle-based.
              Weapons have a cooldown before they can be fired again, and can be
              fired while jumping, sprinting, and crouching with no penalty.
            </Paragraph>
            <Paragraph>
              &nbsp;&nbsp; Damage is dealt through collision of a player’s
              appended hitbox with a particle of specific layers, often called a
              “kill particle”. The hitbox (and the tracking of health) is done
              client-side, meaning one must hit the opponent on their screen for
              them to take damage. This accounts for the severity of latency
              in-game.
            </Paragraph>
            <Paragraph>
              &nbsp;&nbsp; Most weapons fire two “kill particles” per
              projectile. Weapons increase their damage by firing more rapidly,
              increasing the possible damage per second of the weapon. Weapons
              can also increase their damage through firing more than two "kill
              particles" per shot.
            </Paragraph>
            <Paragraph>
              &nbsp;&nbsp; Different particle layers inflict different debuffs
              on the player. There are buffs, debuffs, and damage layers. All
              buffs and debuffs has a short cooldown before it can be applied
              again. The damage layer is applied every time the player is hit
              and has no immunity time.
            </Paragraph>
          </Space>
        </>
      )
    },
    {
      key: 'hitboxes',
      label: 'Hitboxes',
      url: 'hitboxes',
      content: (
        <>
          <Space className='indexBody' direction='vertical' space='large'>
            <Paragraph>
              All classes have the same hitbox, overlaid onto the avatar. See
              below:
            </Paragraph>
            <img
              style={{ minWidth: '300px', maxHeight: '500px' }}
              src={hitbox}
              alt='blah'
            />
            <Paragraph>
              &nbsp;&nbsp;The top section of the hitbox is the head, and the
              larger middle section is the body. The head takes significantly
              more damage than the body to normal bullets. All other damage
              sources overlap these hitboxes with a capsule of varying size.
            </Paragraph>
            <Paragraph>
              &nbsp;&nbsp; The hitbox is appended to the player’s avatar, and
              moves with the player. Since the hitbox must be hit on the client
              side, it is possible to hit the player’s avatar without hitting
              the hitbox. This is most common when the player is moving quickly,
              and the hitbox is lagging behind the avatar.
            </Paragraph>
            <Paragraph>
              &nbsp;&nbsp; The hitbox does not change size proportional to the
              player's avatar. This that the hitbox is deceptively small on larger
              avatars and deceptively large on smaller avatars. A hitbox properly matches
              an avatar that's 2m tall. Most 40k avatars are taller than 2m tall, and so 
              their hitbox will be smaller than their avatar. See below for an example of this:
            </Paragraph>
            <img
              style={{ minWidth: '300px', maxWidth: '600px' }}
              src={hitboxes}
              alt='blah'
            />
            <Paragraph>
              &nbsp;&nbsp; When shooting at a player, it is important to
              consider the size of the hitbox. Typically it is best to aim for
              the center of the player's avatar, and this is expecially true for
              larger avatars.
            </Paragraph>
          </Space>
        </>
      )
    },
    {
      key: 'classes',
      label: 'Classes',
      url: 'classes',
      content: (
        <>
          <Space className='indexBody' direction='vertical' space='large'>
            <Paragraph>
              &nbsp;&nbsp; Groups of classes can be selected in the primary
              screen shown below. Only the host may change the set of classes
              available for players to choose from. Typically, UGA members will
              use the Warhammer 40k classses.
            </Paragraph>
            <img style={{ minWidth: '300px', maxWidth: '600px' }} src={pvpmenu} alt='blah' />
            <Paragraph>
              &nbsp;&nbsp; Available classes are rendered as a collection of boxes to the left of the main screen. 
              Hovering over the boxes pop a tooltip of the class they equip when pressed. The 40k class selection 
              is shown below:
            </Paragraph>
            <img style={{ minWidth: '300px', maxWidth: '600px' }} src={classes} alt='blah' />
            <Paragraph>
              &nbsp;&nbsp; Each class has a set of primary values. The head and chest
              damage is the amount of damage taken when hit by a "kill particle" in that area.
              The jump power describes how high you can jump, and the run/walk/strafe speeds describe
              how fast you can run along the ground in meters per second. Classes also have a specific
              way to heal, either through the healing layer or the repair layer.
            </Paragraph>
            <Paragraph>
              &nbsp;&nbsp; The default 40k classes are as follows:
            </Paragraph>
            <Table
              dataSource={[
                {
                  key: '1',
                  class: 'Assault (Default)',
                  head: '2',
                  chest: '200 (10)',
                  healAmount: '250',
                  jump: '5',
                  run: '5',
                  strafe: '3',
                  walk: '3',
                  healingSource: 'healing',
                },
                {
                  key: '2',
                  class: 'Light Infantry',
                  head: '1000 (2)',
                  chest: '55 (36)',
                  healAmount: '250',
                  jump: '6',
                  run: '6',
                  walk: '5',
                  strafe: '5',
                  healingSource: 'healing',
                },
                {
                  key: '3',
                  class: 'Light Brawler',
                  head: '1000 (2)',
                  chest: '42 (48)',
                  healAmount: '250',
                  jump: '7.5',
                  run: '7.5',
                  walk: '6.5',
                  strafe: '6.5',
                  healingSource: 'healing',
                },
                {
                  key: '4',
                  class: 'Light Walker',
                  head: '500 (4)',
                  chest: '42 (60)',
                  healAmount: '200',
                  jump: '4',
                  run: '7',
                  walk: '6',
                  strafe: '2',
                  healingSource: 'repair',
                },
                // {
                //   key: '5.5',
                //   class: 'Light Vehicle',
                //   head: '500 (4)',
                //   chest: '15 (66)',
                //   healAmount: '200',
                //   jump: '0',
                //   run: '10',
                //   walk: '10',
                //   strafe: '10',
                //   healingSource: 'repair',
                // },
                {
                  key: '5',
                  class: 'Medium Infantry',
                  head: '1000 (2)',
                  chest: '33 (60)',
                  healAmount: '250',
                  jump: '5',
                  run: '5',
                  walk: '3',
                  strafe: '3',
                  healingSource: 'healing',
                },
                {
                  key: '6',
                  class: 'Medium Brawler',
                  head: '500 (4)',
                  chest: '25 (80)',
                  healAmount: '250',
                  jump: '6.5',
                  run: '6.5',
                  walk: '4.5',
                  strafe: '4.5',
                  healingSource: 'healing',
                },
                {
                  key: '7',
                  class: 'Medium Walker',
                  head: '500 (4)',
                  chest: '25 (80)',
                  healAmount: '200',
                  jump: '0.5',
                  run: '4.5',
                  walk: '4',
                  strafe: '1',
                  healingSource: 'repair',
                },
                {
                  key: '8',
                  class: 'Heavy Infantry',
                  head: '500 (4)',
                  chest: '21 (96)',
                  healAmount: '250',
                  jump: '4',
                  run: '4',
                  walk: '2',
                  strafe: '2',
                  healingSource: 'healing',
                },
                {
                  key: '9',
                  class: 'Heavy Brawler',
                  head: '500 (4)',
                  chest: '18 (108)',
                  healAmount: '250',
                  jump: '5.5',
                  run: '5.5',
                  walk: '3.5',
                  strafe: '3.5',
                  healingSource: 'healing',
                },
                {
                  key: '10',
                  class: 'Heavy Walker',
                  head: '500 (4)',
                  chest: '22 (88)',
                  healAmount: '120',
                  jump: '0.5',
                  run: '7',
                  walk: '5',
                  strafe: '1',
                  healingSource: 'repair',
                },
                {
                  key: '11',
                  class: 'Commander',
                  head: '333 (6)',
                  chest: '20 (100)',
                  healAmount: '160',
                  jump: '6',
                  run: '6',
                  walk: '3',
                  strafe: '3',
                  healingSource: 'healing',
                },
                {
                  key: '12',
                  class: 'Warlord',
                  head: '250 (8)',
                  chest: '10 (200)',
                  healAmount: '120',
                  jump: '6',
                  run: '7',
                  walk: '3',
                  strafe: '4',
                  healingSource: 'healing',
                },
                {
                  key: '13',
                  class: 'Boss',
                  head: '0.4 (5000)',
                  chest: '0.2 (10000)',
                  healAmount: '0',
                  jump: '5',
                  run: '7',
                  walk: '4',
                  strafe: '6',
                  healingSource: 'none',
                },
              ]}
              columns={[
                {
                  title: 'Class',
                  dataIndex: 'class',
                  key: 'class',
                },
                {
                  title: 'Head Damage',
                  dataIndex: 'head',
                  key: 'head',
                },
                {

                  title: 'Chest Damage',
                  dataIndex: 'chest',
                  key: 'chest',
                },
                {
                  title: 'Healing',
                  dataIndex: 'healAmount',
                  key: 'healAmount',
                },

                {
                  title: 'Jump Power',
                  dataIndex: 'jump',
                  key: 'jump',
                },
                {

                  title: 'Run Speed',
                  dataIndex: 'run',
                  key: 'run',
                },
                {
                  title: 'Walk Speed',
                  dataIndex: 'walk',
                  key: 'walk',
                },

                {
                  title: 'Strafe Speed',
                  dataIndex: 'strafe',
                  key: 'strafe',
                },

                {
                  title: 'Healing Source',
                  dataIndex: 'healingSource',
                  key: 'healingSource',
                },
              ]}
            />

          </Space >
        </>
      )
    },
    {
      key: 'weapons',
      label: 'Weapons',
      url: 'weapons',
      content: <>
        <div className="tagDiv">
          <Tag style={{ margin: '20px' }} color='red'>WIP</Tag>
        </div>
      </>
    },
    {
      key: 'damage-layers',
      label: 'Damage Layers',
      url: 'damage-layers',
      content: <>
        <div className="tagDiv">
          <Tag style={{ margin: '20px' }} color='red'>WIP</Tag>
        </div></>
    }
  ]

  useEffect(() => {
    setLinks(
      pages.map(page => (
        <Link to={`/combat-system/${page.url}`}>{page.label}</Link>
      ))
    )
  }, [])

  return (
    <Layout style={{ height: '100%' }}>
      <Sider>
        <Menu
          defaultSelectedKeys={['info']}
          selectedKeys={index}
          style={{ height: '100%', textAlign: 'center' }}
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
            return (
              <Route
                key={page.key}
                path={'/' + page.url}
                element={page.content}
              />
            )
          })}
        </Routes>
      </Content>
    </Layout>
  )
}
