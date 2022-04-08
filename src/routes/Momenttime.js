import React  from 'react';
import moment from 'moment';
import {useState} from 'react';
import 'moment/locale/ko';
import './About.css';

const MyComponent = () => {
// function MyComponent () {
  const date = new Date();
  const [getMoment, setMoment]=useState(moment());
  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
  
  const calendarArr=()=>{
    let result = [];
    let week = firstWeek;
    for ( week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                return(
                  <td className='ui-datepicker-today' key={index}>
                    <span className='ui-state-default ui-state-active'>{days.format('D')}</span>
                  </td>
                );
              } else if(days.format('MM') !== today.format('MM')){
                return(
                  <td className='ui-state-disabled' key={index}>
                    <span className='ui-state-default'>{days.format('D')}</span>
                  </td>
                 );
              } else {
                return(
                  <td key={index}>
                    <span className='ui-state-default '>{days.format('D')}</span>
                  </td>
                );
              }
            })
          }
        </tr>
      );
    }
    
    return result;
  }

  return (
    <div>
          {/* <p><Moment>{date}</Moment></p>
          <p><Moment add={{ hours: 12 }}>{date}</Moment></p>
          <p><Moment add={{ days: 1, hours: 12 }}>{date}</Moment></p>
          <p><Moment subtract={{ hours: 12 }}>{date}</Moment></p>
          <p><Moment subtract={{ days: 1, hours: 12 }}>{date}</Moment></p> */}
          <section className='momentwrap'>
            <h3 className='cal_today'>{today.format('YYYY년 MM월 DD일 HH시 mm분 ')} </h3>
          </section>
          <section className='momentwrap'>
            <div className="control">
              <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >이전달</button>
              <span className='dayinfo'>{today.format('YYYY년 MM월')}</span>
              <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >다음달</button>
            </div>
            <table className='moment_datepicker'>
              <tbody>
                {calendarArr()}
              </tbody>
            </table>
          </section>
      </div>
  );
}

export default MyComponent;