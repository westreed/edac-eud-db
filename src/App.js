import {Outlet} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Analytics from "./Analytics";

function App(){
    Analytics();
    // 모든 화면에 공통된 부분을 처리하는 컴포넌트
    // <Outlet/>은 라우터가 연결된 컴포넌트를 표시하는 영역
    return(
        <div className={`wrapper`}>
            <div className={`contentWrapper`}>
                <Header/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;