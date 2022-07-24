import { LangProvider } from '../context/SiteContext'
import { UI } from '../routes/UI'

const App = () => {
  return (
      <LangProvider>
        <UI />
      </LangProvider>
  )
}

export { App }