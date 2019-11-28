import EditCourse from "components/Editcourse/Editcourse.js";
import Dashboard from "components/Dashboard/Dashboard.js";

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
  }
];

export default routes;
