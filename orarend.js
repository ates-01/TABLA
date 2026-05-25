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
                <td>mat</td>
                <td>ang</td>
                <td rowspan="2">test</td>
                <td rowspan="2">iro</td>
                <td rowspan="2">tört</td>
                <td rowspan="2">fiz</td>
                <td rowspan="2"></td>
            </tr>

            <tr>
                <td>mat</td>
                <td>ang</td>
            </tr>

            <tr>
                <td class="elso_oszlop" rowspan="4">Kedd</td>
                <td rowspan="4"></td>
                <td rowspan="2">nyt</td>
                <td rowspan="2" colspan="2">szang</td>
                <td rowspan="2">mat</td>
                <td rowspan="2">ang</td>
                <td colspan="2">webpr</td>
                <td rowspan="4"></td>
            </tr>

            <tr>
                <td colspan="2">webpr</td>
            </tr>

            <tr>
                <td rowspan="2">nyt</td>
                <td rowspan="2" colspan="2">aalkf</td>
                <td rowspan="2" colspan="2">adatbkl</td>
                <td>webpr</td>
                <td rowspan="2"></td>
            </tr>

            <tr>
                <td>webpr</td>
            </tr>

            <tr>
                <td class="elso_oszlop" rowspan="2">Szerda</td>
                <td rowspan="2"></td>
                <td rowspan="2">fiz</td>
                <td rowspan="2">hit</td>
                <td>ang</td>
                <td rowspan="2">tört</td>
                <td rowspan="2">iro</td>
                <td colspan="2">aalkf</td>
                <td rowspan="2">test</td>
            </tr>

            <tr>
                <td>ang</td>
                <td>nyt</td>
                <td>mat</td>
            </tr>

            <tr>
                <td class="elso_oszlop" rowspan="2">Csütörtök</td>
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
                <td class="elso_oszlop" rowspan="2">Péntek</td>
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
    </div>`
}

function adatokTorlese()
{
    szuloTartalom.innerHTML =
    `<div class="keret_fo">
        <p>Nincs sürgős teendő!</p>
    </div>`
}