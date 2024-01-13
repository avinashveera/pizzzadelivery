import React from 'react'


const Card = (props) => {

    return (
        <>
         <div className='col-md-4 my-2 hoverclass' >
                <div className='greenbc'>

                    <p style={{ color: "#fff", textAlign: "center" }}>{props.title}</p>
                    <div style={{ backgroundColor: "white" }}>

                     <img style={{ width: "100%", height: "200px"}} src={props.image} alt="...img" />

                    </div>



                    <div className='overridediv'>
                        

                        <p className='my-auto' style={{textAlign:"center",transform: "translateY(0%)",padding:"30px 10px"}}>
                       {props.text}
                        </p>


                    </div>

                </div>



            </div>

        </>
    )
}

export default Card