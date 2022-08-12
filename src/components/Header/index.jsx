import HeaderStyles from '../../styles/Header.module.css'

const Header = (props) => {
  return (
    <header className={HeaderStyles.Header}>
      <div className={HeaderStyles.Header__container}>
        {props.children}
      </div>
    </header>
  )
}

export { Header }