import WrokFlowComponent from '../Components/JiraDataComponent/WrokFlowComponent'
import WorkFLowScreens from '../Components/JiraDataComponent/WorkFLowScreens'
import ScreensComponent from '../Components/JiraDataComponent/ScreensComponent'
import ScreenSchemes from '../Components/JiraDataComponent/ScreenSchemes'
import CustomField from '../Components/JiraDataComponent/CustomField'
import NotificationSchemes from '../Components/JiraDataComponent/NotificationSchemes'
import PermissionSchemes from '../Components/JiraDataComponent/PermissionSchemes'
import PrioritySchemes from '../Components/JiraDataComponent/PrioritySchemes'
import IssueTypeScreenSchemes from '../Components/JiraDataComponent/IssueTypeScreenSchemes'
import IssueTypes from '../Components/JiraDataComponent/IssueTypes'
import FieldConfiguration from '../Components/JiraDataComponent/FieldConfiguration'
import FieldConfigurationSchemes from '../Components/JiraDataComponent/FieldConfigurationSchemes'
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
   {
      path : '/custom-field',
      component: CustomField,
      name : "Custom Fields"
   },
   {
      path : '/notification-schemes',
      component: NotificationSchemes,
      name : "Notification Schemes"
   },
   {
      path : '/permission-schemes',
      component:PermissionSchemes,
      name : "Permission Schemes"
   },
   {
      path : '/priority-schemes',
      component:PrioritySchemes,
      name : "Priority Schemes"
   },
   {
      path : '/issue-type-screen-schemes',
      component:IssueTypeScreenSchemes,
      name : "Issue Type Screen Schemes"
   },
   {
      path : '/issue-types',
      component:IssueTypes,
      name : "Issue Types"
   },
   {
      path : '/field-configuration',
      component:FieldConfiguration,
      name : "Field Configuration"
   },
   {
      path : '/field-configuration-schemes',
      component:FieldConfigurationSchemes,
      name : "Field Configuration Schemes"
   }

]

export const deleteJiraCache = () => {
   localStorage.removeItem("cached_workflows");
   localStorage.removeItem("cached_workflow_screens");
   localStorage.removeItem("jira_screen_schemes_cache");
   localStorage.removeItem("jira_screens_cache");
}