import React from 'react'
import Card from '../main/Card'
import Spg from "../../image/singlepage.jpg"
import Spg1 from "../../image/multi page.jpg"

const Onepage = () => {
  return (
    <>
    {/* comment */}
    <div className='container-fluid row my-3'>
        
        <Card
        title="Single Page Website"
        image={Spg}
        text="A One Pager is a Single Page website with no additional pages like About, Team or Services. All the content sits within the same webpage, traditionally in a long-scrolling layout"
        />


<Card
        title="Multi page website"
        image={Spg1}
        text="A multi-page website contains multiple pages and subpages within a menu. Unlike the single page website, the only way to navigate to and view pages in multi-page design is to click on the links within the menu. The multi-page design is well-suited to nearly every type of project."
        />


           
      
    </div>
    
    </>
  )
}

export default Onepage