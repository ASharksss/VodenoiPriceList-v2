import React, {useEffect} from 'react'
import Fancybox from "../utils/fancybox";
import one from '../img/1.jpg'
import two from '../img/2.jpg'
import three from '../img/mandula.jpg'
import four from '../img/perch1.jpg'
import five from '../img/perch2.jpg'

export const Colors = ({setCatName}) => {
  useEffect(() => {
    document.title = 'Цветовая схема'
    setCatName('')
  }, [])

  return(
    <div className='color_container'>
      <div className="foto_block">
        <h1 className='title'>Раттлины и спиннеры</h1>
        <div className="foto_fish">
          <Fancybox>
            <img className='color_shem' src={one} data-fancybox="gallery"/>
            <img className='color_shem' src={two} data-fancybox="gallery"/>
          </Fancybox>
        </div>
      </div>
      <div className="foto_block">
        <h1 className='title'>Мандулы</h1>
        <div className="foto_fish">
          <Fancybox>
            <img className='color_shem' src={three} data-fancybox="gallery"/>
          </Fancybox>
        </div>
      </div>
      <div className="foto_block">
        <h1 className='title'>Перч тейл-спиннеры</h1>
        <div className="foto_fish">
          <Fancybox>
            <img className='color_shem' src={four} data-fancybox="gallery"/>
            <img className='color_shem' src={five} data-fancybox="gallery"/>
          </Fancybox>
        </div>
      </div>


    </div>
  )
}