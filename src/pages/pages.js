import {
  ContainerOutlined,
  ControlOutlined,
  HomeOutlined
} from '@ant-design/icons'
import Home from './Home'
import PointSystem from './PointSystem'
import CombatDocumentation from './CombatDocumentation'

/**
 * @desciption List of pages rendered in application
 */
export const pages = [
  {
    key: 'home',
    label: 'Home',
    url: '',
    content: <Home />,
    icon: <HomeOutlined />
  },
  {
    key: 'combat',
    label: 'Combat System Documentation',
    url: 'combat-system',
    content: <CombatDocumentation />,
    icon: <ContainerOutlined />
  },
  {
    key: 'point',
    label: 'Point System',
    url: 'point-system',
    content: <PointSystem />,
    icon: <ControlOutlined />
  }
]
