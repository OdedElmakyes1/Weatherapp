import React, {useState, useEffect} from 'react'
import Header from './Header'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
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



export default function Home(props) {
    var datetoday = []
    var daysTemp = []
    var telAvivTemp = 0
    var iconImg = 0
    const [inputVal, setInputVal] = useState('')
    const [input, setInput] = useState('')
    const [dayName, setDayName] = useState([])
    const [dayTemp, setDayTemp] = useState([])
    const [fiveDaysInfo, setFiveDaysInfo] = useState([{}])
    const [temp, setTemp] = useState(0)
    const [text, setText] = useState('')
    const [icon, setIcon] = useState(0)
    const [favBut, setFavBut] = useState('Add To')

    let defaultTelAviv =() =>{ 
    fetch(`https://dataservice.accuweather.com/currentconditions/v1/215854?apikey=OamihYj5o5ZcM4Apfg3ewaGUCTGWqUxG`, {
        })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(alert('Something went wrong'));
      }
    })
    .then((jsonObject) => {
        setTemp(jsonObject[0].Temperature.Metric.Value)
        telAvivTemp = jsonObject[0].Temperature.Metric.Value
        iconImg = jsonObject[0].WeatherIcon;
        setText(jsonObject[0].WeatherText)
    return jsonObject;
    });
    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=OamihYj5o5ZcM4Apfg3ewaGUCTGWqUxG&metric=true`, {
        })
    .then((response) => {
    return response.json();
    })
    .then((jsonObject) => {
        daysTemp = [jsonObject.DailyForecasts[0].Temperature.Maximum.Value,jsonObject.DailyForecasts[1].Temperature.Maximum.Value,jsonObject.DailyForecasts[2].Temperature.Maximum.Value,jsonObject.DailyForecasts[3].Temperature.Maximum.Value,jsonObject.DailyForecasts[4].Temperature.Maximum.Value,]
        setFiveDaysInfo([{
          dayTemp: jsonObject.DailyForecasts[0].Temperature.Maximum.Value,
          icon: jsonObject.DailyForecasts[0].Day.Icon,
        },
        {
          dayTemp: jsonObject.DailyForecasts[1].Temperature.Maximum.Value,
          icon: jsonObject.DailyForecasts[1].Day.Icon,
        },
        {
          dayTemp: jsonObject.DailyForecasts[2].Temperature.Maximum.Value,
          icon: jsonObject.DailyForecasts[2].Day.Icon,
        },
        {
          dayTemp: jsonObject.DailyForecasts[3].Temperature.Maximum.Value,
          icon: jsonObject.DailyForecasts[3].Day.Icon,
        },
        {
          dayTemp: jsonObject.DailyForecasts[4].Temperature.Maximum.Value,
          icon: jsonObject.DailyForecasts[4].Day.Icon,
        },])
        datetoday = [jsonObject.DailyForecasts[0].Date.slice(0, 10),jsonObject.DailyForecasts[1].Date.slice(0, 10),jsonObject.DailyForecasts[2].Date.slice(0, 10),jsonObject.DailyForecasts[3].Date.slice(0, 10),jsonObject.DailyForecasts[4].Date.slice(0, 10)]
        for(let i = 0; i< datetoday.length;i++){
            datetoday[i].toString()
            datetoday[i] = new Date(datetoday[i])
            datetoday[i]= datetoday[i].getDay()

            switch (datetoday[i]) {
                case 0:
                    datetoday[i] = "Sun";
                    break;
                  case 1:
                    datetoday[i] = "Mon";
                    break;
                  case 2:
                    datetoday[i] = "Tue";
                    break;
                  case 3:
                    datetoday[i] = "Wed";
                    break;
                  case 4:
                    datetoday[i] = "Thu";
                    break;
                  case 5:
                    datetoday[i] = "Fri";
                    break;
                  case  6:
                    datetoday[i] = "Sat";
                }
        }
        switch (iconImg) {
          case 1:
            iconImg = N1;
              break;
            case 2:
              iconImg = N2;
              break;
            case 3:
              iconImg = N3;
              break;
            case 4:
              iconImg = N4;
              break;
            case 5:
              iconImg = N5;
              break;
            case 6:
              iconImg = N6;
              break;
            case  7:
              iconImg = N7;
              break;
            case  8:
              iconImg = N8;
              break;
            case  11:
              iconImg = N11;
              break;
            case  12:
              iconImg = N12;
              break;
            case  13:
              iconImg = N13;
              break;
            case  14:
              iconImg = N14;
              break;
            case  15:
              iconImg = N15;
              break;
            case  16:
              iconImg = N16;
              break;
            case  17:
              iconImg = N17;
              break;
            case  18:
              iconImg = N18;
              break;
            case  19:
              iconImg = N19;
              break;
            case  20:
              iconImg = N20;
              break;
            case  21:
              iconImg = N21;
              break;
            case  22:
              iconImg = N22;
              break;
            case  23:
              iconImg = N23;
              break;
            case  24:
              iconImg = N24;
              break;
            case  25:
              iconImg = N25;
              break;
            case  26:
              iconImg = N26;
              break;
            case  29:
              iconImg = N29;
              break;
            case  30:
              iconImg = N30;
              break;
            case  31:
              iconImg = N31;
              break;
            case  32:
              iconImg = N32;
              break;
            case  33:
              iconImg = N33;
              break;
            case  34:
              iconImg = N34;
              break;
            case  35:
              iconImg = N35;
              break;
            case  36:
              iconImg = N36;
              break;
            case  37:
              iconImg = N37;
              break;
            case  38:
              iconImg = N38;
              break;
            case  39:
              iconImg = N39;
              break;
            case  40:
              iconImg = N40;
              break;
            case  41:
              iconImg = N41;
              break;
            case  42:
              iconImg = N42;
              break;
            case  43:
              iconImg = N43;
              break;
            case  44:
              iconImg = N44;
              break;
            }
        setIcon(iconImg)
        setDayName(datetoday)
        setDayTemp(daysTemp)
        
    return jsonObject;
    });
    }
    useEffect(
        defaultTelAviv
        ,[]);

      let checkFav = (e) =>{
          let val = e.target.value
          setInput(val)
          console.log(input)
          val = val.toLowerCase()
          val = val.replace(/\s/g,'')
        setInputVal(val)
        props.arr.map(item =>{
            if(val === item.name){
                setFavBut('Remov From')
            }else{
                setFavBut('Add To')
            }
        })
      }
      let addToList = () => {
          if(favBut == 'Add To'){
            props.add(inputVal,input)
          }else{
              props.delete(inputVal)
          }
      }
      let telAvivFunc = () =>{
        props.telAviv(temp,icon)
      }
    return (
        <div>
            <Header telAvivCallFunc = {telAvivFunc}/>
            <Input onChange={checkFav} type="text" placeholder='   Write the name of a city'/><br/>
            <p>Tel Aviv<br/>{temp}C<br/><img src={icon}/></p>
            <Button style={{border:'Solid 2px black'}} onClick={addToList}>{favBut} Favorites</Button>
            <h3>{text}</h3>
            <div className='div_flex'>
              {fiveDaysInfo.map((item, index) => {
                                let temporaryVariable = fiveDaysInfo
                                switch (temporaryVariable[index].icon) {
                                  case 1:
                                    temporaryVariable[index].icon = N1;
                                      break;
                                    case 2:
                                      temporaryVariable[index].icon = N2;
                                      break;
                                    case 3:
                                      temporaryVariable[index].icon = N3;
                                      break;
                                    case 4:
                                      temporaryVariable[index].icon = N4;
                                      break;
                                    case 5:
                                      temporaryVariable[index].icon = N5;
                                      break;
                                    case 6:
                                      temporaryVariable[index].icon = N6;
                                      break;
                                    case  7:
                                      temporaryVariable[index].icon = N7;
                                      break;
                                    case  8:
                                      temporaryVariable[index].icon = N8;
                                      break;
                                    case  11:
                                      temporaryVariable[index].icon = N11;
                                      break;
                                    case  12:
                                      temporaryVariable[index].icon = N12;
                                      break;
                                    case  13:
                                      temporaryVariable[index].icon = N13;
                                      break;
                                    case  14:
                                      temporaryVariable[index].icon = N14;
                                      break;
                                    case  15:
                                      temporaryVariable[index].icon = N15;
                                      break;
                                    case  16:
                                      temporaryVariable[index].icon = N16;
                                      break;
                                    case  17:
                                      temporaryVariable[index].icon = N17;
                                      break;
                                    case  18:
                                      temporaryVariable[index].icon = N18;
                                      break;
                                    case  19:
                                      temporaryVariable[index].icon = N19;
                                      break;
                                    case  20:
                                      temporaryVariable[index].icon = N20;
                                      break;
                                    case  21:
                                      temporaryVariable[index].icon = N21;
                                      break;
                                    case  22:
                                      temporaryVariable[index].icon = N22;
                                      break;
                                    case  23:
                                      temporaryVariable[index].icon = N23;
                                      break;
                                    case  24:
                                      temporaryVariable[index].icon = N24;
                                      break;
                                    case  25:
                                      temporaryVariable[index].icon = N25;
                                      break;
                                    case  26:
                                      temporaryVariable[index].icon = N26;
                                      break;
                                    case  29:
                                      temporaryVariable[index].icon = N29;
                                      break;
                                    case  30:
                                      temporaryVariable[index].icon = N30;
                                      break;
                                    case  31:
                                      temporaryVariable[index].icon = N31;
                                      break;
                                    case  32:
                                      temporaryVariable[index].icon = N32;
                                      break;
                                    case  33:
                                      temporaryVariable[index].icon = N33;
                                      break;
                                    case  34:
                                      temporaryVariable[index].icon = N34;
                                      break;
                                    case  35:
                                      temporaryVariable[index].icon = N35;
                                      break;
                                    case  36:
                                      temporaryVariable[index].icon = N36;
                                      break;
                                    case  37:
                                      temporaryVariable[index].icon = N37;
                                      break;
                                    case  38:
                                      temporaryVariable[index].icon = N38;
                                      break;
                                    case  39:
                                      temporaryVariable[index].icon = N39;
                                      break;
                                    case  40:
                                      temporaryVariable[index].icon = N40;
                                      break;
                                    case  41:
                                      temporaryVariable[index].icon = N41;
                                      break;
                                    case  42:
                                      temporaryVariable[index].icon = N42;
                                      break;
                                    case  43:
                                      temporaryVariable[index].icon = N43;
                                      break;
                                    case  44:
                                      temporaryVariable[index].icon = N44;
                                      break;
                                    }
                                    return( 
                                      <p className='p_day'>{dayName[index]}<br/>
                                      {item.dayTemp} C<br/>
                                      <img className='img' src = {temporaryVariable[index].icon}/>
                                      </p>
                                    )
              })}
            </div>
            <br /><br /><br /><br />
        </div>
    )
}
