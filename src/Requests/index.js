import React from 'react';
import axios from 'axios';
import { getApiConfig } from '../config';

const axiosOpt = getApiConfig();

const createAxiosInstance = (logoutCallback) => {
  const apiClient = axios.create(axiosOpt);

  apiClient.interceptors.response.use((response) => {
    const { status } = response;
    if(status === 401 || status === 403) {
      logoutCallback && logoutCallback();
    }

    console.log('response =====>', response)
    return response.data;
  });

  return apiClient;
}

const { Provider, Consumer } = React.createContext('Request');

class RequestProvider extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      apiClient: createAxiosInstance(this.handleNotAllowedAccess)
    }
  }

  handleNotAllowedAccess = () => {
    console.log("Not Allowed")
  }
  
  render = () => {
    const { children } = this.props;
    return <Provider value={this.state.apiClient}>
      {children}
    </Provider>
  }
}

const withRequest = (Component) => {
  return (props) => (
    <Consumer>
      {(request) => (<Component request={request} {...props}/>)}
    </Consumer>
  )
}

export {
  RequestProvider,
  withRequest,
};