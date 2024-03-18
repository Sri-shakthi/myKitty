import {Component} from 'react'
import MyKittyCard from '../MyKittyCard'
import './index.css'


const kittysList =[
    {
        id: 0,
        name: 'cat',
        imagePath: '/cat.png'
    },
    {
        id: 1,
        name: 'explode',
        imagePath: '/explode.png'
    },
    {
        id:2,
        name: 'defuse',
        imagePath: '/defuse.png'
    },
    {
        id:3,
        name: 'shuffle',
        imagePath: '/shuffle.png'
    }
]

class MyKittyCardContainer extends Component{

    render(){

        return(
            <div className='card-container'>
                <ul className='list-cont'>
                    {
                        kittysList.map( each => (
                            <MyKittyCard key={each.id} details={each}/>
                        ))
                    }    
                </ul>                   
            </div>
        )
    }
}

export default MyKittyCardContainer