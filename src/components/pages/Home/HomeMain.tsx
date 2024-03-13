import margharita from "../../../assets/margarita-home.png"


export default function HomeMain() {
  return (
    <div>
          <div className='home'>
      <section>
        <div className="home_title">
          <h1>Friday pizza!</h1>
          <h3>Time to enjoy our delicious pizza.</h3>
          <button>ORDER NOW</button>
        </div>
        <div className="home_title_img">
          <div className="home_title_light"></div>
          <img src={margharita} alt="margharita" />
        </div>
      </section>
    </div>
    </div>
  )
}
