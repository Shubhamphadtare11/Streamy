import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children:[
    {
      path: "/",
      element: <MainContainer/>,  
    },
    {
      path: "watch",
      element: <WatchPage/>,
    },
     {
      path: "demo",
      element: (
      <>
      <Demo/>
      <Demo2/>
      </>
      ),
    },
    ],
},
]);

const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          staleTime: 10000,
      },
  },
});

function App() {
  return (

<QueryClientProvider client={queryClient}>
<Provider store={store} >
    <div>
      <Head />
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
<ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
  );
}

export default App;
