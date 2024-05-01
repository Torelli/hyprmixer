function App() {
  return (
    <div className="flex flex-col gap-8">
      <nav className="border flex justify-around font-bold"><span>ncspot</span></nav>
      <div className='text-white flex flex-col items-center justify-center gap-4'>
        <div className="border w-40 h-40"></div>
        <div className="flex flex-col gap-4 w-64">
          <div className="border">
            <h1 className="font-bold text-sm">Feeling good</h1>
            <h2 className="text-slate-400 text-xs">John Doe</h2>
          </div>
          <div className="border-b-2"></div>
          <div className="border h-8 flex items-center justify-around">
            <div className="border rounded-full w-4 h-4"></div>
            <div className="border rounded-full w-4 h-4"></div>
            <div className="border rounded-full w-4 h-4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
