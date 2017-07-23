import ReactOnRails from 'react-on-rails';
import SubordinateView from '../components/SubordinateView';
import SupervisorView from '../components/SupervisorView';
// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  SubordinateView,
  SupervisorView
});
