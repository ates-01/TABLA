let fo = document.getElementById('fo')

fo.innerHTML =
`<div class="keret_fo">
    <p>Nincs sürgős teendő!</p>
</div>`

function orarendLetrehozas()
{
    fo.innerHTML = ''

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

function adatokTorlese()
{
    fo.innerHTML =
    `<div class="keret_fo">
        <p>Nincs sürgős teendő!</p>
    </div>`
}

function oraTulajdonsagok(ora, tanar, terem, letszam, csoport)
{
    let oraMegnevezes = ora
    let tanarMegnevezes = tanar
    let teremMegnevezes = terem
    let letszamMegnevezes = letszam
    let csoportMegnevezes = csoport

    fo.innerHTML = ''

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