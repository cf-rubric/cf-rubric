import Link from 'next/link'

export default function Header(props){
    return(
        <header className="bg-black">
            <div className="">
                <img src="https://avatars.githubusercontent.com/u/3904529?s=280&v=4" className="inline-block object-contain h-20 mb-2"/>
                 <h1 className="inline-block mt-6 text-4xl text-white">Code Fellows Rubric</h1>
                <nav className="inline-block text-2xl text-white ">
                    {/* Make sure when adding an href to keep the same format as below */}
        
                    <button onClick={ () => props.changeView('home') }>
                        <div className="inline-block p-8 transition bg-black hover:bg-gray-700">Overview</div>
                    </button>
                    
                    <button onClick={ () => props.changeView('schedule') }>
                        <div className="inline-block p-8 transition bg-black hover:bg-gray-700">Schedule Student</div>
                    </button>

                    <button onClick={ () => props.changeView('mySchedule') }>
                        <div className="inline-block p-8 transition bg-black hover:bg-gray-700">My Schedule</div>
                    </button>

                    <button onClick={ () => props.changeView('rubric') }>
                        <div className="inline-block p-8 transition bg-black hover:bg-gray-700">Grading Rubric</div>
                    </button>
   
                </nav>
            </div>
    </header>
    )
}