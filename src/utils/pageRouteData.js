import WrokFlowComponent from '../Components/JiraDataComponent/WrokFlowComponent'
import WorkFLowScreens from '../Components/JiraDataComponent/WorkFLowScreens'
import ScreensComponent from '../Components/JiraDataComponent/ScreensComponent'
import ScreenSchemes from '../Components/JiraDataComponent/ScreenSchemes'
export const pageRouteData = [
   {
      path : '/workflows',
      component : WrokFlowComponent
   },
   {
      path : '/workflow-schemes',
      component : WorkFLowScreens
   },
   {
      path : "/screens",
      component: ScreensComponent
   },
   {
      path : "/screen-schemes",
      component: ScreenSchemes
   },

]