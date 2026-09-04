import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Hmars from '@/pages/Hmars';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import Philosophy from '@/pages/Philosophy';
import Standards from '@/pages/Standards';
import People from '@/pages/People';
import Resources from '@/pages/Resources';
import Grantmakers from '@/pages/Grantmakers';
import Join from '@/pages/Join';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hmars" element={<Hmars />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/people" element={<People />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/grantmakers" element={<Grantmakers />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
