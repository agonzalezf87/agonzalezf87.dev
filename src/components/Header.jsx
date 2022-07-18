import '../styles/Header.component.css'

const Header = (props) => {
  return (
    <header className='Header'>
      <div className="Header__container">
        {props.children}
      </div>
    </header>
  )
}

export { Header }