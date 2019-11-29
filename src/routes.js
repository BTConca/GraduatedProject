import EditCourse from "components/Screens/Editcourse/Editcourse.js";
import Dashboard from "components/Screens/Dashboard/Dashboard.js";
import UserHome from "components/Screens/UserHome/UserHome.js";
const routes = [
  {
    path: "/editcourse",
    exact: true,
    name: "Create Course",
    component: EditCourse,
    icon: "pe-7s-news-paper",
    layout: "/mentor"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    icon: "pe-7s-graph",
    layout: "/mentor"
  },
  {
    path: "/home",
    name: "Home",
    component: UserHome,
    layout: "/user"
  }
];

export default routes;
