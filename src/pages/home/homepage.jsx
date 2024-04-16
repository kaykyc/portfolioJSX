import React from "react";
import './styles.css'




function HomePage(){
    return(
        <div className="homepage">
            <div className="lado_esquerdo">
                <h1><strong>KAYKY</strong> CORDEIRO</h1>
                <h5>DESENVOLVEDOR DE SOFTWARE</h5>
                <p>SOU O KAYKY, TENHO 20 ANOS E PARARARARARARARA </p>
                <ul className="links_redes">
                <li className="link_rede"><a href="https://www.github.com">GitHub</a></li>
                <li className="link_rede"><a href="https://www.github.com" target="_blank">LinkdIn</a></li>
                <li className="link_rede"><a href="URL_DA_SUA_REDE_SOCIAL_3" target="_blank">Instagram</a></li>
                </ul>
            </div>
            <img src="./img_kayky.JPEG" alt="Foto Kayky Cordeiro" className="img_kayky"></img>           

        </div>
        
    )
}
export default HomePage;