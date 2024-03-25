
import { IconApple, IconChevron_right } from "@/icons/icon";
import Link from "next/link"

export default function GlobalMenuApple() {
  let iPhone15Pro: string = "https://i.imgur.com/pre716v.png";
  let iPhone15: string = "https://i.imgur.com/kG7Y78D.png";
  let visionPro: string = "https://www.apple.com/v/home/bl/images/heroes/apple-vision-pro/hero_apple_vision_pro_avail__ecthwv10twsy_medium.jpg";
  return (
    <main>
      <section id="home">
        <div className="global_menu_apple_content">
          <div className="vision_pro">
            <div className="vision_content">
              <img src={visionPro} alt="vision" />
              <div className="vision_title">
                <h1><IconApple width="50px" height="50px" /> Vision Pro</h1>
                <h2>Welcome to the era of spatial computing.</h2>
                <div className="vision_pro_links">
                  <Link href="/iphone-15">Learn more <IconChevron_right width="30px" height="30px" /> </Link>
                  <Link href="/shop/buy-vision">Buy <IconChevron_right width="30px" height="30px"/></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="iphone_15_pro">
            <div className="module_content">
              <div className="iphone_15_pro_title">
                <h1>iPhone 15 Pro</h1>
                <h3>Titanium.So strong.So light.So Pro</h3>
                <div className="iphone_15_pro_links">
                  <Link href="/iphone-15-pro/">Learn more <IconChevron_right/> </Link>
                  <Link href="/shop/buy-iphone">Buy <IconChevron_right/></Link>
                </div>
              </div>
              <div className="iphone_15_pro_link">
                <Link href="/shop/buy-iphone">
                  <img src={iPhone15Pro} alt="iphone 15 pro" />
                </Link>
              </div>
            </div>
          </div>
          <div className="iphone_15">
            <div className="module_content">
              <div className="iphone_15_title">
                <h1>iPhone 15</h1>
                <h3>New camera. New design. Newphoria</h3>
                <div className="iphone_15_links">
                  <Link href="/iphone-15">Learn more <IconChevron_right width="30px" height="30px" /> </Link>
                  <Link href="/shop/buy-iphone">Buy <IconChevron_right width="30px" height="30px"/></Link>
                </div>
              </div>
              <div className="iphone_15_pro_link">
                <Link href="/shop/buy-iphone">
                  <img src={iPhone15} alt="iphone 15 pro" />
                </Link>
              </div>
            </div>
          </div>
          <section id="apple_products">
            <div className="content">
            <div className="apple_product">
              <div className="apple_title" style={{color: "#f5f5f7"}}>
                <h1><IconApple width="50px" height="50px" color="white" /> WATCH</h1>
                <h4 style={{color: 'red', fontWeight: "500" }}>SERIES 9</h4>
                <h3>Smarter. Brighter. Mightier</h3>
                <div className="apple_links">
                  <Link href="/shop/buy-watch">Learn more <IconChevron_right width="30px" height="30px"/></Link>
                  <Link href="/shop/buy-watch">Buy <IconChevron_right width="30px" height="30px"/></Link>
                </div>
              </div>
                
              <img src="https://www.apple.com/v/home/bl/images/promos/apple-watch-series-9/promo_apple_watch_series_9_order__b3u85rm9zf6u_medium.jpg" alt="watch" />
            </div>
            <div className="apple_product">
              <div className="apple_title">
                <h1>MacBook Air</h1>
                <h3>Learn. Mean. M3 machine</h3>
                <div className="apple_links">
                  <Link href="/shop/buy-watch">Learn more <IconChevron_right width="30px" height="30px"/></Link>
                  <Link href="/shop/buy-watch">Buy <IconChevron_right width="30px" height="30px"/></Link>
                </div>
              </div>
                
              <img src="https://www.apple.com/v/home/bl/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_medium.jpg" alt="watch" />
            </div>
            <div className="apple_product">
              <div className="apple_title" >
                <h1>iPad</h1>
                <h2>Lovable. Drawable. Magical</h2>
                <div className="apple_links">
                  <Link href="/shop/buy-ipad">Learn more <IconChevron_right width="30px" height="30px"/></Link>
                  <Link href="/shop/buy-ipad">Buy <IconChevron_right width="30px" height="30px"/></Link>
                </div>
              </div>
                
              <img src="https://www.apple.com/v/home/bl/images/promos/ipad/promo_ipad__fioegapg12qi_medium.jpg" alt="watch" />
            </div>
            <div className="apple_product">
              <div className="apple_title" style={{color: "#f5f5f7"}}>
                <h1>AirPods Pro</h1>
                <h2><span>Adaptive Audio.</span> Now playing</h2>
                <h3>Learn. Mean. M3 machine</h3>
                <div className="apple_links">
                  <Link href="/shop/buy-airpods">Learn more <IconChevron_right width="30px" height="30px"/></Link>
                  <Link href="/shop/buy-airpods">Buy <IconChevron_right width="30px" height="30px"/></Link>
              </div>
              </div>
              
              <img src="https://www.apple.com/v/home/bl/images/promos/airpods-pro/promo_airpods_pro__erhb1guhr1si_medium.jpg" alt="watch" />
            </div>
            </div>
          </section>
          <section id="apple_services">
            <div className="content">
              <div className="apple_services">
                <div className="apple_services_title">
                <h1><IconApple width="50px" height="50px"  />Card</h1>
                <h3>Get up to 3% Daily Cash back wuth every purshase</h3>
                <div className="apple_services_links">
                  <Link href="/">Learn more <IconChevron_right width="30px" height="30px" /> </Link>
                  <Link href="/shop">Apply now <IconChevron_right width="30px" height="30px"/></Link>
                </div>
                </div>
                <img src="https://www.apple.com/v/home/bl/images/promos/apple-card/tile__cauwwcyyn9hy_medium.jpg" alt="card" />
              </div>
              <div className="apple_services">
                <div className="apple_services_title">
                <h1><IconApple width="50px" height="50px"  />Trade In</h1>
                <h3>Get $180-$630 in credit when you trade in iPhone 11 or higher.</h3>
                <Link href="/">See what your device is worth<IconChevron_right width="30px" height="30px" /> </Link>
                </div>
                <img src="https://www.apple.com/v/home/bl/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium.jpg" alt="trade in" />
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
