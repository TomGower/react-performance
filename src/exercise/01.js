// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
// import Globe from '../globe'

// const loadGlobe = () => import(/* webpackPrefetch: true */ '../globe')
// const Globe = React.lazy(loadGlobe)

/*
adding in webpackPrefect means webpack will load this as soon as the main page is finished loading, so we don't
need to worry about loading as soon as we focus or mouseEnter, because that loading will have already started
*/
const Globe = React.lazy(() => import(/* webpackPrefetch: true */ '../globe'))

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label
        style={{marginBottom: '1rem'}}
        // onMouseEnter={loadGlobe}
        // onFocus={loadGlobe}
      >
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <div style={{width: 400, height: 400}}>
      {/* In a future version of React, React will wait on showing fallback for certain amount of time. To be covered
      in the future in discussion of concurrent React. There will be implication for mounting vs. suspense. Because of
      those, KCD wraps entire show globe ternary operator in React.Suspense instead of just Globe like I do. */}
        {showGlobe ?
          <React.Suspense fallback={<div>loading...</div>}>
            <Globe />
          </React.Suspense>
          :
          null
        }
      </div>
    </div>
  )
}

export default App
