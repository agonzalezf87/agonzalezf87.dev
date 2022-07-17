import '../styles/Header.component.css'

const Header = (props) => {
  return (
    <header className='Header'>
      {props.children}
    </header>
  )
}

export { Header }