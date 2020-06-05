import './styles/fonts.css'
import './styles/style.scss'
import './assets/video.mp4'
import {render} from 'react-dom'
import React from 'react'
import App from './components/App.jsx'
import store from './redux/store'
import { Provider } from 'react-redux'

render(<Provider store ={store}><App/></Provider>, document.getElementById('app'))


    window.onload = function(){
        if(window.innerWidth >= 801){
        document.querySelector('.video_container').innerHTML = '<video src="./video.mp4" autoplay="" muted="" loop=""></video>'
        }
    }()

    window.addEventListener("orientationchange", function() {
       this.setTimeout(()=>{
           if(window.innerWidth >= 801){
            document.querySelector('.video_container').innerHTML = '<video src="./video.mp4" autoplay="" muted="" loop=""></video>'
            }
       },0) 
    }, true);