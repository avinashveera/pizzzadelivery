import "./Main.css"
import Code from "../../image/code.png"
import Design from "../../image/design.png"
import Maint from "../../image/maintenance.png"
import Plan from "../../image/planning.png"
const  Ourprocess =()=>{


    return(<>
    
      <div className="container-fluid" style={{padding:"50px 0px"}}>

          <h2 style={{textAlign:"center"}}>OUR PROCESS</h2>
          <hr></hr>
          <p style={{textAlign:"center",marginTop:"20px"}}>
          While every project we work with has its own unique outcome, we <br/> follow the same process to ensure the best possible results.</p>



      <div className="row" style={{marginTop:"50px"}}>

          <div className="col-md-3 custprocess">
         <img src={Plan} alt="" srcset="" />
         <h4>PLANNING</h4>
         <p>We first understand your business objectives and goals in order to design our SEO strategies around them.</p>
         </div>


         <div className="col-md-3 custprocess">
         <img src={Design} alt="" srcset="" />
         <h4>DESIGN</h4>
         <p>Our creative team of website designers  will work to create presentable, affordable and highly responsive websites for your business.</p>
         </div>



         <div className="col-md-3 custprocess">
         <img src={Code} alt="" srcset="" />
         <h4>CODE</h4>
         <p>Our creative team of website developers will work to create presentable, affordable and highly responsive websites for your business.</p>
         </div>


         <div className="col-md-3 custprocess">
         <img src={Maint} alt="" srcset="" />
         <h4>MAINTENANCE</h4>
         <p>We never stop holding your hand. After the launch, we stay in touch to ensure that all our efforts are bearing fruits</p>
         </div>

      </div>


      </div>
    
    
    
    
    </>)



}

export default Ourprocess;
