
import { IconApple, IconChevron_right } from "@/icons/icon";
import Link from "next/link"

export default function GlobalMenuApple() {
  let iPhone15Pro: string = "https://i.imgur.com/pre716v.png";
  let iPhone15: string = "https://i.imgur.com/kG7Y78D.png"
  let visionPro: string = "https://www.apple.com/v/home/bl/images/heroes/apple-vision-pro/hero_apple_vision_pro_avail__ecthwv10twsy_medium.jpg"
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
        </div>
      </section>
    </main>
  )
}
