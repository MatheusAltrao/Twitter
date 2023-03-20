import {
  createBrowserRouter
} from "react-router-dom";
import Bookmarks from "./components/pages/Bookmarks";
import Messages from "./components/pages/Messages";
import More from "./components/pages/More";
import Notifications from "./components/pages/Notifications";
import Perfil from "./components/pages/Perfil";
import Status from "./components/pages/Status";
import Timeline from "./components/pages/Timeline";
import Default from "./layouts/Default";

export const router = createBrowserRouter([
  /*   {
      path: "/",
      element: <Timeline />,
    },
    {
      path: "/status",
      element: <Status />
    }, */

  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Timeline />,
      },
      {
        path: "/status",
        element: <Status />
      },
      {
        path: "/more",
        element: <More />
      },
      {
        path: '/notifications',
        element: <Notifications />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />
      }, {
        path: '/perfil',
        element: <Perfil />
      }
    ]
  }
]);
