import './BodyHomepage.css' 

function BodyHomepage (){
    return(     
        <section className= 'h-screen flex justify-between gap-5'>
            <div className='welcome w-1/2 flex justify-center items-center  hover:bg-gradient-to-l italic'>
                <p className='text-6xl pl-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Welcome to our store</p>
            </div>
            <div className='w-1/2 bg-sky-950'>            
               <img src='https://cdn.pixabay.com/photo/2020/03/27/17/56/toilet-paper-4974461_1280.jpg' className='h-full'></img>
            </div>
            
        </section>
         
       
    )
}

export default BodyHomepage;

