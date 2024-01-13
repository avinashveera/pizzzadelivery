import { Link } from 'react-router-dom';
import img1 from '../../image/slider1.png'
import img2 from '../../image/slider2.png'
// import img3 from '../../img/IMG_7886.JPG'
export const Slider = (city) => {

    //text typing

    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

     
    
      window.onload =
     function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
      };
 


    //text typing 


  return (
    <>

      <div id="carouselExampleCaptions" className=" carousel slide my-2" data-bs-ride="carousel" style={{width:"80%",marginLeft:"10%"}} >
        <div className="container carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="container carousel-inner">
          <div className="container carousel-item active">
            <img src={img1} style={{ height:"40vw" }} className="d-block w-100" alt="web design and devlopment in arrah" />
            <div className="carousel-caption d-none d-md-block">
              <h5>best website company in arrah</h5>
              <p style={{ color: "black" }}>best website company in arrah</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" style={{ height: "40vw" }} alt="web design and devlopment in arrah" />
            <div className="carousel-caption d-none d-md-block">
              <h5>best website company in arrah</h5>
              <p>Website design and devlopment in arrah</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img1} style={{ height: "40vw" }} className="d-block w-100" alt="web design and devlopment in arrah" />
            <div className="carousel-caption d-none d-md-block">
              <h5>best website company in arrah</h5>
              <p>website design and devlopment in arrah</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className='overlay '>
          <div className='typewritermain'>



            <h1>
              <Link  style={{ textDecoration: "none", color: "#fff", fontWeight: "150" }} to="#" className="typewrite" data-period="2000" data-type={`[ "website design in ${city.city}", "website development in ${city.city}", "Website builder in ${city.city}", "DigitalMarketing Company ${city.city}" ]`}>
                <span className="wrap"></span>
              </Link>
            </h1>


          </div>
        </div>
      </div>

    </>
  )
}
