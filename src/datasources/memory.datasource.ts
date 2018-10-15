import { inject } from '@loopback/core';
import { juggler, AnyObject } from '@loopback/repository';

const { env } = process;
const config = {
  name: 'memory',
  connector: 'memory',
  localStorage: '',
  file: env.DB_FILE || ''
};

export class MemoryDataSource extends juggler.DataSource {
  static dataSourceName = 'memory';

  constructor(
    @inject('datasources.config.memory', { optional: true })
    dsConfig: AnyObject = config
  ) {
    super(dsConfig);
  }
}
