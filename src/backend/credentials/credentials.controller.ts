import { IDataSourceCredentials } from "shared/types";
import { credentialsService, CredentialsService } from "./credentials.service";

export class CredentialController {
  constructor(private _credentialsService: CredentialsService) {}

  async upsert(domain: string, credentials: IDataSourceCredentials) {
    await this._credentialsService.upsertDomainCredentials(domain, credentials);
  }

  async checkIfExists(domain: string): Promise<{ data: boolean }> {
    const credentials = await this._credentialsService.getDomainCredentials(
      domain
    );
    return { data: !!credentials };
  }

  async read(domain: string): Promise<IDataSourceCredentials> {
    return await this._credentialsService.getDomainCredentials(domain);
  }
}

export const credentialController = new CredentialController(
  credentialsService
);
