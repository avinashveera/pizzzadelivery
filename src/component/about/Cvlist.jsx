import React from 'react'

const Cvlist = ({h5,listall}) => {
    return (
        <>
            <div style={{ marginTop: "50px", padding: "0px 20px" }}>
                <h5 >{h5}</h5>
                <div style={{ border: "2px solid white", lineHeight: "10px" }}></div>

                <ul style={{ marginTop: "20px" }}>                     
                  
                  {
                      listall.map((listdata)=>{
                          return <li style={{ lineHeight:"25px",color: "rgb(182, 174, 174)", fontSize: "13px"}}> {listdata}</li>
                      })
                  }
               
                </ul>
            </div>

            </>
            )
}

            export default Cvlist