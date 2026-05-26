let szuloTartalom = document.getElementById('parent')

szuloTartalom.innerHTML =
`<div class="keret_fo">
    <p>Nincs sürgős teendő!</p>
</div>`

let gyermekTartalom = document.getElementsByClassName('keret_fo')

function orarendLetrehozas()
{
    szuloTartalom.innerHTML = ''

    szuloTartalom.innerHTML =
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
                <td rowspan="2" onclick="oraTulajdonsagok('Blahó-Kiss Katalin', '18', 32, 'egész osztály')">köznev</td>
                <td onclick="oraTulajdonsagok('Borbély Katalin', '6', 16, 'haladó angol')">mat</td>
                <td onclick="oraTulajdonsagok('Kristó Ágnes', '21', 16, 'haladó angol')">ang</td>
                <td rowspan="2" onclick="oraTulajdonsagok('Soltész Gábor', 'Tornaterem', 32, 'egész osztály')">test</td>
                <td rowspan="2" onclick="oraTulajdonsagok('Blahó-Kiss Katalin', '18', 32, 'egész osztály')">iro</td>
                <td rowspan="2" onclick="oraTulajdonsagok('Pádár Miklós', '1', 32, 'egész osztály')">tört</td>
                <td rowspan="2" onclick="oraTulajdonsagok('Marczin Attila', '9', 32, 'egész osztály')">fiz</td>
                <td rowspan="2"></td>
            </tr>

            <tr>
                <td onclick="oraTulajdonsagok('Kovács Zsuzsanna', '7', 16, 'kezdő angol')">mat</td>
                <td onclick="oraTulajdonsagok('Bodócsné Dér Krisztina', '17', 16, 'kezdő angol')">ang</td>
            </tr>

            <tr>
                <td rowspan="4"><strong>Kedd</strong></td>
                <td rowspan="4"></td>
                <td rowspan="2" onclick="oraTulajdonsagok('Blahó-Kiss Katalin', '38', 16, 'haladó angol')">nyt</td>
                <td rowspan="2" colspan="2" onclick="oraTulajdonsagok('Válócziné Tóth Ildikó', '35', 16, 'haladó angol')">szang</td>
                <td rowspan="2" onclick="oraTulajdonsagok('Borbély Katalin', '6', 'haladó angol')">mat</td>
                <td rowspan="2" onclick="oraTulajdonsagok('Kristó Ágnes', '8', 16, 'haladó angol')">ang</td>
                <td colspan="2" onclick="oraTulajdonsagok('Árvai Anita', '23', 16, 'haladó angol')">webpr</td>
                <td rowspan="4"></td>
            </tr>

            <tr>
                <td colspan="2" onclick="oraTulajdonsagok('Kun Dániel', '25', 16, 'kezdő angol')">webpr</td>
            </tr>

            <tr>
                <td rowspan="2" onclick="oraTulajdonsagok('Bodócsné Dér Krisztina', '5', 16, kezdő angol)">ang</td>
                <td rowspan="2" colspan="2" onclick="oraTulajdonsagok('Tüskéné Dombi Zsusanna', '24', 16, 'kezdő angol')">aalkf</td>
                <td rowspan="2" colspan="2" onclick="oraTulajdonsagok('Horváth Zoltán', '23', 16, 'kezdő angol')">adatbkl</td>
                <td onclick="oraTulajdonsagok('Árvai Anita', '23', 16, 'haladó angol')">webpr</td>
                <td rowspan="2"></td>
            </tr>

            <tr>
                <td onclick="oraTulajdonsagok('Kun Dániel', '25', 16, 'kezdő angol')">webpr</td>
            </tr>

            <tr>
                <td rowspan="2"><strong>Szerda</strong></td>
                <td rowspan="2"></td>
                <td rowspan="2" onclick="oraTulajdonsagok('Marczin Attila', '11', 32, 'egész osztály'")>fiz</td>
                <td rowspan="2" onclick="oraTulajdonsagok('Lukács Edina', '11', 32, 'egész osztály'")>hit</td>
                <td onclick="oraTulajdonsagok('Kristó Ágnes', '5', 16, 'haladó angol'")>ang</td>
                <td rowspan="2" onclick="oraTulajdonsagok('Pádár Miklós', '1', 32, 'egész osztály'")>tört</td>
                <td rowspan="2" onclick="oraTulajdonsagok('Blahó-Kiss Katalin', '18', 32, 'egész osztály'")>iro</td>
                <td colspan="2" onclick="oraTulajdonsagok('Tüskéné Dombi Zsuzsanna', '25', 16, 'haladó angol'")>aalkf</td>
                <td rowspan="2" onclick="oraTulajdonsagok('Soltész Gábor', 'Tornaterem', 32, 'egész osztály'")>test</td>
            </tr>

            <tr>
                <td onclick="oraTulajdonsagok('Bodócsné Dér Krisztina', '37', 16, 'kezdő csoport'")>ang</td>
                <td onclick="oraTulajdonsagok('Blahó-Kiss Katalin', '18', 16, 'kezdő angol'")>nyt</td>
                <td onclick="oraTulajdonsagok('Kovács Zsuzsanna', '7', 16, 'kezdő angol'")>mat</td>
            </tr>

            <tr>
                <td rowspan="2"><strong>Csütörtök</strong></td>
                <td rowspan="2"></td>
                <td colspan="2">webpr</td>
                <td rowspan="2">iro</td>
                <td colspan="2">adatbkl</td>
                <td colspan="2">aalkf</td>
                <td rowspan="2"></td>
            </tr>

            <tr>
                <td colspan="2">webpr</td>
                <td colspan="2">aalkf</td>
                <td colspan="2">szang</td>
            </tr>

            <tr>
                <td rowspan="2"><strong>Péntek</strong></td>
                <td rowspan="2">hit</td>
                <td>mat</td>
                <td rowspan="2">tört</td>
                <td>ang</td>
                <td rowspan="2">test</td>
                <td rowspan="2"></td>
                <td rowspan="2"></td>
                <td rowspan="2"></td>
                <td rowspan="2"></td>
            </tr>

            <tr>
                <td>mat</td>
                <td>ang</td>
            </tr>
        </table>

        <h1 class="cimek">2025-2026</h1>
    </div>`
}

function adatokTorlese()
{
    szuloTartalom.innerHTML =
    `<div class="keret_fo">
        <p>Nincs sürgős teendő!</p>
    </div>`
}

function oraTulajdonsagok()
{
    szuloTartalom.innerHTML = ''
}