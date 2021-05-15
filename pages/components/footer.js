import Link from 'next/link'

export default function Footer(props){
    return(
        <footer className="text-white bg-black">
        <Link href="/">
        <div className="inline-block p-4 transition bg-black hover:bg-gray-700">About the Developers</div>
        </Link>

        <Link href="/">
        <div className="inline-block p-4 transition bg-black hover:bg-gray-700">Back to Top</div>
        </Link>

        <p>&copy; 2021</p>
        </footer>
    )
}