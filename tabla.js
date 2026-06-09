//#region Deklarálás és inicializálás

let oldalcim = document.getElementById('oldalcim')
let logocim = document.getElementById('logo')
let focim = document.getElementById('focim')
let navigacio = document.getElementById('navigacio')
let fo = document.getElementById('fo')

const specialisKarakterek = [',', '.', '-', '?', ':', '_', ';', '>', '*']

const tanulokNeve = ['Berta Ádám', 'Bibók Lili', 'Csépány Levente', 'Geczki Andor László', 'Hordós Milán', 'Kerek Ádám', 'Kulcsár Milán', 'Nágel Attila', 'Ozsvárt Gábor', 'Román Kristóf Gergely', 'Szabó Gergely', 'Szabó Imre Zsolt', 'Szőcs Marcell', 'Tóth Majlát']
const szakok = ['irodalom-nyelvtan', 'matematika', 'angol', 'testnevelés', 'történelem', 'fizika', 'informatika', 'hittan']

let bejelentkezesiAdatokTanar = []
let bejelentkezesiAdatokDiak = []

let jegyeim = {
    "irodalom-nyelvtan": [],
    "matematika": [],
    "angol": [],
    "testnevelés": [],
    "történelem": [],
    "fizika": [],
    "informatika": [],
    "hittan": [],
}

let tanulmanyiAtlag = null
let sajatAtlag = null
let osszegTanulmanyi = null
let osszegSajat = null
let darabszamTanulmanyi = null
let darabszamSajat = null

const pipa_tanar_nev = document.createElement('img')
const pipa_tanar_email = document.createElement('img')
const pipa_tanar_jelszo_egy = document.createElement('img')
const pipa_tanar_jelszo_ketto = document.createElement('img')

const pipa_diak_nev = document.createElement('img')
const pipa_diak_email = document.createElement('img')
const pipa_diak_jelszo_egy = document.createElement('img')
const pipa_diak_jelszo_ketto = document.createElement('img')
const pipa_om_azonosito = document.createElement('img')

document.addEventListener('keyup', tanariAdatokHitelesitese)
document.addEventListener('keyup', diakAdatokHitelesitese)

//#endregion

//#region Regisztrációs felület létrehozása, működtetése

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

        <label for="tanar_nev" id="tanar_nev_pipa">Név</label>
        <br>
        <input type="text" id="tanar_nev">
        <br>
        <br>

        <label for="tanar_email" id="tanar_email_pipa">E-mail</label>
        <br>
        <input type="text" id="tanar_email">
        <br>
        <br>

        <label for="szak">Szak kiválasztása</label>
        <br>
        <select id="szak">
            <option value="irodalom-nyelvtan">irodalom-nyelvtan</option>
            <option value="matematika">matematika</option>
            <option value="angol">angol</option>
            <option value="testnevelés">testnevelés</option>
            <option value="történelem">történelem</option>
            <option value="fizika">fizika</option>
            <option value="informatika">informatika</option>
            <option value="hittan">hittan</option>
        </select>
        <br>
        <br>

        <label for="tanar_jelszo_egy" id="tanar_jelszo_egy_pipa">Jelszó</label>
        <br>
        <input type="password" id="tanar_jelszo_egy">
        <br>
        <br>

        <label for="tanar_jelszo_ketto" id="tanar_jelszo_ketto_pipa">Jelszó megerősítése</label>
        <br>
        <input type="password" id="tanar_jelszo_ketto">
        <br>
        <br>

        <button class="regisztracios_gomb" id="tanar_gomb" onclick="bejelentkezesiFeluletTanar()" disabled>Fiók regisztrálása</button>
        <button class="nincs_regisztracio" id="nem_regisztracio_1" onclick="kiTanariFelulet()">Nem regisztrálok</button>
    
        <p id="jelzes_1"></p>
    </div>
    
    <div class="keret_regisztracio">
        <h1 class="cimek">Diák fiók felvétele</h1>

        <label for="diak_nev" id="diak_nev_pipa">Név</label>
        <br>
        <input type="text" id="diak_nev">
        <br>
        <br>

        <label for="diak_email" id="diak_email_pipa">E-mail</label>
        <br>
        <input type="text" id="diak_email">
        <br>
        <br>

        <label for="diak_jelszo_egy" id="diak_jelszo_egy_pipa">Jelszó</label>
        <br>
        <input type="password" id="diak_jelszo_egy">
        <br>
        <br>

        <label for="diak_jelszo_ketto" id="diak_jelszo_ketto_pipa">Jelszó megerősítése</label>
        <br>
        <input type="password" id="diak_jelszo_ketto">
        <br>
        <br>

        <label for="om_azonosito" id="om_azonosito_pipa">OM-azonosító</label>
        <br>
        <input type="text" id="om_azonosito">
        <br>
        <br>

        <button class="regisztracios_gomb" id="diak_gomb" onclick="bejelentkezesiFeluletDiak()" disabled>Fiók regisztrálása</button>
        <button class="nincs_regisztracio" id="nem_regisztracio_2" onclick="kiDiakFelulet()">Nem regisztrálok</button>

        <p id="jelzes_2"></p>
    </div>`
}

//#region Speciális karakter keresése a jelszóban

function karakterKereses(talaltSpecialisKarakter, jelszoEgy, specialisKarakterek)
{
    for (let i = 0; i < jelszoEgy.length; i++)
        {
            let indexelo = 0

            while (indexelo < specialisKarakterek.length && specialisKarakterek[indexelo] !== jelszoEgy[i])
                {
                    indexelo++
                }

            if (indexelo < specialisKarakterek.length)
                {
                    talaltSpecialisKarakter = true
                }
        }

        return talaltSpecialisKarakter
}

//#endregion

//#region Tanári blokk hitelesítése

function tanariAdatokHitelesitese()
{
    let talaltSpecialisKarakter = false

    let nev = document.getElementById('tanar_nev').value
    let email = document.getElementById('tanar_email').value
    let jelszoEgy = document.getElementById('tanar_jelszo_egy').value
    let jelszoKetto = document.getElementById('tanar_jelszo_ketto').value
    let szak = document.getElementById('szak').value
    let regisztraciosGomb = document.getElementById('tanar_gomb')

    talaltSpecialisKarakter = karakterKereses(talaltSpecialisKarakter, jelszoEgy, specialisKarakterek)

    let helyesNev = /[A-Z]/.test(nev)
    let helyesEmail = email.includes('@') && email.includes('.')
    let helyesJelszoEgy = talaltSpecialisKarakter === true && /[A-Z]/.test(jelszoEgy) && /[0-9]/.test(jelszoEgy) && jelszoEgy.length >= 6
    let helyesJelszoKetto = jelszoEgy === jelszoKetto

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
    if (helyesJelszoKetto)
        {
            pipa_tanar_jelszo_ketto.src = './kepek/pipa.png'
            pipa_tanar_jelszo_ketto.classList.add('pipa')

            document.getElementById('tanar_jelszo_ketto_pipa').appendChild(pipa_tanar_jelszo_ketto)
        } else
            {
                document.getElementById('tanar_jelszo_ketto_pipa').removeChild(pipa_tanar_jelszo_ketto)
            }
    if (helyesNev && helyesEmail && helyesJelszoEgy && helyesJelszoKetto)
        {
            regisztraciosGomb.disabled = false
        } else
            {
                regisztraciosGomb.disabled = true
            }
            
    bejelentkezesiAdatokTanar[0] = nev
    bejelentkezesiAdatokTanar[1] = jelszoEgy
    bejelentkezesiAdatokTanar[2] = szak

    console.log(bejelentkezesiAdatokTanar)
}

//#endregion

//#region Diák blokk hitelesítése

function diakAdatokHitelesitese()
{
    let talaltSpecialisKarakter = false

    let nev = document.getElementById('diak_nev').value
    let email = document.getElementById('diak_email').value
    let jelszoEgy = document.getElementById('diak_jelszo_egy').value
    let jelszoKetto = document.getElementById('diak_jelszo_ketto').value
    let oktatasiAzonosito = document.getElementById('om_azonosito').value
    let regisztraciosGomb = document.getElementById('diak_gomb')

    talaltSpecialisKarakter = karakterKereses(talaltSpecialisKarakter, jelszoEgy, specialisKarakterek)

    let helyesNev = /[A-Z]/.test(nev)
    let helyesEmail = email.includes('@') && email.includes('.')
    let helyesJelszoEgy = talaltSpecialisKarakter === true && /[A-Z]/.test(jelszoEgy) && /[0-9]/.test(jelszoEgy) && jelszoEgy.length >= 6
    let helyesJelszoKetto = jelszoEgy === jelszoKetto
    let helyesOktatasiAzonosito = oktatasiAzonosito.length === 11

    if (helyesNev)
        {
            pipa_diak_nev.src = './kepek/pipa.png'
            pipa_diak_nev.classList.add('pipa')

            document.getElementById('diak_nev_pipa').appendChild(pipa_diak_nev)
        } else
            {
                document.getElementById('diak_nev_pipa').removeChild(pipa_diak_nev)
            }
    if (helyesEmail)
        {
            pipa_diak_email.src = './kepek/pipa.png'
            pipa_diak_email.classList.add('pipa')

            document.getElementById('diak_email_pipa').appendChild(pipa_diak_email)
        } else
            {
                document.getElementById('diak_email_pipa').removeChild(pipa_diak_email)
            }
    if (helyesJelszoEgy)
        {
            pipa_diak_jelszo_egy.src = './kepek/pipa.png'
            pipa_diak_jelszo_egy.classList.add('pipa')

            document.getElementById('diak_jelszo_egy_pipa').appendChild(pipa_diak_jelszo_egy)
        } else
            {
                document.getElementById('diak_jelszo_egy_pipa').removeChild(pipa_diak_jelszo_egy)
            }
    if (helyesJelszoKetto)
        {
            pipa_diak_jelszo_ketto.src = './kepek/pipa.png'
            pipa_diak_jelszo_ketto.classList.add('pipa')

            document.getElementById('diak_jelszo_ketto_pipa').appendChild(pipa_diak_jelszo_ketto)
        } else
            {
                document.getElementById('diak_jelszo_ketto_pipa').removeChild(pipa_diak_jelszo_ketto)
            }
    if (helyesOktatasiAzonosito)
        {
            pipa_om_azonosito.src = './kepek/pipa.png'
            pipa_om_azonosito.classList.add('pipa')

            document.getElementById('om_azonosito_pipa').appendChild(pipa_om_azonosito)
        } else
            {
                document.getElementById('om_azonosito_pipa').removeChild(pipa_om_azonosito)
            }
    if (helyesNev && helyesEmail && helyesJelszoEgy && helyesJelszoKetto && helyesOktatasiAzonosito)
        {
            regisztraciosGomb.disabled = false
        } else
            {
                regisztraciosGomb.disabled = true
            }

    bejelentkezesiAdatokDiak[0] = nev
    bejelentkezesiAdatokDiak[1] = jelszoEgy

    console.log(bejelentkezesiAdatokDiak)
}

//#endregion

//#endregion

//#region Bejelentkezési felület generálása, kezelése

function bejelentkezesiFeluletTanar()
{
    let nemRegisztralEgyGomb = document.getElementById('nem_regisztracio_1')
    let nemRegisztralKettoGomb = document.getElementById('nem_regisztracio_2')
    let visszajelzes = document.getElementById('jelzes_1')

    nemRegisztralEgyGomb.disabled = true
    nemRegisztralKettoGomb.disabled = true

    visszajelzes.textContent = 'Sikeres regisztráció!'

    setTimeout(() => {
        fo.innerHTML = ''

        oldalcim.textContent = 'TÁBLA - Bejelentkezési felület'

        logocim.title = 'TÁBLA - Bejelentkezési felület'

        focim.textContent = 'TÁBLA - Bejelentkezési felület'

        focim.title = 'Bejelentkezés létező tanári vagy diák fiókkal az oldalra.'

        navigacio.innerHTML =
        `<marquee scrolldelay="60">Üdvözöljük a bejelentkezési felületen! Az alább látható menüben be tud jelentkezni tanárként vagy diákként egy létező fiókkal. Abban az esetben, ha még nem regisztrált az oldalra, vissza tud lépni a regisztrációs felületre.</marquee>`

        fo.innerHTML =
        `<div class="keret_regisztracio">
            <h1 class="cimek">Bejelentkezés létező fiókkal</h1>

            <label for="bejelentkezesi_nev">Név</label>
            <br>
            <input type="text" id="bejelentkezesi_nev">
            <br>
            <br>

            <label for="bejelentkezesi_jelszo">Jelszó</label>
            <br>
            <input type="password" id="bejelentkezesi_jelszo">
            <br>
            <br>

            <button class="bejelentkezesi_gomb" id="bejelentkezes" onclick="bejelentkezesEllenorzesTanar()">Bejelentkezés</button>
            <button class="nincs_fiok" id="nincs_fiok_1" onclick="kijelentkezes()">Nincs fiókom</button>
            <br>
            <br>

            <p id="jelzes"></p>
        </div>`
    }, 3000);
}

function bejelentkezesiFeluletDiak()
{
    let nemRegisztralEgyGomb = document.getElementById('nem_regisztracio_1')
    let nemRegisztralKettoGomb = document.getElementById('nem_regisztracio_2')
    let visszajelzes = document.getElementById('jelzes_2')

    nemRegisztralEgyGomb.disabled = true
    nemRegisztralKettoGomb.disabled = true

    visszajelzes.textContent = 'Sikeres regisztráció!'

    setTimeout(() => {
        fo.innerHTML = ''

        oldalcim.textContent = 'TÁBLA - Bejelentkezési felület'

        logocim.title = 'TÁBLA - Bejelentkezési felület'

        focim.textContent = 'TÁBLA - Bejelentkezési felület'

        focim.title = 'Bejelentkezés létező tanári vagy diák fiókkal az oldalra.'

        navigacio.innerHTML =
        `<marquee scrolldelay="60">Üdvözöljük a bejelentkezési felületen! Az alább látható menüben be tud jelentkezni tanárként vagy diákként egy létező fiókkal. Abban az esetben, ha még nem regisztrált az oldalra, vissza tud lépni a regisztrációs felületre.</marquee>`

        fo.innerHTML =
        `<div class="keret_regisztracio">
            <h1 class="cimek">Bejelentkezés létező fiókkal</h1>

            <label for="bejelentkezesi_nev">Név</label>
            <br>
            <input type="text" id="bejelentkezesi_nev">
            <br>
            <br>

            <label for="bejelentkezesi_jelszo">Jelszó</label>
            <br>
            <input type="password" id="bejelentkezesi_jelszo">
            <br>
            <br>

            <button class="bejelentkezesi_gomb" id="bejelentkezes" onclick="bejelentkezesEllenorzesDiak()">Bejelentkezés</button>
            <button class="nincs_fiok" id="nincs_fiok_2" onclick="kijelentkezes()">Nincs fiókom</button>
            <br>
            <br>

            <p id="jelzes"></p>
        </div>`
    }, 3000);
}

function bejelentkezesEllenorzesTanar()
{
    let nev = document.getElementById('bejelentkezesi_nev').value
    let jelszo = document.getElementById('bejelentkezesi_jelszo').value
    let visszajelzes = document.getElementById('jelzes')
    let gomb = document.getElementById('bejelentkezes')
    let nincsFiok = document.getElementById('nincs_fiok_1')

    if (nev === bejelentkezesiAdatokTanar[0] && jelszo === bejelentkezesiAdatokTanar[1])
        {
            nincsFiok.disabled = true

            visszajelzes.textContent = 'Sikeres bejelentkezés!'

            setTimeout(() => {
                oldalcim.textContent = `TÁBLA - Adminisztrációs felület`

                logocim.title = 'TÁBLA - Adminisztrációs felület'

                focim.textContent = `TÁBLA - ${bejelentkezesiAdatokTanar[0]}`

                focim.title = 'Tanárként lehetősége nyílik a tanulók kiválasztására, osztályzatainak kezelésére, illetve az órarend megtekintésére.'

                navigacio.innerHTML =
                `<div class="keret_navigacio">
                    <button onclick="tanuloKivalasztasa()">Tanuló kiválasztása</button>
                </div>

                <div class="keret_navigacio">
                    <button onclick="orarendLetrehozas()">Órarend</button>
                </div>

                <div class="keret_navigacio">
                    <button onclick="adatokTorlese()">Adatok törlése</button>
                </div>

                <div class="keret_navigacio">
                    <img src="./kepek/kijelentkezes.png" alt="Kijelentkezés." title="Kijelentkezés a fiókból." class="logreg" onclick="kijelentkezes()">
                </div>`

                fo.innerHTML =
                `<div class="keret_fo">
                    <p>Nincs sürgős teendő!</p>
                </div>`
            }, 3000);
        } else if (nev === '' || jelszo === '')
            {
                visszajelzes.textContent = 'Mindkét mező kitöltése kötelező!'

                setTimeout(() => {
                    visszajelzes.textContent = ''
                }, 3000);
            } else
                {
                    visszajelzes.textContent = 'Sikertelen bejelentkezés!'

                    setTimeout(() => {
                        visszajelzes.textContent = ''
                    }, 3000);
                }
}

function bejelentkezesEllenorzesDiak()
{
    let nev = document.getElementById('bejelentkezesi_nev').value
    let jelszo = document.getElementById('bejelentkezesi_jelszo').value
    let visszajelzes = document.getElementById('jelzes')
    let gomb = document.getElementById('bejelentkezes')
    let nincsFiok = document.getElementById('nincs_fiok_2')

    if (nev === bejelentkezesiAdatokDiak[0] && jelszo === bejelentkezesiAdatokDiak[1])
        {
            nincsFiok.disabled = true

            visszajelzes.textContent = 'Sikeres bejelentkezés!'

            setTimeout(() => {
                oldalcim.textContent = `TÁBLA - Tanulói felület`

                logocim.title = 'TÁBLA - Tanulói felület'

                focim.textContent = `TÁBLA - ${bejelentkezesiAdatokDiak[0]}`

                focim.title = 'Diákként lehetősége van lekérni jelenlegi osztályzatait, illetve megtekinteni az órarendjét.'

                navigacio.innerHTML =
                `<div class="keret_navigacio">
                    <button onclick="osztalyzatokLekerese()">Osztályzatok lekérése</button>
                </div>

                <div class="keret_navigacio">
                    <button onclick="orarendLetrehozas()">Órarend</button>
                </div>

                <div class="keret_navigacio">
                    <button onclick="adatokTorlese()">Adatok törlése</button>
                </div>

                <div class="keret_navigacio">
                    <img src="./kepek/kijelentkezes.png" alt="Kijelentkezés." title="Kijelentkezés a fiókból." class="logreg" onclick="kijelentkezes()">
                </div>`

                fo.innerHTML =
                `<div class="keret_fo">
                    <p>Nincs sürgős teendő!</p>
                </div>`
            }, 3000);
        } else if (nev === '' || jelszo === '')
            {
                visszajelzes.textContent = 'Mindkét mező kitöltése kötelező!'

                setTimeout(() => {
                    visszajelzes.textContent = ''
                }, 3000);
            } else
                {
                    visszajelzes.textContent = 'Sikertelen bejelentkezés!'

                    setTimeout(() => {
                        visszajelzes.textContent = ''
                    }, 3000);
                }
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

//#region A bejelentkezés nélküli oldal legenerálása (tanári felület)

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
        <button onclick="adatokTorlese()">Adatok törlése</button>
    </div>
        
    <div class="keret_navigacio">
        <img src="./kepek/regisztracio.png" alt="Regisztráció." title="Regisztráció, új fiók létrehozása." class="logreg" onclick="feluletGeneralas()">
    </div>`

    fo.innerHTML =
    `<div class="keret_fo">
        <p>Nincs sürgős teendő!</p>
    </div>`
}

//#endregion

//#region A bejelentkezés nélküli oldal legenerálása (diák felület)

function kiDiakFelulet()
{
    oldalcim.textContent = 'TÁBLA - Tanulói felület (nincs bejelentkezve)'

    logocim.title = 'TÁBLA - Tanulói felület (nincs bejelentkezve)'

    focim.textContent = 'TÁBLA - Nincs bejelentkezve!'

    focim.title = 'A jegyei megtekintéséhez jelentkezzen be vagy regisztráljon fiókot!'

    navigacio.innerHTML =
    `<div class="keret_navigacio">
        <button disabled>Osztályzatok lekérdezése</button>
    </div>
    
    <div class="keret_navigacio">
        <button onclick="orarendLetrehozas()">Órarend</button>
    </div>

    <div class="keret_navigacio">
        <button onclick="adatokTorlese()">Adatok törlése</button>
    </div>
        
    <div class="keret_navigacio">
        <img src="./kepek/regisztracio.png" alt="Regisztráció." title="Regisztráció, új fiók létrehozása." class="logreg" onclick="feluletGeneralas()">
    </div>`

    fo.innerHTML =
    `<div class="keret_fo">
        <p>Nincs sürgős teendő!</p>
    </div>`
}

//#endregion

//#region Easy kijelentkezés

function kijelentkezes()
{
    bejelentkezesiAdatokTanar = []
    bejelentkezesiAdatokDiak = []

    feluletGeneralas()

    console.log(bejelentkezesiAdatokTanar, bejelentkezesiAdatokDiak)
}

//#endregion

//#region Tanulók kiválasztása a tanári felületen

function tanuloKivalasztasa()
{
    fo.innerHTML =
    `<div class="keret_fo">
        <h1 class="cimek">Osztályzatok beírása</h1>

        <p id="tantargy">Tantárgy: ${bejelentkezesiAdatokTanar[2]}</p>

        <table id="jegyek_tabla">
            <tr class="jegyek">
                <td class="nev"><b>Név</b></td>
                <td class="osztalyzatok">
                    <p class="hozzaadott_jegyek_cim"><b>Jegyek</b></p>
                </td>
                <td colspan="5"><b>Osztályzat</b></td>
            </tr>
        </table>

        <p id="atlag_visszajelzes"></p>
    </div>`

    let tablazat = document.getElementById('jegyek_tabla')

    for (let i = 0; i < tanulokNeve.length; i++)
        {
            tablazat.innerHTML +=
            `<tr class="jegyek">
                <td class="nev"><strong>${tanulokNeve[i]}</strong></td>
                <td class="osztalyzatok" id="tanulo_${i}"></td>
                <td class="osztalyzat" onclick="jegyHozzaadas(${i}, 1)">1</td>
                <td class="osztalyzat" onclick="jegyHozzaadas(${i}, 2)">2</td>
                <td class="osztalyzat" onclick="jegyHozzaadas(${i}, 3)">3</td>
                <td class="osztalyzat" onclick="jegyHozzaadas(${i}, 4)">4</td>
                <td class="osztalyzat" onclick="jegyHozzaadas(${i}, 5)">5</td>
            </tr>`
        }
}

//#endregion

//#region Jegyek hozzáadása a tömbhöz és átlagszámítás

function jegyHozzaadas(index, jegy)
{
    document.getElementById(`tanulo_${index}`).innerHTML +=
    `<p class="hozzaadott_jegyek">${jegy}</p>`

    let atlagVisszajelzes = document.getElementById('atlag_visszajelzes')

    osszegTanulmanyi += jegy
    darabszamTanulmanyi++

    tanulmanyiAtlag = osszegTanulmanyi / darabszamTanulmanyi

    atlagVisszajelzes.innerHTML = `<b>Tanulmányi átlag:</b> <strong>${tanulmanyiAtlag.toFixed(2)}</strong>`

    if (index === 7)
        {
            jegyeim[bejelentkezesiAdatokTanar[2]].push(jegy)

            osszegSajat += jegy
            darabszamSajat++

            sajatAtlag = osszegSajat / darabszamSajat
        }

    console.log(jegyeim)
}

//#endregion

//#region Osztályzatok lekérése diákként

function osztalyzatokLekerese()
{
    fo.innerHTML =
    `<div class="keret_fo">
        <h1 class="cimek">${bejelentkezesiAdatokDiak[0]} osztályzatai</h1>

        <table id="jegyek_tabla">
            <tr class="jegyek">
                <td class="tantargy"><b>Tantárgy</b></td>
                <td class="osztalyzatok">
                    <p id="sajat_jegyek"><b>Jegyek</b></p>
                </td>
            </tr>
        </table>

        <p id="atlag_visszajelzes"></p>
    </div>`

    let tablazat = document.getElementById('jegyek_tabla')
    let atlagVisszajelzes = document.getElementById('atlag_visszajelzes')

    for (let i = 0; i < szakok.length; i++)
        {
            const szak = szakok[i]

            tablazat.innerHTML +=
            `<tr class="jegyek">
                <td class="nev"><strong>${szak}</strong></td>
                <td class="osztalyzatok" id="${szak}_jegyek"></td>
            </tr>`

            const jegyek = document.getElementById(`${szak}_jegyek`)

            let jegy = ''

            if (jegyeim[szak])
                {
                    const jegyekTomb = jegyeim[szak]

                    for (let j = 0; j < jegyekTomb.length; j++)
                        {
                            jegy +=
                            `<p class="hozzaadott_jegyek">${jegyeim[szak][j]}</p>`
                        }
                }

            jegyek.innerHTML += jegy
        }

    atlagVisszajelzes.innerHTML = `<b>Saját átlag:</b> <strong>${sajatAtlag.toFixed(2)}</strong>`
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