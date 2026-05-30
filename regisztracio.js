let oldalcim = document.getElementById('oldalcim')
let focim = document.getElementById('focim')
let navigacio = document.getElementById('navigacio')
let fo = document.getElementById('fo')

function feluletGeneralas()
{
    navigacio.innerHTML = ''

    navigacio.innerHTML =
    `<marquee scrolldelay="60">Üdvözöljük a regisztrációs felületen! Válassza ki, hogy tanári vagy diák fiókot szeretne-e regisztrálni! Tanárként lehetősége nyílik a diákok jegyeinek módosítására, diákként megtekintheti eddigi osztályzatait. Ha nem szeretne regisztrálni folytathatja fiók nélkül is limitált lehetőségekkel.</marquee>`

    fo.innerHTML = ''

    fo.innerHTML =
    `<div class="keret_regisztracio">
        <h1 class="cimek">Tanári fiók felvétele</h1>

        <label for="nev">Név</label>
        <br>
        <input type="text" id="nev">
        <br>
        <br>

        <label for="email">E-mail</label>
        <br>
        <input type="text" id="email">
        <br>
        <br>

        <label for="jelszo_egy">Jelszó</label>
        <br>
        <input type="password" id="jelszo_egy">
        <br>
        <br>

        <label for="jelszo_ketto">Jelszó megerősítése</label>
        <br>
        <input type="password" id="jelszo_ketto">
        <br>
        <br>

        <label for="szak">Szak kiválasztása</label>
        <br>
        <select>
            <option value="irodalom-nyelvtan">irodalom-nyelvtan</option>
            <option value="matematika">matematika</option>
            <option value="angol">angol</option>
            <option value="testnevelés">testnevelés</option>
            <option value="történelem">történelem</option>
            <option value="fizika">fizika</option>
            <option value="programozó">programozó</option>
            <option value="hittan">hittan</option>
        </select>
        <br>
        <br>
    </div>`
}