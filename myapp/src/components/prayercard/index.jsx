import React from 'react'

function PrayerCard({fajr ,Dhuhr ,Asr ,Maghrib , Isha ,date , timezone,Sunrise, Sunset}) {
  return (
    <>
    
    <div>



    
       <h1>{timezone}</h1>
       <div className='timings'>
       <h2 className='date'>{date}</h2>
       <p className='fajr'><b>fajr : </b>{fajr}</p>
       <p className='zohr'><b>Dhuhr : </b>{Dhuhr}</p>
       <p className='asr'><b>Asr :</b>{Asr}</p>
       <p className='maghrib'><b>Maghrib</b>{Maghrib}</p>
       <p className='isha'><b>Isha</b>{Isha}</p>

       </div>
       
    </div>
    </>
  )
}

export default PrayerCard
