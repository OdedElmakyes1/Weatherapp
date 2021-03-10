import React, {useState, useEffect} from 'react'
import Header from './Header'
import N1 from './../media/N01.png'
import N2 from './../media/N02.png'
import N3 from './../media/N03.png'
import N4 from './../media/N04.png'
import N5 from './../media/N05.png'
import N6 from './../media/N06.png'
import N7 from './../media/N07.png'
import N8 from './../media/N08.png'
import N11 from './../media/N11.png'
import N12 from './../media/N12.png'
import N13 from './../media/N13.png'
import N14 from './../media/N14.png'
import N15 from './../media/N15.png'
import N16 from './../media/N16.png'
import N17 from './../media/N17.png'
import N18 from './../media/N18.png'
import N19 from './../media/N19.png'
import N20 from './../media/N20.png'
import N21 from './../media/N21.png'
import N22 from './../media/N22.png'
import N23 from './../media/N23.png'
import N24 from './../media/N24.png'
import N25 from './../media/N25.png'
import N26 from './../media/N26.png'
import N29 from './../media/N29.png'
import N30 from './../media/N30.png'
import N31 from './../media/N31.png'
import N32 from './../media/N32.png'
import N33 from './../media/N33.png'
import N34 from './../media/N34.png'
import N35 from './../media/N35.png'
import N36 from './../media/N36.png'
import N37 from './../media/N37.png'
import N38 from './../media/N38.png'
import N39 from './../media/N39.png'
import N40 from './../media/N40.png'
import N41 from './../media/N41.png'
import N42 from './../media/N42.png'
import N43 from './../media/N43.png'
import N44 from './../media/N44.png'

export default function Favorites(props) {

    var icon = 0
    return (
        <div>
            <Header/>
        <div className='div_flex'>
        {props.arr.map(item =>{
            icon = item.icon
             switch (icon) {
                case 1:
                    icon = N1;
                    break;
                  case 2:
                    icon = N2;
                    break;
                  case 3:
                    icon = N3;
                    break;
                  case 4:
                    icon = N4;
                    break;
                  case 5:
                    icon = N5;
                    break;
                  case 6:
                    icon = N6;
                    break;
                  case  7:
                    icon = N7;
                    break;
                  case  8:
                    icon = N8;
                    break;
                  case  11:
                    icon = N11;
                    break;
                  case  12:
                    icon = N12;
                    break;
                  case  13:
                    icon = N13;
                    break;
                  case  14:
                    icon = N14;
                    break;
                  case  15:
                    icon = N15;
                    break;
                  case  16:
                    icon = N16;
                    break;
                  case  17:
                    icon = N17;
                    break;
                  case  18:
                    icon = N18;
                    break;
                  case  19:
                    icon = N19;
                    break;
                  case  20:
                    icon = N20;
                    break;
                  case  21:
                    icon = N21;
                    break;
                  case  22:
                    icon = N22;
                    break;
                  case  23:
                    icon = N23;
                    break;
                  case  24:
                    icon = N24;
                    break;
                  case  25:
                    icon = N25;
                    break;
                  case  26:
                    icon = N26;
                    break;
                  case  29:
                    icon = N29;
                    break;
                  case  30:
                    icon = N30;
                    break;
                  case  31:
                    icon = N31;
                    break;
                  case  32:
                    icon = N32;
                    break;
                  case  33:
                    icon = N33;
                    break;
                  case  34:
                    icon = N34;
                    break;
                  case  35:
                    icon = N35;
                    break;
                  case  36:
                    icon = N36;
                    break;
                  case  37:
                    icon = N37;
                    break;
                  case  38:
                    icon = N38;
                    break;
                  case  39:
                    icon = N39;
                    break;
                  case  40:
                    icon = N40;
                    break;
                  case  41:
                    icon = N41;
                    break;
                  case  42:
                    icon = N42;
                    break;
                  case  43:
                    icon = N43;
                    break;
                  case  44:
                    icon = N44;
                    break;
                }
            if(item.disName == 'tel aviv'){
                return <p  className='p_day' >{item.disName}<br/>{item.temp}C<br/><img className='img' src={icon}/> </p>
            }else{
                return <p className='p_day'>{item.disName}<br/>{item.temp}C<br/><img className='img' src={icon}/></p>
            }
           })}
        </div>

        </div>
    )
}
