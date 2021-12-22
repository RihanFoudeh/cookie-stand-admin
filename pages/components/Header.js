import Link from 'next/link'

export default function Header(props) {
    return (
   
      <header className="flex items-center justify-between p-4 bg-green-500">
          <h1 className="w-2/3 text-4xl text-center">Cookie Stand Admin</h1>
          <div className="flex items-center w-1/3 justify-cneter">
            <h2 className="p-1 mr-2 rounded bg-green-50">rudy </h2>
            <form onSubmit={props.signouthandler}>
              <button className="p-1 mr-2 text-white bg-green-700 rounded">Sign Out</button>
            </form>
          <Link  href='/overview'>
            <a className="p-1 rounded bg-green-50 "> Overview </a>
          </Link>
          </div>
          
      </header>









    )
}