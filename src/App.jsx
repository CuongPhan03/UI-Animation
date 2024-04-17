import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import SecondPage from './pages/SecondPage/SecondPage';
import ThirdPage from './pages/ThirdPage/ThirdPage';
import './App.scss';

function App() {
    const routes = [
        { path: '/', component: Home },
        { path: '/second', component: SecondPage },
        { path: '/third', component: ThirdPage },
    ];
    return (
        <Router>
            <div className="app">
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <route.component />
                                </Layout>
                            }
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
