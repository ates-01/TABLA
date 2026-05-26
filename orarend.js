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
                <td class="elso_oszlop" rowspan="2"><strong>Hétfő</strong></td>
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
                <td class="elso_oszlop" rowspan="4"><strong>Kedd</strong></td>
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
                <td class="elso_oszlop" rowspan="2"><strong>Szerda</strong></td>
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
                <td class="elso_oszlop" rowspan="2"><strong>Csütörtök</strong></td>
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
                <td class="elso_oszlop" rowspan="2"><strong>Péntek</strong></td>
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