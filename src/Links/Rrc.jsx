import React, {useEffect} from 'react'


export const Rrc = ({setCatName}) => {
  useEffect(() => {
    document.title = 'Цены'
    setCatName('')
  }, [])
  return (
    <>
      <h1 className='rrc_title'>Рекомендуемые розничные цены</h1>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
          <tr>
            <th>Наименование вида приманки</th>
            <th>Рекомендуемая розничная цена</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>MOON раттлин-116 мм 48гр</td>
            <td>650</td>
          </tr>
          <tr>
            <td>MOON раттлин-88 мм 33гр</td>
            <td>550</td>
          </tr>
          <tr>
            <td>MOON раттлин-116 мм 48гр (голография)</td>
            <td>702</td>
          </tr>
          <tr>
            <td>АЙМА раттлин-60 мм 12гр (AYMA)</td>
            <td>530</td>
          </tr>
          <tr>
            <td>АЙМА раттлин-75 мм 15гр (AYMA)</td>
            <td>500</td>
          </tr>
          <tr>
            <td>АЙМА раттлин-95мм 35гр (AYMA)</td>
            <td>500</td>
          </tr>
          <tr>
            <td>АЙМА раттлин-95мм 35гр (Голография)</td>
            <td>450</td>
          </tr>
          <tr>
            <td>АТТРАКТАНТЫ 100мл. Спрей</td>
            <td>360</td>
          </tr>
          <tr>
            <td>БАГЕТ раттлин-70мм. 16гр(BAGET)</td>
            <td>396</td>
          </tr>
          <tr>
            <td>БАГЕТ раттлин-70мм. 16гр(Голография)</td>
            <td>450</td>
          </tr>
          <tr>
            <td>БАТОН тейл-спиннер-16гр. 115мм.(Baton Tail-Spinner) с лепестком</td>
            <td>550</td>
          </tr>
          <tr>
            <td>БОСУМ раттлин-55мм. 8 гр (BOSUM)</td>
            <td>500</td>
          </tr>
          <tr>
            <td>БОСУН раттлин - 73мм. 22 гр (BOSUN)</td>
            <td>520</td>
          </tr>
          <tr>
            <td>БОСУН раттлин - 73мм. 30 гр (BOSUN)</td>
            <td>530</td>
          </tr>
          <tr>
            <td>ВИП ТРАУТ раттлин - 85мм. 20гр. (VIP TROUT)</td>
            <td>520</td>
          </tr>
          <tr>
            <td>ВИП ТРАУТ раттлин - 85мм. 26гр.(VIP TROUT)</td>
            <td>520</td>
          </tr>
          <tr>
            <td>ВИП ТРАУТ раттлин - 85мм. 26гр.(Голография)</td>
            <td>450</td>
          </tr>
          <tr>
            <td>КАЛИКАНА раттлин - 53мм. 7гр(KALIKANA)</td>
            <td>500</td>
          </tr>
          <tr>
            <td>КАЛИКАНА раттлин - 60мм. 16гр(KALIKANA)</td>
            <td>510</td>
          </tr>
          <tr>
            <td>КАЛИКАНА раттлин - 60мм. 16гр(Голография)</td>
            <td>450</td>
          </tr>
          <tr>
            <td>КАЛИКАНА тейл-спиннер-95мм. 18гр. (Kalikana Tail-Spinner) с лепестком</td>
            <td>550</td>
          </tr>
          <tr>
            <td>КАЛИКАНА тейл-спиннер-95мм. 18гр. (Голография) с лепестком</td>
            <td>450</td>
          </tr>
          <tr>
            <td>КИЛ ФИШ раттлин - 90мм. 35гр (KILL FISH)</td>
            <td>550</td>
          </tr>
          <tr>
            <td>МАНДУЛА - 100 мм (MANDULA)</td>
            <td>248</td>
          </tr>
          <tr>
            <td>МАНДУЛА - 140 мм (MANDULA)</td>
            <td>270</td>
          </tr>
          <tr>
            <td>МАНДУЛА - 75 мм (MANDULA)</td>
            <td>225</td>
          </tr>
          <tr>
            <td>Перч тейл-спиннер - 70мм. 10,5гр (Perch Tаil-Spinner) с лепестком</td>
            <td>550</td>
          </tr>
          <tr>
            <td>Перч тейл-спиннер - 70мм. 10,5гр (Голография) с лепестком</td>
            <td>432</td>
          </tr>
          <tr>
            <td>Перч тейл-спиннер - 70мм. 5гр (Perch Tаil-Spinner) с лепестком</td>
            <td>550</td>
          </tr>
          <tr>
            <td>Перч тейл-спиннер - 70мм. 5гр (Голография) с лепестком</td>
            <td>423</td>
          </tr>
          <tr>
            <td>ТРАУТ МАСТЕР раттлин - 40мм. 4гр (TROUT MASTER)</td>
            <td>500</td>
          </tr>
          <tr>
            <td>ТРАУТ МАСТЕР раттлин - 40мм. 10гр (TROUT MASTER)</td>
            <td>500</td>
          </tr>
          <tr>
            <td>ФИНН раттлин - 125 мм. 38гр.(FINN)</td>
            <td>590</td>
          </tr>
          <tr>
            <td>ФИНН раттлин - 125 мм. 45гр. (FINN)</td>
            <td>642</td>
          </tr>
          <tr>
            <td>ФИНН раттлин - 125 мм. 45гр. (Голография)</td>
            <td>585</td>
          </tr>
          <tr>
            <td>ФИНН раттлин - 93 мм 28гр(FINN)</td>
            <td>578</td>
          </tr>
          <tr>
            <td>ФИНН раттлин - 93 мм 28гр(Голография)</td>
            <td>522</td>
          </tr>
          <tr>
            <td>ШАРК тейл-спиннер - 125мм. 24 гр. (Shark Tail-Spinner) с лепестком</td>
            <td>396</td>
          </tr>
          <tr>
            <td>ШАРК тейл-спиннер - 125мм. 24 гр. (Голография) с лепестком</td>
            <td>550</td>
          </tr>
          <tr>
            <td>ШАРК тейл-спиннер - 125мм. 33 гр. (Shark Tail-Spinner) с лепестком</td>
            <td>550</td>
          </tr>
          <tr>
            <td>ШЕРИТЕН раттлин - 105мм. 30 гр (SHERITEN)</td>
            <td>396</td>
          </tr>
          <tr>
            <td>ШЕРИТЕН раттлин - 105мм. 30 гр (Голография)</td>
            <td>590</td>
          </tr>
          <tr>
            <td>ШЕРИТЕН раттлин - 55мм. 7 гр (SHERITEN)</td>
            <td>500</td>
          </tr>
          <tr>
            <td>ШЕРИТЕН раттлин - 75мм. 22 гр (SHERITEN)</td>
            <td>530</td>
          </tr>
          <tr>
            <td>ШЕРИТЕН раттлин - 75мм. 22 гр (Голография)</td>
            <td>450</td>
          </tr>
          <tr>
            <td>TS-classic</td>
            <td>380</td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}