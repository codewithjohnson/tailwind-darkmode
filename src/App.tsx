import { useOutlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useRef } from "react";

const App = () => {
  const location = useLocation();
  const nodeRef = useRef(null);
  const currentOutlet = useOutlet();

  return (
    <div className="relative">
      <Navbar />

      <SwitchTransition>
        <CSSTransition
          in={true}
          timeout={300}
          nodeRef={nodeRef}
          classNames="page"
          unmountOnExit
          key={location.pathname}
        >
          <div ref={nodeRef} className="page">
            {currentOutlet}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default App;
