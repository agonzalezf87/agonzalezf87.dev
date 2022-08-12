import { useContext } from 'react'
import { SiteContext } from '../../context/SiteContext'
import { MdMenu, MdClose } from 'react-icons/md'
import BurgerBtnStyles from '../../styles/BurgerButton.module.css'
import cn from 'classnames'

const BurgerButton = (props) => {
  const { openMenu } = useContext(SiteContext)

  const handleClick = () => {
    props.setOpenMenu(!openMenu)
  }

  return (
    <div className={!!openMenu ? cn(BurgerBtnStyles.BurgerButton, BurgerBtnStyles.active) : BurgerBtnStyles.BurgerButton } onClick={handleClick}>
      {!openMenu ? <MdMenu /> : <MdClose />}
    </div>
  )
}

export { BurgerButton }