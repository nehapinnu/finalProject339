import React, {useContext} from 'react';
import './hero.css';
import { AppContext } from '../App';
import HeroSwiper from './HeroSwiper';

function Hero() {

    const {items, setItems} = useContext(AppContext);

    const handleChange = id=>{
        const newItems = items.map(items=> {
            items.active = false;
            if(items.id===id) {
                items.active = true;
            }
            return items;
        });
        setItems(newItems);
    };

    // return <h1>hello</h1>;
      return (
        <div className="banner">
          {items && items.length > 0 && 
            items.map(item => (
              <div className="item" key={item.id}>
                <img
                  src={item.bgImg}
                  alt="description"
                  className={`bgImg ${item.active ? "active" : undefined}`}
                />
                <div className={`content ${item.active ? "active" : undefined}`}>
                  <h1 className='number'>{item.id}</h1>
                  <h2 className='describe'>{item.title}</h2>
                  {/* <a href="#" className="mainButton">
                    Shop Now
                  </a> */}
                </div>
                {/* <div className="subtitle">
                  <span className="slogan">Spring & Summer Collections</span>
                  <span className={`number ${item.active ? 'active' : undefined}`}>{item.id}</span>
                </div> */}
              </div>
            ))}

          {items && items.length > 0 && (<HeroSwiper slides={items} slideChange={handleChange}/>)}
        </div>
      );
}

export default Hero;