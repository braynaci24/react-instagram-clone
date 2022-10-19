import {React, useState, useEffect, useRef} from 'react'
import Logo from "../../src/logo.png"
import AppStore from "../../src/apple.png"
import PlayStore from "../../src/playstore.png"
import FacebookIcon from "../../src/facebook-icon.png"


function Login() {


  const ref = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const enabled = username && password;

  useEffect(() => {
    let images =  ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0
      const bannerSlider = () => {
        if(current > 0){
          images[current -1].classList.add("opacity-0")
        }else {
          images[total -1].classList.add("opacity-0")
        }
        images[current].classList.remove("opacity-0")
        if(current === total -1 ){
          current = 0;
        }else {
          current += 1;
        }
      } 
      bannerSlider();
    let interval = setInterval(bannerSlider, 3000);
    return () => {
      clearInterval(interval)
    }
  }, [ref])

  return (
    <>
     <div className="col d-flex justify-content-center align-items-center position-relative">
        <img src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" alt=""/>
      <div  ref={ref}>
        <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" className="login-slider-banner opacity-0" alt=""/>
        <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" className="login-slider-banner opacity-0" alt=""/>
        <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" className="login-slider-banner opacity-0" alt=""/>
        <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" className="login-slider-banner opacity-0" alt=""/>
      </div>
     </div>
        <div className="col d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
        <div className="card d-flex justify-content-center align-items-center login-form">
            <img className="card-img-top login-form-logo" src={Logo} alt="" />
            <div className="card-body login-form-body">
                <form>
                  <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="form-control form-input" id="username" placeholder="Telefon numarası, kullanıcı adı veya e-posta"/>
                  <input type="text" value={password} onChange={e => setPassword(e.target.value)} className="form-control form-input mt-1 " id="password" placeholder="Şifre"/>
                  <button type="submit" className="form-control login-submit mt-3 disabled" disabled={!enabled}>Giriş Yap</button>
                </form>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="line"/>
                  <span className="or">YA DA</span>
                  <div className="line"/>
                </div>
                <div>
                  <a href="/" className="d-flex justify-content-center align-items-center">
                    <img src={FacebookIcon} className="facebook-logo" alt=""/>
                    <span className="d-inline-flex ml-2 login-facebook">Facebook ile Giriş Yap</span>
                  </a>
                </div>
                <a href="/" className="d-block mt-3 text-center reset-password">Şifreni mi unuttun?</a>
            </div>
        </div> 
        <div className="card new-account-container mt-3 text-center">
            <div className="card-body">
               <span className="new-account-text">Hesabın yok mu?</span>
               <a href="/" className="d-inline-flex ml-3 new-account-link">Kaydol</a>
            </div>
        </div> 
        <div className="my-4">
          <span>Uygulamayı indir.</span>
        </div>
        <div className="d-flex flex-direction-row justify-content-around">
          <a href="https://apps.apple.com/app/instagram/id389801252" target="_blank" rel="noreferrer">
            <img src={AppStore} className="download-logo" alt=""/>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android" target="_blank" rel="noreferrer">
            <img src={PlayStore} className="download-logo" alt=""/>
          </a>
        </div>
        </div>
       
    </>
  )
}

export default Login