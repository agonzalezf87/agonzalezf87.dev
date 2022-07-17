import { useState, useContext } from 'react'
import { SiteContext } from '../context/SiteContext'
import { MdMenu, MdClose } from 'react-icons/md'

const BurgerButton = (props) => {
  const { openMenu } = useContext(SiteContext)

  const handleClick = () => {
    props.setOpenMenu(!openMenu)
  }

  return (
    <div className='BurgerButton' onClick={handleClick}>
      {!openMenu ? <MdMenu /> : <MdClose />}
    </div>
  )
}

export { BurgerButton }