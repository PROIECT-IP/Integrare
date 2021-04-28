import React from "react"
import styles from "./styles/Donor.css"
function Donor() {
  return (

    <div class="donate-box">
        <div>
            <h3> Donate </h3>
        </div>
        <div class="donate-form">
            <form id = "donateForm">
                <label for="titlu">Titlu</label>
                <input type="text" id="titlu" name="titlu" placeholder="ex. Donez măști chirurgicale"/>

                <label for="prestatii">Tip prestație</label>
                <select id="prestatii" name="prestatii">
                    <option value="prest1">P1</option>

                    <option value="prest2">P2</option>

                    <option value="prest2">P3</option>

                    <option value="prest3">P4</option>

                  </select>
                  <label for="prestatii">Tip obiect donat</label>
                <select id="tip-obiect" name="tip-obiet">
                    <option value="obj1">O1</option>
                    <option value="obj2">O2</option>
                    <option value="obj2">O3</option>
                    <option value="obj3">O4</option>
                  </select>
                  <label for="comercializat1"> Obiectul este comercializat de către mine</label>
                  <input type="checkbox" id="comercializat1" name="comercializat1"/>
                  <label for="comercializat2"> Obiectul este comercializat de către mine</label>
                  <input type="checkbox" id="comercializat2" name="comercializat2"/>
                  <label for="comercializat3"> Obiectul este comercializat de către mine</label>
                  <input type="checkbox" id="comercializat3" name="comercializat3"/>
                  <label for="comercializat4"> Obiectul este comercializat de către mine</label>
                  <input type="checkbox" id="comercializat4" name="comercializat4"/>

                  <label for="poza">Încarcă o poză:</label>
                 <input type="file" id="poza" name="poza"/>
                 <textarea rows="4" cols="50" name="descriere" form="donateForm" placeholder="Pune o descriere"></textarea>

                <input type="submit" value="Trimite"/>
            </form>
        </div>
    </div>

)
}
export default Donor;