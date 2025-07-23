import WrokFlowComponent from '../Components/JiraDataComponent/WrokFlowComponent'
import WorkFLowScreens from '../Components/JiraDataComponent/WorkFLowScreens'
import ScreensComponent from '../Components/JiraDataComponent/ScreensComponent'
import ScreenSchemes from '../Components/JiraDataComponent/ScreenSchemes'
export const pageRouteData = [
   {
      path : '/workflows',
      component : WrokFlowComponent,
      name: "Workflow"
   },
   {
      path : '/workflow-schemes',
      component : WorkFLowScreens,
      name : "Workflow Schemes"
   },
   {
      path : "/screens",
      component: ScreensComponent,
      name : "Screens"
   },
   {
      path : "/screen-schemes",
      component: ScreenSchemes,
      name : "Screen Schemes"
   },

]

export const deleteJiraCache = () => {
   localStorage.removeItem("cached_workflows");
   localStorage.removeItem("cached_workflow_screens");
   localStorage.removeItem("jira_screen_schemes_cache");
   localStorage.removeItem("jira_screens_cache");
}