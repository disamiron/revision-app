export interface Storage {
  type: StorageType;
  value?: any;
}

export enum StorageType {
  Token = 'REVISION_APP_TOKEN',
  User = 'REVISION_APP_USER',
}
