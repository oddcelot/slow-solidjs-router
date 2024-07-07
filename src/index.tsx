/* @refresh reload */
import { A, Route, Router, useLocation, useNavigate } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';

const [counter, setCounter] = createSignal(0);

render(() => (
  <Router root={(props) => {
    const navigate = useNavigate();
    return (
      <div>
        <div onClick={() => setCounter(old => old + 1)}>
          <A href="/A-Link-1">A-Link-1</A><br /><br />
          <A href="/A-Link-2">A-Link-2</A><br /><br />
          <a href="/a-Link-1">a-Link-1</a><br /><br />
          <a href="/a-Link-2">a-Link-2</a><br /><br />
          <button onClick={() => navigate("/button-1")}>button-1</button><br /><br />
          <button onClick={() => navigate("/button-2")}>button-2</button><br /><br />
        </div>
        <div>
          {props.children}
        </div>
      </div>
    );
  }
  }>
    <Route path="*" component={Page} />
  </Router>
), document.getElementById('root')!);

function Page() {
  const location = useLocation();
  return (
    <div>
      Path: {location.pathname}<br /><br />
      <div style={`height: 100px; width: 100px; background-color: ${counter() % 2 === 0 ? "red" : "blue"};`}></div>
    </div>
  );
}
