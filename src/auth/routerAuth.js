import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "./Dashboard";
import DataLovers from "./dataLovers/DataLovers";
import Trivia from "./trivia/Trivia";

export const routerAuth = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/datalovers",
          element: <DataLovers />,
        },
        {
          path: "/trivia",
          element: <Trivia />,
        },
      ],
    },
  ]);