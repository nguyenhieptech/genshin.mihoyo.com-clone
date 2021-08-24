import { BrowserRouter as Router } from 'react-router-dom';

export function ReactRouterProvider({ children }: any) {
  return <Router>{children}</Router>;
}
