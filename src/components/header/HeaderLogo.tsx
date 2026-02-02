import logo from '../../../public/logo-small.svg'

const HeaderLogo = () => {
  return (
    <div className="header-left" >
        <div>
          <img src={logo}/>
        </div>
        <div>
          <h1>Typing Speed Test</h1>
          <p>Type as fast as you can</p>
        </div>
      </div>
  )
}

export default HeaderLogo
