import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './index.css'
import Sehri from '../components/Sehri'
import Iftar from '../components/Iftar'
import { useState,useEffect } from 'react'
function App() {

  const [sehriTime, setSehriTime] = useState('');
  const [iftarTime, setIftarTime] = useState('');
  const [sehriRemaining, setSehriRemaining] = useState({});
  const [iftarRemaining, setIftarRemaining] = useState({});

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const convertTo24HourFormat = (timeStr) => {
    const [time, period] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);
    minutes = parseInt(minutes);

    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }

    return { hours, minutes };
  };

  useEffect(() => {
    const currentDate = getCurrentDate();
    console.log(currentDate);
    fetch('/ISTime.json')
      .then((res) => res.json())
      .then((data) => {
        const matchedEntry = data.find((entry) => entry.date === currentDate);
        if (matchedEntry) {
          const sehriTime24Hour = convertTo24HourFormat(matchedEntry.sehri_time);
          const iftarTime24Hour = convertTo24HourFormat(matchedEntry.iftar_time);

          setSehriTime(sehriTime24Hour);
          setIftarTime(iftarTime24Hour);

          
          const sehriTimeInMs = sehriTime24Hour.hours * 3600 * 1000 + sehriTime24Hour.minutes * 60 * 1000;

          
          const iftarTimeInMs = iftarTime24Hour.hours * 3600 * 1000 + iftarTime24Hour.minutes * 60 * 1000;

          
          
          const updateRemainingTime = () => {
            const currentDateTime = new Date();
            const currentTimeInMs = currentDateTime.getHours() * 3600 * 1000 + currentDateTime.getMinutes() * 60 * 1000 + currentDateTime.getSeconds() * 1000;
        
            const remainingSehriTime = sehriTimeInMs - currentTimeInMs;
            const remainingSehriHours = Math.floor(remainingSehriTime / (1000 * 60 * 60));
            const remainingSehriMinutes = Math.floor((remainingSehriTime % (1000 * 60 * 60)) / (1000 * 60));
            const remainingSehriSeconds = Math.floor((remainingSehriTime % (1000 * 60)) / 1000);
        
            const remainingIftarTime = iftarTimeInMs - currentTimeInMs;
            const remainingIftarHours = Math.floor(remainingIftarTime / (1000 * 60 * 60));
            const remainingIftarMinutes = Math.floor((remainingIftarTime % (1000 * 60 * 60)) / (1000 * 60));
            const remainingIftarSeconds = Math.floor((remainingIftarTime % (1000 * 60)) / 1000);
        
            setSehriRemaining({ hours: remainingSehriHours, minutes: remainingSehriMinutes, seconds: remainingSehriSeconds });
            setIftarRemaining({ hours: remainingIftarHours, minutes: remainingIftarMinutes, seconds: remainingIftarSeconds });
        
            requestAnimationFrame(updateRemainingTime);
        };
        
        updateRemainingTime();
        
          

         
        }
      });
  }, []);
  return (
    <div>
      
      <Parallax style={{top:'0',left:'0'}} pages={2}>
        <ParallaxLayer offset={0}  speed={1.6} factor={1.1}  style={{
          backgroundImage: `url(/moon.png)`,
          // backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        </ParallaxLayer>
        <ParallaxLayer offset={0}  speed={0.5} factor={1}  style={{
          backgroundImage: `url(/middle-2.png)`,
          // backgroundSize: 'cover',
          backgroundPosition: 'center',
          position:'absolute',
          zIndex:'-20'
        }}>
        </ParallaxLayer>
        <ParallaxLayer offset={1}  speed={2} factor={1} style={{
          backgroundImage: `url(/sun.png)`,
          // backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        </ParallaxLayer>
        
        <ParallaxLayer offset={1}  speed={0.5} factor={1} style={{
          backgroundImage: `url(/day-cloud.png)`,
           backgroundSize: 'cover',
          backgroundPosition: 'center',
          bottom:'0',
          position:'absolute',
          zIndex:'-10'
        }}>
        </ParallaxLayer>
        <ParallaxLayer offset={1}  speed={0.5} factor={1} style={{
          backgroundImage: `url(/cloud.png)`,
           backgroundSize: 'contain',
          backgroundPosition:'bottom',
          
          position:'absolute',
          zIndex:'10'
        }}>
        </ParallaxLayer>
        <ParallaxLayer offset={1}  speed={1.2} factor={1} style={{
          backgroundImage: `url(/middle.png)`,
           backgroundSize: 'cover',
           backgroundRepeat:'no-repeat',
          backgroundPosition: 'top center',
          objectFit:'cover',
          top:'-500px',
          position:'absolute',
          zIndex:'10',
          overflow: 'hidden'
        }}>
        </ParallaxLayer>
        
        <ParallaxLayer offset={0}  speed={1.2} factor={1} style={{
          backgroundImage: `url(/middle-2.png)`,
           backgroundSize: 'contain',
           backgroundRepeat:'no-repeat',
          backgroundPosition: 'bottom center',
          objectFit:'cover',
          bottom:'-500px',
          position:'absolute',
          zIndex:'30',
          overflow: 'hidden',
          left: ''
        }}>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5}  speed={0.5} factor={1} style={{
          backgroundImage: `url(/dark-cloud.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          bottom:'0',
          position:'absolute',
          zIndex:'0'
        }}>
        </ParallaxLayer>
        <ParallaxLayer offset={0}  speed={0.5} factor={1} style={{
          backgroundImage: `url(/dark-2.png)`,
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          bottom:'0',
          position:'absolute',
          zIndex:'10'
        }}>
        </ParallaxLayer>
        <ParallaxLayer offset={0}  speed={0.5} factor={1.5} style={{
          backgroundImage: `url(/ramadan-top.png)`,
          backgroundSize: 'contain',
          backgroundPosition: 'top center',
          bottom:'0',
          position:'absolute',
          zIndex:'10'
        }}>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={2} speed={1} className=' absolute -z-50  bg-gradient-to-b from-gray-900 to-gray-500'>

        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1}  sticky={{start:1,end:1}} className='-z-50 bg-gradient-to-b from-gray-300 to-blue-500'>

        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1} sticky={{start:0, end:0.8}} style={{
          position:'absolute',
          zIndex:'50'
        }}>
          <Sehri></Sehri>
          <div className='glass lexend'>
            <div className='flex items-center gap-2 justify-center flex-wrap'>
            <h1 className='text text-white font-bold'>আজকের সেহরির সময়ঃ </h1>
            <p className='lexend text-lime-400'><span className='text-2xl text-lime-200'>{sehriTime.hours}</span> টা <span className='text-2xl text-lime-200'>{sehriTime.minutes}</span> মিনিট</p>
            </div>
          <div className="flex gap-2 justify-center flex-wrap text-purple-400">
  <div>
    <span className="countdown font-mono text-4xl text-purple-400">
        <span className='t' style={{"--value":`${sehriRemaining.hours<0?0:sehriRemaining.hours}`}}></span>
    </span>
    ঘন্টা
  </div> 
  <div>
    <span className="countdown font-mono text-4xl text-purple-400">
      <span className='t' style={{"--value":`${sehriRemaining.minutes<0?0:sehriRemaining.minutes}`}}></span>
    </span>
    মিনিট
  </div> 
  <div>
    <span className="countdown font-mono text-4xl text-purple-400">
      <span className='t' style={{"--value":`${sehriRemaining.seconds<0?0:sehriRemaining.seconds}`}}></span>
    </span>
    সেকেন্ড বাকি আছে
  </div>
</div>
          </div>
          
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={1} sticky={{start:1, end:1.8}} style={{
          position:'absolute',
          zIndex:'50',
          margin:'0 auto'
        }}>

          <Iftar></Iftar>
          <div className='glass lexend'>
            <div className='flex items-center gap-2 justify-center flex-wrap'>
            <h1 className='font-bold text-black'>আজকের ইফতারের সময়ঃ </h1>
            <p className='lexend text-lime-400'><span className='text-2xl text-lime-200'>{iftarTime.hours-12}</span> টা <span className='text-2xl text-lime-200'>{iftarTime.minutes}</span> মিনিট</p>
            </div>
          <div className="flex gap-2 justify-center flex-wrap">
  <div className='text-red-700 '>
    <span className="countdown font-mono text-4xl ">
        <span className='' style={{"--value":`${iftarRemaining.hours<0?0:iftarRemaining.hours}`}}></span>
    </span>
    ঘন্টা
  </div> 
  <div className='text-red-700 '>
    <span className="countdown font-mono text-4xl ">
      <span className='' style={{"--value":`${iftarRemaining.minutes<0?0:iftarRemaining.minutes}`}}></span>
    </span>
    মিনিট
  </div> 
  <div className='text-red-700 '>
    <span className="countdown font-mono text-4xl ">
      <span className='' style={{"--value":`${iftarRemaining.seconds<0?0:iftarRemaining.seconds}`}}></span>
    </span>
    সেকেন্ড বাকি আছে
  </div>
</div>
</div>
          
        </ParallaxLayer>

      </Parallax>


    </div>
  )
}

export default App
