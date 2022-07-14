import { useState, useEffect, useRef } from 'react'

function UseRefExample2() {
  const [name, setName] = useState('')

  const renders = useRef(1)
  const prevName = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])

  return (
    <div className='border-top py-4'>
      <h1>UseRefExample #2</h1>
      <h3>Renders: {renders.current}</h3>
      <h4>Prev Name State: {prevName.current}</h4>
      <input type="text" value={name} className="form-control mb-3" onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default UseRefExample2