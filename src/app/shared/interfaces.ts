import { Scope } from './enums';

export interface IShop {
  shopId: string;
  name: string;
  address: string;
  revisionId: string;
  isThereRevision: boolean;
}

export interface Token {
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  scope: Scope;
  token_type: string;
}
