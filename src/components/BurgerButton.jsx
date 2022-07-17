import { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'

const BurgerButton = () => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    console.log(isActive)
    setIsActive(!isActive)
  }

  return (
    <div className='BurgerButton' onClick={handleClick}>
      {!isActive ? <MdMenu /> : <MdClose />}
    </div>
  )
}

export { BurgerButton }