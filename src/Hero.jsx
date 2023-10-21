import heroImg from "./assets/hero.svg"

const Hero = () => {
  return <section className="hero">
    <div className="hero-center">
        <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>Blog try-hard kale chips scenester hammock offal kombucha jianbing polaroid kickstarter. Mukbang godard pour-over hot chicken schlitz listicle unicorn. Marfa 90's grailed, celiac blackbird spyplane art party +1 scenester williamsburg. Locavore iPhone bitters chartreuse, celiac big mood bruh ethical kitsch quinoa taxidermy butcher post-ironic.</p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt= "woman and the browser" className="img"/>
        </div>
    </div>
  </section>
}
export default Hero