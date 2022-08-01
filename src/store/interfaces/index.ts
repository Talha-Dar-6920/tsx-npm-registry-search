export interface InitialStateInterface {
  search: string;
  loading: boolean;
  error: string | undefined;
  data: RequestedDataInterface[];
}

export interface LoadingInterface {
  status: true;
  error: undefined;
  data: [];
}

export interface LoadedInterface {
  status: false;
  error: undefined;
  data: RequestedDataInterface[];
}

export interface ErrorInterface {
  status: false;
  error: string | undefined;
  data: [];
}

export interface RequestDataInterface {
  package: {
    name: string;
    version: string;
    description: string;
    date: string;
  };
}

export interface RequestedDataInterface {
  name: string;
  version: string;
  description: string;
  date: string;
}
