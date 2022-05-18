import React, { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'components/Home'
import GlobalStyles from 'components/GlobalStyles'

const App = ():ReactElement => (
    <>
        <GlobalStyles />
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    </>
    
)

export default App