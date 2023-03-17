import React from 'react'
import Home from './components/Home'
import Intro from './components/Intro'
import Fruit from './components/Fruit'
import Fruit_aloe from './components/Fruit_aloe'
import Fruit_aloe_01 from './components/Fruit_aloe_01'
import Fruit_aloe_02 from './components/Fruit_aloe_02'
import Fruit_aloe_03 from './components/Fruit_aloe_03'
import Fruit_lime from './components/Fruit_lime'
import Fruit_lime_01 from './components/Fruit_lime_01'
import Fruit_lime_02 from './components/Fruit_lime_02'
import Fruit_lime_03 from './components/Fruit_lime_03'
import Fruit_lime_04 from './components/Fruit_lime_04'
import Fruit_berry from './components/Fruit_berry'
import Fruit_berry_01 from './components/Fruit_berry_01'
import Fruit_berry_02 from './components/Fruit_berry_02'
import Fruit_berry_05 from './components/Fruit_berry_05'
import Fruit_berry_11 from './components/Fruit_berry_11'
import Fruit_berry_12 from './components/Fruit_berry_12'
import Fruit_berry_13 from './components/Fruit_berry_13'
import Fruit_berry_14 from './components/Fruit_berry_14'
import Fruit_apple from './components/Fruit_apple'
import Fruit_apple_01 from './components/Fruit_apple_01'
import Fruit_apple_02 from './components/Fruit_apple_02'
import Fruit_apple_03 from './components/Fruit_apple_03'
import Fruit_apple_04 from './components/Fruit_apple_04'
import Fruit_apple_05 from './components/Fruit_apple_05'
import Fruit_apple_06 from './components/Fruit_apple_06'
import Fruit_ect from './components/Fruit_ect'
import Fruit_ect_01 from './components/Fruit_ect_01'
import Fruit_ect_02 from './components/Fruit_ect_02'
import Fruit_ect_03 from './components/Fruit_ect_03'
import Fruit_ect_04 from './components/Fruit_ect_04'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/fruit" element={<Fruit />} />
                    <Route path="/fruit_aloe" element={<Fruit_aloe />} />
                    <Route path="/fruit_aloe_01" element={<Fruit_aloe_01 />} />
                    <Route path="/fruit_aloe_02" element={<Fruit_aloe_02 />} />
                    <Route path="/fruit_aloe_03" element={<Fruit_aloe_03 />} />
                    <Route path="/fruit_lime" element={<Fruit_lime />} />
                    <Route path="/fruit_lime_01" element={<Fruit_lime_01 />} />
                    <Route path="/fruit_lime_02" element={<Fruit_lime_02 />} />
                    <Route path="/fruit_lime_03" element={<Fruit_lime_03 />} />
                    <Route path="/fruit_lime_04" element={<Fruit_lime_04 />} />

                    <Route path="/fruit_berry" element={<Fruit_berry />} />
                    <Route
                        path="/fruit_berry_01"
                        element={<Fruit_berry_01 />}
                    />
                    <Route
                        path="/fruit_berry_02"
                        element={<Fruit_berry_02 />}
                    />

                    <Route
                        path="/fruit_berry_05"
                        element={<Fruit_berry_05 />}
                    />
                    <Route
                        path="/fruit_berry_11"
                        element={<Fruit_berry_11 />}
                    />
                    <Route
                        path="/fruit_berry_12"
                        element={<Fruit_berry_12 />}
                    />
                    <Route
                        path="/fruit_berry_13"
                        element={<Fruit_berry_13 />}
                    />
                    <Route
                        path="/fruit_berry_14"
                        element={<Fruit_berry_14 />}
                    />

                    <Route path="/fruit_apple" element={<Fruit_apple />} />
                    <Route
                        path="/fruit_apple_01"
                        element={<Fruit_apple_01 />}
                    />
                    <Route
                        path="/fruit_apple_02"
                        element={<Fruit_apple_02 />}
                    />
                    <Route
                        path="/fruit_apple_03"
                        element={<Fruit_apple_03 />}
                    />
                    <Route
                        path="/fruit_apple_04"
                        element={<Fruit_apple_04 />}
                    />
                    <Route
                        path="/fruit_apple_05"
                        element={<Fruit_apple_05 />}
                    />
                    <Route
                        path="/fruit_apple_06"
                        element={<Fruit_apple_06 />}
                    />
                    <Route path="/fruit_ect" element={<Fruit_ect />} />
                    <Route path="/fruit_ect_01" element={<Fruit_ect_01 />} />
                    <Route path="/fruit_ect_02" element={<Fruit_ect_02 />} />
                    <Route path="/fruit_ect_03" element={<Fruit_ect_03 />} />
                    <Route path="/fruit_ect_04" element={<Fruit_ect_04 />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
