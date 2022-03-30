import {useState, useEffect} from 'react';
import axios from 'axios'
import './Maxim.css'

const server = {
  method: 'GET',
  url: 'http://192.168.10.110:8080',
  headers: {
    host: 'https://meigen.doodlenote.net'
  }
};



export default function Maxim() {

  const [meigen, setMeigen] = useState({});

  const getMeigen = async () => {
    try {
      const result = await axios.get(server.url)
      setMeigen(result.data)
    } catch(error) {
      console.log('error!!');
    }
  };
  return (
    <div className='bg-img'>                    
       <button className="meigen-btn" onClick={() => getMeigen()}>名言を見る</button>
       <div className="maxim-text">
          <p className="auther-text">{meigen.auther}</p>
          <p className="meigen-text">{meigen.meigen}</p>
       </div>
    </div>
  )
}
