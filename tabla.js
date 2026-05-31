//#region Regisztrációs felület létrehozása, működtetése

let oldalcim = document.getElementById('oldalcim')
let logocim = document.getElementById('logo')
let focim = document.getElementById('focim')
let navigacio = document.getElementById('navigacio')
let fo = document.getElementById('fo')

function feluletGeneralas()
{
    oldalcim.textContent = 'TÁBLA - Regisztrációs felület'

    logocim.title = 'TÁBLA - Regisztrációs felület'

    focim.textContent = 'TÁBLA - Regisztrációs felület'

    focim.title = 'Tanár vagy diák regisztrálása az oldalra.'

    navigacio.innerHTML =
    `<marquee scrolldelay="60">Üdvözöljük a regisztrációs felületen! Válassza ki, hogy tanári vagy diák fiókot szeretne-e regisztrálni! Tanárként lehetősége nyílik a diákok jegyeinek módosítására, diákként megtekintheti eddigi osztályzatait. Ha nem szeretne regisztrálni folytathatja fiók nélkül is limitált lehetőségekkel.</marquee>`

    fo.innerHTML =
    `<div class="keret_regisztracio">
        <h1 class="cimek">Tanári fiók felvétele</h1>

        <label for="nev" id="tanar_nev_pipa">Név</label>
        <br>
        <input type="text" id="tanar_nev">
        <br>
        <br>

        <label for="email" id="tanar_email_pipa">E-mail</label>
        <br>
        <input type="text" id="tanar_email">
        <br>
        <br>

        <label for="jelszo_egy" id="tanar_jelszo_egy_pipa">Jelszó</label>
        <br>
        <input type="password" id="tanar_jelszo_egy">
        <br>
        <br>

        <label for="jelszo_ketto" id="tanar_jelszo_ketto_pipa">Jelszó megerősítése</label>
        <br>
        <input type="password" id="tanar_jelszo_ketto">
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

        <button class="regisztracios_gomb" id="tanar_gomb" onclick="kiertekelesTanar()" disabled>Fiók regisztrálása</button>
        <button class="nincs_regisztracio" onclick="kiTanariFelulet()">Nem regisztrálok</button>
    </div>
    
    <div class="keret_regisztracio">
        <h1 class="cimek">Diák fiók felvétele</h1>

        <label for="nev">Név</label>
        <br>
        <input type="text" id="diak_nev">
        <br>
        <br>

        <label for="email">E-mail</label>
        <br>
        <input type="text" id="diak_email">
        <br>
        <br>

        <label for="jelszo_egy">Jelszó</label>
        <br>
        <input type="password" id="diak_jelszo_egy">
        <br>
        <br>

        <label for="jelszo_ketto">Jelszó megerősítése</label>
        <br>
        <input type="password" id="diak_jelszo_ketto">
        <br>
        <br>

        <label for="szak">OM-azonosító</label>
        <br>
        <input type="text" id="om_azonosito">
        <br>
        <br>

        <button class="regisztracios_gomb" id="diak_gomb" onclick="kiertekelesDiak()" disabled>Fiók regisztrálása</button>
        <button class="nincs_regisztracio" onclick="kiDiakFelulet()">Nem regisztrálok</button>
    </div>`
}

let tanarNev = ''
let tanarJelszo = ''

let diakNev = ''
let diakJelszo = ''

const specialisKarakterek = [',', '.', '-', '?', ':', '_', ';', '>', '*']

const pipa_tanar_nev = document.createElement('img')
const pipa_tanar_email = document.createElement('img')
const pipa_tanar_jelszo_egy = document.createElement('img')
const pipa_tanar_jelszo_ketto = document.createElement('img')

pipa_tanar_jelszo_ketto.src = './kepek/pipa.png'
pipa_tanar_jelszo_ketto.classList.add('pipa')

document.addEventListener('keyup', adatokHitelesitese)

function adatokHitelesitese()
{
    let nev = document.getElementById('tanar_nev').value
    let email = document.getElementById('tanar_email').value
    let jelszoEgy = document.getElementById('tanar_jelszo_egy').value
    let jelszoKetto = document.getElementById('tanar_jelszo_ketto').value
    let regisztraciosGomb = document.getElementById('tanar_gomb')
    
    let talaltSpecialisKarakter = false

    specialisKarakterek.forEach(elem => {
        if (elem === jelszoEgy[elem])
            {
                talaltSpecialisKarakter = true
            }
    });

    let helyesNev = /[A-Z]/.test(nev)
    let helyesEmail = email.includes('@') && email.includes('.')
    let helyesJelszoEgy = !talaltSpecialisKarakter && /[A-Z]/.test(jelszoEgy) && /[0-9]/.test(jelszoEgy)

    if (helyesNev)
        {
            pipa_tanar_nev.src = './kepek/pipa.png'
            pipa_tanar_nev.classList.add('pipa')

            document.getElementById('tanar_nev_pipa').appendChild(pipa_tanar_nev)
        } else
            {
                document.getElementById('tanar_nev_pipa').removeChild(pipa_tanar_nev)
            }
    if (helyesEmail)
        {
            pipa_tanar_email.src = './kepek/pipa.png'
            pipa_tanar_email.classList.add('pipa')

            document.getElementById('tanar_email_pipa').appendChild(pipa_tanar_email)
        } else
            {
                document.getElementById('tanar_email_pipa').removeChild(pipa_tanar_email)
            }
    if (helyesJelszoEgy)
        {
            pipa_tanar_jelszo_egy.src = './kepek/pipa.png'
            pipa_tanar_jelszo_egy.classList.add('pipa')

            document.getElementById('tanar_jelszo_egy_pipa').appendChild(pipa_tanar_jelszo_egy)
        } else
            {
                document.getElementById('tanar_jelszo_egy_pipa').removeChild(pipa_tanar_jelszo_egy)
            }
}

//#endregion

//#region Órarend létrehozása, kezelése

function orarendLetrehozas()
{
    fo.innerHTML =
    `<div class="keret_fo">
        <h1 class="cimek">11.B</h1>

        <table>
            <tr>
                <td></td>
                <td><b>0</b><br>7:15-7:55</td>
                <td><b>1</b><br>8:00-8:45</td>
                <td><b>2</b><br>8:55-9:40</td>
                <td><b>3</b><br>9:50-10:35</td>
                <td><b>4</b><br>10:45-11:30</td>
                <td><b>5</b><br>11:45-12:30</td>
                <td><b>6</b><br>12:50-13:35</td>
                <td><b>7</b><br>13:40-14:20</td>
                <td><b>8</b><br>14:25-15:05</td>
            </tr>

            <tr>
                <td rowspan="2"><strong>Hétfő</strong></td>
                <td rowspan="2"></td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Osztályfőnöki', 'Blahó-Kiss Katalin', '18', 32, 'egész osztály')">köznev</td>
                <td class="attr" onclick="oraTulajdonsagok('Matematika', 'Borbély Katalin', '6', 16, 'haladó angol')">mat</td>
                <td class="attr" onclick="oraTulajdonsagok('Angol', 'Kristó Ágnes', '21', 16, 'haladó angol')">ang</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Testnevelés', 'Soltész Gábor', 'Tornaterem', 32, 'egész osztály')">test</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Irodalom', 'Blahó-Kiss Katalin', '18', 32, 'egész osztály')">iro</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Történelem', 'Pádár Miklós', '1', 32, 'egész osztály')">tört</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Fizika', 'Marczin Attila', '9', 32, 'egész osztály')">fiz</td>
                <td rowspan="2"></td>
            </tr>

            <tr>
                <td class="attr" onclick="oraTulajdonsagok('Matematika', 'Kovács Zsuzsanna', '7', 16, 'kezdő angol')">mat</td>
                <td class="attr" onclick="oraTulajdonsagok('Angol', 'Bodócsné Dér Krisztina', '17', 16, 'kezdő angol')">ang</td>
            </tr>

            <tr>
                <td rowspan="4"><strong>Kedd</strong></td>
                <td rowspan="4"></td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Nyelvtan', 'Blahó-Kiss Katalin', '38', 16, 'haladó angol')">nyt</td>
                <td class="attr" rowspan="2" colspan="2" onclick="oraTulajdonsagok('Szakmai angol', 'Válócziné Tóth Ildikó', '35', 16, 'haladó angol')">szang</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Matematika', 'Borbély Katalin', '6', 'haladó angol')">mat</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Angol', 'Kristó Ágnes', '8', 16, 'haladó angol')">ang</td>
                <td class="attr" colspan="2" onclick="oraTulajdonsagok('Webprogramozás', 'Árvai Anita', '23', 16, 'haladó angol')">webpr</td>
                <td rowspan="4"></td>
            </tr>

            <tr>
                <td class="attr" colspan="2" onclick="oraTulajdonsagok('Webprogramozás', 'Kun Dániel', '25', 16, 'kezdő angol')">webpr</td>
            </tr>

            <tr>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Angol', 'Bodócsné Dér Krisztina', '5', 16, 'kezdő angol')">ang</td>
                <td class="attr" rowspan="2" colspan="2" onclick="oraTulajdonsagok('Asztali alkalmazás-fejlesztés', 'Tüskéné Dombi Zsusanna', '24', 16, 'kezdő angol')">aalkf</td>
                <td class="attr" rowspan="2" colspan="2" onclick="oraTulajdonsagok('Adatbázis-kezelés', 'Horváth Zoltán', '23', 16, 'kezdő angol')">adatbkl</td>
                <td class="attr" onclick="oraTulajdonsagok('Webprogramozás', 'Árvai Anita', '23', 16, 'haladó angol')">webpr</td>
                <td rowspan="2"></td>
            </tr>

            <tr>
                <td class="attr" onclick="oraTulajdonsagok('Webprogramozás', 'Kun Dániel', '25', 16, 'kezdő angol')">webpr</td>
            </tr>

            <tr>
                <td rowspan="2"><strong>Szerda</strong></td>
                <td rowspan="2"></td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Fizika', 'Marczin Attila', '11', 32, 'egész osztály')">fiz</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Hittan', 'Lukács Edina', '11', 32, 'egész osztály')">hit</td>
                <td class="attr" onclick="oraTulajdonsagok('Angol', 'Kristó Ágnes', '5', 16, 'haladó angol')">ang</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Történelem', 'Pádár Miklós', '1', 32, 'egész osztály')">tört</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Irodalom', 'Blahó-Kiss Katalin', '18', 32, 'egész osztály')">iro</td>
                <td class="attr" colspan="2" onclick="oraTulajdonsagok('Asztali alkalmazás-fejlesztés', 'Tüskéné Dombi Zsuzsanna', '25', 16, 'haladó angol')">aalkf</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Testnevelés', 'Soltész Gábor', 'Tornaterem', 32, 'egész osztály')">test</td>
            </tr>

            <tr>
                <td class="attr" onclick="oraTulajdonsagok('Angol', 'Bodócsné Dér Krisztina', '37', 16, 'kezdő csoport')">ang</td>
                <td class="attr" onclick="oraTulajdonsagok('Nyelvtan', 'Blahó-Kiss Katalin', '18', 16, 'kezdő angol')">nyt</td>
                <td class="attr" onclick="oraTulajdonsagok('Matematika', 'Kovács Zsuzsanna', '7', 16, 'kezdő angol')">mat</td>
            </tr>

            <tr>
                <td rowspan="2"><strong>Csütörtök</strong></td>
                <td rowspan="2"></td>
                <td class="attr" colspan="2" onclick="oraTulajdonsagok('Webprogramozás', 'Árvai Anita', '23', 16, 'haladó angol')">webpr</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Irodalom', 'Blahó-Kiss Katalin', '18', 32, 'egész osztály')">iro</td>
                <td class="attr" colspan="2" onclick="oraTulajdonsagok('Adatbázis-kezelés', 'Horváth Zoltán', '25', 16, 'haladó angol')">adatbkl</td>
                <td class="attr" colspan="2" onclick="oraTulajdonsagok('Asztali alkalmazás-fejlesztés', 'Tüskéné Dombi Zsuzsanna', '24', 16, 'haladó angol')">aalkf</td>
                <td rowspan="2"></td>
            </tr>

            <tr>
                <td class="attr" colspan="2" onclick="oraTulajdonsagok('Webprogramozás', 'Kun Dániel', '22', 16, 'kezdő angol')">webpr</td>
                <td class="attr" colspan="2" onclick="oraTulajdonsagok('Asztali alkalmazás-fejlesztés', 'Tüskéné Dombi Zsuzsanna', '24', 16, 'kezdő angol')">aalkf</td>
                <td class="attr" colspan="2" onclick="oraTulajdonsagok('Szakmai angol', 'Tátrai Krisztina', '35', 16, 'kezdő angol')">szang</td>
            </tr>

            <tr>
                <td rowspan="2"><strong>Péntek</strong></td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Hittan', 'Lukács Edina', '3', 32, 'egész osztály')">hit</td>
                <td class="attr" onclick="oraTulajdonsagok('Matematika', 'Borbély Katalin', '6', 16, 'haladó angol')">mat</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Történelem', 'Pádár Miklós', '1', 32, 'egész osztály')">tört</td>
                <td class="attr" onclick="oraTulajdonsagok('Angol', 'Kristó Ágnes', '28', 16, 'haladó angol')">ang</td>
                <td class="attr" rowspan="2" onclick="oraTulajdonsagok('Testnevelés', 'Soltész Gábor', 'Tornaterem', 32, 'egész osztály')">test</td>
                <td rowspan="2"></td>
                <td rowspan="2"></td>
                <td rowspan="2"></td>
                <td rowspan="2"></td>
            </tr>

            <tr>
                <td class="attr" onclick="oraTulajdonsagok('Matematika', 'Kovács Zsuzsanna', '7', 16, 'kezdő angol')">mat</td>
                <td class="attr" onclick="oraTulajdonsagok('Angol', 'Bodócsné Dér Krisztina', '5', 16, 'kezdő angol')">ang</td>
            </tr>
        </table>

        <h1 class="cimek">2025-2026</h1>
    </div>`
}

//#endregion

//#region Adatok törlése a main-ből

function adatokTorlese()
{
    fo.innerHTML =
    `<div class="keret_fo">
        <p>Nincs sürgős teendő!</p>
    </div>`
}

//#endregion

//#region A tanóra tulajdonságainak megjelenítése

function oraTulajdonsagok(ora, tanar, terem, letszam, csoport)
{
    let oraMegnevezes = ora
    let tanarMegnevezes = tanar
    let teremMegnevezes = terem
    let letszamMegnevezes = letszam
    let csoportMegnevezes = csoport

    fo.innerHTML =
    `<div class="keret_tulajdonsagok">
        <img src="./kepek/bezaras.png" alt="Bezárás" title="A nézet bezárásához kattintson ide!" id="bezaras" onclick="orarendLetrehozas()">

        <h1 class="cimek">${oraMegnevezes}</h1>
        <hr>
        <h2><b>Tanár</b>:\t${tanarMegnevezes}</h2>
        <hr>
        <h2><b>Terem</b>:\t${teremMegnevezes}</h2>
        <hr>
        <h2><b>Létszám</b>:\t${letszamMegnevezes}</h2>
        <hr>
        <h2><b>Csoport</b>:\t${csoportMegnevezes}</h2>
    </div>`
}

//#endregion

//#region A bejelentkezés nélküli oldal legenerálása

function kiTanariFelulet()
{
    oldalcim.textContent = 'TÁBLA - Adminisztrációs felület (nincs bejelentkezve)'

    logocim.title = 'TÁBLA - Adminisztrációs felület (nincs bejelentkezve)'

    focim.textContent = 'TÁBLA - Nincs bejelentkezve!'

    focim.title = 'A tanulók, illetve az osztályzatok kezeléséhez jelentkezzen be vagy regisztráljon fiókot!'

    navigacio.innerHTML =
    `<div class="keret_navigacio">
        <button disabled>Tanuló kiválasztása</button>
    </div>

    <div class="keret_navigacio">
        <button onclick="orarendLetrehozas()">Órarend</button>
    </div>

    <div class="keret_navigacio">
        <button disabled>Osztályzatok lekérdezése</button>
    </div>

    <div class="keret_navigacio">
        <button onclick="adatokTorlese()">Adatok törlése</button>
    </div>
        
    <div class="keret_navigacio">
        <img src="./kepek/bejelentkezes.png" alt="Bejelentkezés." title="Bejelentkezés létező fiókkal." class="logreg">

        <img src="./kepek/regisztracio.png" alt="Regisztráció." title="Regisztráció, új fiók létrehozása." class="logreg">
    </div>`

    fo.innerHTML =
    `<div class="keret_fo">
        <p>Nincs sürgős teendő!</p>
    </div>`
}

//#endregion