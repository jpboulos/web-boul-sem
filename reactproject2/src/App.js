


 
import Footer from './Footer.js';
import Header from "./header.js";
import "./App.css"
import Login from './Log-modal';
import Search from './SearchBar.js'
import Group from './Group.js'
import Mobile from './Mobile.js'



import 'bootstrap/dist/css/bootstrap.min.css';

import MyCarousel from './carousel.js';

function App() {  
    return (
        <div className="main" >
            
            <Header />
            
           
            <body >
                <MyCarousel />
                <Group/>
                
                

            </body>
                
                
            
            
            
            <Footer />
       
        </div>
       
        
        
        
        
        
       
        
        )
}



export default App;
