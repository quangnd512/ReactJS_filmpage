import 'swiper';
import '../node_modules/boxicons/css/boxicons.min.css';

import './App.scss';

import { BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/pages/Layout';
import RouteComponent from './config/RouteComponent';

function App() {
  return (
    <Router>
        <Layout>
            <RouteComponent />
        </Layout>
    </Router>
  );
}

export default App;
