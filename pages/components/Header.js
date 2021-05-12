import Link from './Link.js';

const Header = () => {
  return(
    <div className="bg-gray-500">

      <Link href='/' className='item'>
        Accordion
      </Link>

      <Link href='/list' className='item'>
        Search
      </Link>

      <Link href="/schedule">
        Schedule Student
      </Link>

      <Link href="/student">
        Student
      </Link>

    </div>
  )
}