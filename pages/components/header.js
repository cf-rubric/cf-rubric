import Link from 'next/link'

export default function Header(props){
    return(
        <header className="bg-black">
            <div className="">
                <img src="https://avatars.githubusercontent.com/u/3904529?s=280&v=4" className="inline-block object-contain h-20 mb-2"/>
                 <h1 className="inline-block mt-6 text-4xl text-white">Code Fellows Rubric</h1>
                <nav className="inline-block text-2xl text-white ">
                    {/* Make sure when adding an href to keep the same format as below */}
        
                    <Link href="/">
                        <div className="inline-block p-8 transition bg-black hover:bg-gray-700">Overview</div>
                    </Link>
                    
                    <Link href="/components/schedule">
                        <div className="inline-block p-8 transition bg-black hover:bg-gray-700">Schedule Student</div>
                    </Link>

                    <Link href="/mySchedule">
                        <div className="inline-block p-8 transition bg-black hover:bg-gray-700">My Schedule</div>
                    </Link>
   
                </nav>
            </div>
    </header>
    )
}