import unilectives from './assets/unilectives.svg'
import book from './assets/book-open.svg'
import shield from './assets/shield-check.svg'
import menu from './assets/bars-arrow-up.svg'
import profile from './assets/user-circle.svg'
import mode from './assets/moon.svg'
import exit from './assets/arrow-right-end-on-rectangle.svg'
import './App.css'
import Card from './Card'
import courses from '../../courses.json'

function App() {
  return (
    <>
      <div className='flex flex-col justify-between bg-slate-50'>
        <div className="flex flex-col">
            <img src={unilectives}></img>
            <hr></hr>
            <img src={book}></img>
            <img src={shield}></img>
        </div>
        <div className="flex flex-col mb-5">
          <img src={menu} className=' rotate-90'></img>
          <img src={profile}></img>
          <img src={mode}></img>
          <img src={exit}></img>
        </div>
      </div>
      <div className=' mx-36 flex-1'>
        <div className="intro">
          <h3 className='text-lg font-medium'>DevSoc presents</h3>
          <h1 className='text-7xl font-extrabold text-blue-500'>unilectives</h1>
          <h2 className=' text-xl font-extrabold'>Your one-stop shop for UNSW course and elective reviews.</h2>
        </div>
        <input className='pl-14 w-full placeholder:text-blue-500 border-2 border-blue-500 outline-none text-blue-500' type="text" placeholder="Search for a course e.g. COMP1511"></input>
        <select className='my-5 border-2 rounded-md w-60 h-12 pl-4' name="sort" id="sort">
            <option value="" defaultValue={true}>Sort by</option>
            <option value="name">Name</option>
            <option value="stars">Stars</option>
        </select>
        {courses.length > 0 ? (
          <div className="flex justify-between flex-wrap -mx-10">
            {courses.map((i, idx) => {
              return (
                <Card
                  title={i.course_prefix + i.course_code.toString()}
                  description={i.course_title}
                  average_stars={i.average_stars}
                  total_reviews={i.total_reviews}
                  offered_terms={i.offered_terms}
                  key={idx}
                >   
                </Card>
              )
            })}
          </div>
        ) : null}
      </div>
    </>
  )
}

export default App
