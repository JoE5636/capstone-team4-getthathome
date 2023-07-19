

import './App.css'


function App() {
  

  return (
    <>
    <div className='layout'>
      <div className='conteiner0'>
        <div className='get'>
          <img src="src/assets/Logo.png" alt="" className='get_home'/>
          <button className='button_find'><img className='lupa' src="src/assets/search-line.png" alt="" /> FIND A HOME </button>
          <button className='button_join'><img src="src/assets/Group (1).png" alt="" /> JOIN </button>
          <button className='button_login'><img src="src/assets/user-received-2-line.png" alt="" /> LOGIN </button>
        </div>
      </div>
     <div className='conteiner1'>
        <div className='content-wrapper'>
          <h1 className='title'>Meet your new Home</h1>
          <h2 className='easiest'>The easiest way to find where you belong</h2> 
        </div>
    </div>

    <div className='conteiner2'>
      <div className='subconteiner'>
        <h3 className='find'>Find an Apartment you Love</h3>
          <h1 className='title2'>Homes for rent at the best prices</h1>
        <div className='conteiner_img'>
          <img src="src/assets/RentalCard (2).png" alt="" />
          <img src="src/assets/RentalCard.png" alt="" />
          <img src="src/assets/RentalCard (1).png" alt="" />
       </div>
      </div>
    </div>
    <div className='conteiner3'>
      <div className='subconteiner3'>
      <h1 className='title3'>Getting someone to rent your apartment has
                              never been this easy</h1>
        <button type="button" className='create'>CREATE AN ACCOUNT NOW</button>
      </div>
    </div>
    <div className='conteiner4'>
      <h1 className='title4'>Meet the team</h1>
      <div className='conteiner_img2'>
        <img src="src/assets/Frame 74.png" alt="" />
        <img src="src/assets/Frame 75.png" alt="" />
        <img src="src/assets/Frame 76.png" alt="" />
        <img src="src/assets/Frame 77.png" alt="" />
      </div>

    </div>
    <div className='conteiner5'>
      <div className='subconteiner4'>
        <p >© 202X - Find That Home</p>    
        <p >Source Code</p>
        <p>Codeable - Cohort X Final Project</p>
      </div>
      <div className='subconteiner5'>
        <p> <img src="src/assets/ruby-fill.png" alt="" /> Ruby on Rails REST API</p>   
        <p> <img src="src/assets/Group.png" alt="" /> React Responsive SPA</p>  
      </div>
    </div>
    
    </div>
    </>
  )
}

export default App
