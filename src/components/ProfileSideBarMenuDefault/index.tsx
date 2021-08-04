import { BASE_URL } from '../../utils/variables'
import { Wrapper} from './style'

export function ProfileSideBarMenuDefault(){
  return(
    <Wrapper>
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/user.svg`} />
          Perfil
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/book.svg`} />
          Recados
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/camera.svg`} />
          Fotos
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/sun.svg`} />
          Depoimentos
        </a>
      </nav>
      <hr />
      <nav>
      <a href="/">
          <img src={`${BASE_URL}/icons/plus.svg`} />
          GitHub Trends
        </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/logout.svg`} />
          Sair
        </a>
      </nav>
    </Wrapper>
  )
}