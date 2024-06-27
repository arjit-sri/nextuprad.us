const Services = () => {
    return (<>

        <main id="sect">
            <div className="sect1">
                <h1 className="serviceheadeing">We help <span>great minds</span> to explore their way</h1>
                <div className="overlay" />
            </div>
        </main>

        <div className="container my-5">
            <div className="row">

                <div className="sec-1-1-2 col-6 services-projects"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                    data-aos-duration="1500"> 
                    <h3>Your projects deserve the best!</h3>
                    <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                    <ul className="projectliste">
                        <li>Praesentium voluptatum classical</li>
                        <li>Hampden-sydney college in virginia,</li>
                        <li>Finibus bonorum et malorum</li>
                    </ul>
                </div>
                <div className="col-6 serviceprojectsimg"><img src="/services-right.jpg" alt="" /></div>

            </div>

            {/* <div className="services-bigimages">
  <img
    className="tab-image-full-width"
    src="/services-big.webp"
    style={{
      willChange: "transform",
      transform:
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      transformStyle: "preserve-3d"
    }}
  />
</div> */}
        </div>
        <div class="scroll-container">
        <div class="scroll-content">
            <div class="scroll-item">Web development</div>
            <div class="scroll-item">Brand design</div>
            <div class="scroll-item">Business growth</div>
            <div class="scroll-item">Mobile app design</div>
            <div class="scroll-item">Website development</div>
            <div class="scroll-item">Video production</div>
            <div class="scroll-item">Digital marketing</div>
            
        </div>
    </div>
        <h2 className="servicesubheadeing">You won’t be disappointed with<span>Service</span></h2>
        <ul className="serviceslisted">
            <li><a href="/hire-dedicated-developer/">  <img src="/services.jpg" alt="" /><span>Hire Dedicated<br />  Developer<span>Neque porro quisquam est, qui dolorem ipsum quia doloramet, consectetu.</span></span></a></li>
            <li><a href="/website-design-development-services/">  <img src="/services1.jpg" alt="" /><span>Website<br />  Development<span>Neque porro quisquam est, qui dolorem ipsum quia doloramet, consectetu.</span></span></a></li>
            <li><a href="/software-development-services">  <img src="/services2.jpg" alt="" /><span>Software<br />  Development<span>Neque porro quisquam est, qui dolorem ipsum quia doloramet, consectetu.</span></span></a></li>
            <li><a href="/mobile-app-development-services">  <img src="/services3.jpg" alt="" /><span>Mobile<br /> App Development<span>Neque porro quisquam est, qui dolorem ipsum quia doloramet, consectetu.</span></span></a></li>
            <li><a href="/digital-marketing-services">  <img src="/services4.jpg" alt="" /><span>Digital<br /> Marketing<span>Neque porro quisquam est, qui dolorem ipsum quia doloramet, consectetu.</span></span></a></li>

        </ul>




    </>);
}

export default Services;