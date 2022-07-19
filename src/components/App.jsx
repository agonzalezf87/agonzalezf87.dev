import { LangProvider } from '../context/SiteContext'
import { UI } from '../UI'

const App = () => {
  return (
      <LangProvider>
        <UI />
      </LangProvider>
  )
}

export { App }