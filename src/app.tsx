import logo from './assets/logo-nlw-expert.svg'

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />

      <form className='w-full' >
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className='w-full bg-transparent text-6xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="text-sm font-medium text-slate-200"
          >
            Adicionar nota
          </span>
          <p className='text-sm leading-6 text-slate-400'
          >
            Grave uma nota em áudio que será convertida para texto automaticamente.
          </p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300"
          >
            há 2 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente aliquid ex adipisci maiores rerum qui voluptatibus, dolor perspiciatis omnis vitae nulla laudantium modi ipsa. Facere eum error enim doloribus soluta?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente aliquid ex adipisci maiores rerum qui voluptatibus, dolor perspiciatis omnis vitae nulla laudantium modi ipsa. Facere eum error enim doloribus soluta?
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60  to-black/0 pointer-events-none" />
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 relative">
          <span className="text-sm font-medium text-slate-300"
          >
            há 4 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est quasi obcaecati quae cum numquam fuga aut, saepe alias pariatur nesciunt adipisci, voluptate consequatur quam dolorem hic a? Mollitia, eos!
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60  to-black/0 pointer-events-none" />
        </div>

      </div>
    </div>
  )
}

