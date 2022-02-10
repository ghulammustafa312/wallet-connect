import AuthView from "../views/auth/AuthView";
import MainView from "../views/MainView";
import ChapterHouse from "../views/ChapterHouse";

let routes = [
  // {
  //   path: '/auth',
  //   component: AuthView,
  //   layout: 'auth',
  // },
  {
    path: "/",
    component: MainView,
    layout: "main",
  },
  // {
  //   path: '/chapter',
  //   component: ChapterHouse,
  //   layout: 'main',
  // },
];
export default routes;
