// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

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
      <label style={{marginBottom: '1rem'}}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <div style={{width: 400, height: 400}}>
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
