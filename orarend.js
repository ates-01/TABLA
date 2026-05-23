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
        <h1 id="cim">11.B <sup>(2025-2026)</sup></h1>

        <table>
            <tr>
                <th></th>
                <th>0<br>7:15-7:55</th>
                <th>1<br>8:00-8:45</th>
                <th>2<br>8:55-9:40</th>
                <th>3<br>9:50-10:35</th>
                <th>4<br>10:45-11:30</th>
                <th>5<br>11:45-12:30</th>
                <th>6<br>12:50-13:35</th>
                <th>7<br>13:40-14:20</th>
                <th>8<br>14:25-15:05</th>
            </tr>

            <tr>
                <td class="elso_oszlop" rowspan="2">Hétfő</td>
                <td rowspan="2"></td>
                <td rowspan="2">köznev</td>
            </tr>

            <tr>
                <td class="elso_oszlop"></td>
                <td></td>
            </tr>
        </table>
    </div>`
}

function adatokTorlese()
{
    szuloTartalom.innerHTML =
    `<div class="keret_fo">
        <p>Nincs sürgős teendő!</p>
    </div>`
}