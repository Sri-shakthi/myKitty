import './index.css'

const MyKittyCard = props =>{
    const {details} = props 
    const {id, name, imagePath} = details 
    
     return(
        <li>
            <div className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img src='/kitty_front.png' alt='front-page' className='card-img'/>
                    </div>
                    <div className='card-back'>
                        <img src={imagePath} alt='back-page' className='card-img'/>
                    </div>

                </div>

            </div>
        </li>
     )
}

export default MyKittyCard