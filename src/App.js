import { showErrorToast, showInfoToast, ToastNotifications } from './Components/ToastMessage/ToastMessageComponent';
import AppLayout from './Layout/AppLayout';
function App() {
  return (
   <div>
    <ToastNotifications/>
    <AppLayout/>
   </div>
  );
}

export default App;
