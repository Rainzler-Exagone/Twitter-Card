
import './App.css'
import car from './assets/car.jpg'

const NumberFollower = 4;
const NumberFollowing = "91.7K"
const name = "John";
const username = "@john";


function App() {

  return (
    <>
      <main className='flex justify-center items-center min-h-screen '>
        <div className=' flex flex-col h-48 w-96 bg-primary mt-3 rounded-3xl text-secondary drop-shadow-lg' id='card'>
          <div className='flex'>
          <img  className='ml-4 mt-3 w-14 h-14 rounded-full ring-2 ring-gray-300 bg-Avatar' src={car} alt="" />
          <div className='w-2/4 h-1/5 mt-3'><h1 className='ml-4 font-bold text-gray-200'>{name}</h1><h1 className='ml-4'>{username}</h1></div>
          <div className='bg-tertiary rounded-full h-9 w-20 mt-5 ml-4'><h1 className='ml-4 mt-1 text-white'>Follow</h1></div>
          </div>
        <div className='h-1/3 '> <h1 className='ml-4 mt-3 text-wrap'>Internal pointer variable 🙌 #indian </h1></div>
        <div className='flex '>
          <h1 className='  ml-4 mt-4 font-bold'>{NumberFollower} </h1>
          <h1 className='mt-4 ml-2'> followings</h1>
          <h1 className=' ml-4 mt-4 font-bold'>{NumberFollowing}</h1>
          <h1 className='mt-4 ml-2'> Followers</h1>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
