import {Routes, Route} from 'react-router-dom'
import About from '../about/about'
import ReadMore from '../readMore/readMore'
import Faqs from '../faqs/FAQs'
import Home from '../home/Home'
import Admin from '../admin/admin'

const MainRoutes = () => (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/faqs" element={<Faqs />}/>
      <Route exact path="/read-more" element={<ReadMore />}/>
      <Route exact path="/admin" element={<Admin />}/>
    </Routes>
)

export default MainRoutes