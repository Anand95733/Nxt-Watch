import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {withRouter} from 'react-router-dom'
import {IoIosLogOut} from 'react-icons/io'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import 'reactjs-popup/dist/index.css'
import {
  Logolink,
  NavbarHeader,
  HeaderLogo,
  ActionsContainer,
  ThemeButton,
  LogoutButton,
  LogoutButtonIconButton,
  PofileImage,
  ModalContainer,
  CloseButton,
  ConfirmButton,
  ModalDesc,
  ButtonsContainer,
} from './styledComponent'

const Header = props => {
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const color = isDarkTheme ? '#ffffff' : '#00306e'
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'

        const onChangeTheme = () => {
          toggleTheme()
        }

        const onClickLogout = () => {
          const {history} = props
          Cookies.remove('jwt_token')
          history.replace('/login')
        }
        return (
          <NavbarHeader bgColor={bgColor}>
            <Logolink to="/">
              <HeaderLogo
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Logolink>
            <ActionsContainer>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onChangeTheme}
              >
                {isDarkTheme ? (
                  <BsBrightnessHigh color="#ffffff" size={25} />
                ) : (
                  <BsMoon size={25} />
                )}
              </ThemeButton>
              <PofileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" bgColor={bgColor} color={color}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <ModalContainer>
                    <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                    <ButtonsContainer>
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutButtonIconButton type="button">
                    <IoIosLogOut size={25} color={color} />
                  </LogoutButtonIconButton>
                }
                className="popup-content"
              >
                {close => (
                  <ModalContainer>
                    <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                    <ButtonsContainer>
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CloseButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
            </ActionsContainer>
          </NavbarHeader>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default withRouter(Header)
