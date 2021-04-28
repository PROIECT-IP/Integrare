import React from "react"
import styles from "./styles/HomePage.css"
import Donor from "./Donor"
const HomePage = () => {
    return (
        <div id="overview">

            <div id="beneficiar">

                <div class="centerx2">
                    <a href="beneficiar.js" className="button"> Beneficiar </a>
                </div>

            </div>

            <div id="binefacator">
                
                <div class="centerx2">
                    <a href="Donor" className="button"> Binefacator </a>
                </div>
                
            </div>

        </div>
    )
}

export default HomePage;