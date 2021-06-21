import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className = 'Widgets'>
            <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FEURO2020%2Fposts%2F4361699460549533&show_text=true&width=500" 
                width="340" 
                height="100%" 
                style={{border:'none', overflow:'hidden'} }
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title= 'Euro Post'
                className='first_embed'
            >    
            </iframe>
            <iframe 
                src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBleacherReportFootball%2Fposts%2F352269926255919&show_text=true&width=500'
                width="340" 
                height="100%" 
                style={{border:'none', overflow:'hidden'}} 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                allowFullScreen="true"
                title= 'Messi Post'
                className='second_embed'
                >
                
            </iframe>
        </div>
    )
}

export default Widgets
