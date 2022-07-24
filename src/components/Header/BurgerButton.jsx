import { useContext } from 'react'
import { SiteContext } from '../../context/SiteContext'
import { MdMenu, MdClose } from 'react-icons/md'
import '../../styles/BurgerButton.component.css'

const BurgerButton = (props) => {
  const { openMenu } = useContext(SiteContext)

  const handleClick = () => {
    props.setOpenMenu(!openMenu)
  }

  return (
    <div className={`BurgerButton${!!openMenu ? ' active' : ''}`} onClick={handleClick}>
      {!openMenu ? <MdMenu /> : <MdClose />}
    </div>
  )
}

export { BurgerButton }