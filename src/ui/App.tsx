import { createSignal } from "solid-js";
import logo from "~/assets/logo.svg";
import "@/assets/main.css";

function App() {
  const [hovered, setHovered] = createSignal(false);

  return (
    <>
      <button className="btn btn-secondary">Secondary</button>

      <div
        class="app-icon-wrapper"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div class="app-icon" classList={{ expanded: hovered() }}>
          <img src={logo} alt="Logo" class="logo" />
        </div>
      </div>
    </>
  );
}

export default App;
