import { SampleFile } from 'projen';
import { CapServiceProject, CapServiceProjectOptions } from '.././project';
import { BaseProject, SampleCodeConfigBase } from '../../base';
import { Settings } from '../../util/types';
import { constants } from '../../util/constants';

/**
 * Implementing all relevant SampleCode configuration for the CapService project.
 */
export class SampleCodeConfigCapService extends SampleCodeConfigBase {
  private options: CapServiceProjectOptions;

  constructor(project: CapServiceProject, options: CapServiceProjectOptions) {
    super(project);

    this.options = options;
  }

  /**
   * Capire root directory templates for the SampleCode configuration.
   * @return Contents for sample root directory files.
   * @protected
   */
  protected get sampleCodeFileRootTemplates(): Record<string, string[]> {
    return {
      // Start README.md
      'README.md': [
        `# ${this.options.name}`,
        '',
        `${this.options.description}`,
        '',
        '# Table of Contents',
        '',
        `- [${this.options.name}](#${this.options.name})`,
        '- [Table of Contents](#table-of-contents)',
        '  - [Prerequisites](#prerequisites)',
        '  - [`Installation`](#installation)',
        '  - [`Usage`](#usage)',
        '    - [Start locally](#start-locally)',
        '    - [Debug locally](#debug-locally)',
        '    - [Deploy (`DEV`, `QA`, `PROD`)](#deploy-dev-qa-prod)',
        '      - [Deployment steps](#deployment-steps)',
        '      - [`Branch-Specific` deployment rules](#branch-specific-deployment-rules)',
        '  - [Project tools and utilities](#project-tools-and-utilities)',
        '    - [Prettier](#prettier)',
        '    - [ESLint](#eslint)',
        '    - [Lint-staged](#lint-staged)',
        '    - [Commit-Lint](#commit-lint)',
        '    - [Husky](#husky)',
        '  - [Authors](#authors)',
        '',
        '## Prerequisites',
        '',
        'Install [**@sap/cds-dk**](https://cap.cloud.sap/docs/get-started/), [typescript](https://www.typescriptlang.org/), [ts-node](https://www.npmjs.com/package/ts-node) globally:',
        '',
        '```bash',
        'npm install -g @sap/cds-dk typescript ts-node',
        '```',
        '',
        '## `Installation`',
        '',
        '1. After generating the project using `projen`, install the required dependencies by running:',
        '',
        '```bash',
        'npm install',
        '```',
        '',
        '2. Create the following three labels in your repository by navigating to `Pull Requests` > `Labels` > `New Label`:',
        '',
        '   - **patch**',
        '   - **minor**',
        '   - **major**',
        '',
        '> [!TIP]',
        '> For more info about `SemVer (MAJOR.MINOR.PATCH)`, visit [SemVer.org](https://semver.org/)',
        '',
        '3. The following secrets must be created in your GitHub repository to enable the automatic deployment process:',
        '',
        '| Parameter       | Description                                                                   |',
        '| --------------- | ----------------------------------------------------------------------------- |',
        '| `CF_IAS_ORIGIN` | The origin used for IAS authentication when logging into Cloud Foundry. |',
        '| `CF_API_DEV` | The API endpoint for the development Cloud Foundry environment. |',
        '| `CF_ORG_DEV` | The organization for the development environment in Cloud Foundry. |',
        '| `CF_SPACE_DEV` | The space within the development organization in Cloud Foundry. |',
        '| `CF_USERNAME_DEV` | The username for logging into the development environment in Cloud Foundry. |',
        '| `CF_PASSWORD_DEV` | The password for logging into the development environment in Cloud Foundry. |',
        '| `CF_API_PROD` | The API endpoint for the production Cloud Foundry environment. |',
        '| `CF_ORG_PROD` | The organization for the production environment in Cloud Foundry. |',
        '| `CF_SPACE_PROD` | The space within the production organization in Cloud Foundry. |',
        '| `CF_USERNAME_PROD` | The username for logging into the production environment in Cloud Foundry. |',
        '| `CF_PASSWORD_PROD` | The password for logging into the production environment in Cloud Foundry. |',
        '',
        '## `Usage`',
        '',
        '### Start locally',
        '',
        'Start the CAP server in watch mode (hot-reload):',
        '',
        '```bash',
        'npm run watch',
        '```',
        '',
        '> [!TIP]',
        '> Access the service at http://localhost:4004',
        '',
        '### Debug locally',
        '',
        '1. Add breakpoints in your `.ts` files.',
        '2. Start the CAP server in debug mode:',
        '',
        '```bash',
        'npm run watch',
        '```',
        '',
        '3. Refresh the service.',
        '4. The debugger should stop at the breakpoint line.',
        '',
        '### Deploy (`DEV`, `QA`, `PROD`)',
        '',
        'The deployment process is automatically triggered when a `PULL REQUEST` is merged into the `main` branch.',
        '',
        '#### Deployment steps',
        '',
        '- `Version Bump`: The `package.json` version is incremented based on the selected label (`patch`, `minor`, or `major`).',
        '- `GitHub Tags`: A new tag is created to mark the release.',
        '- `GitHub Release`: A release is published in the repository, summarizing the changes.',
        '- `Changelog Update`: The `CHANGELOG.md` file is updated with the latest commit messages.',
        '',
        '> [!CAUTION]',
        '> Secrets from installation process are required for automatic deployment. See **[installation](#installation)**.',
        '',
        '> [!CAUTION]',
        '> Every `PULL REQUEST` merged into `main` must have one of the following labels:',
        '> - `patch` **(0.0.x)**',
        '> - `minor` **(0.x.0)**',
        '> - `major` **(x.0.0)**',
        '',
        '#### `Branch-Specific` deployment rules',
        '',
        '- `Development (DEV)`: Changes merged into the `dev` branch trigger deployment to the development environment.',
        '- `Quality Assurance (QA)`: Merging changes into `qa` triggers deployment to the QA environment.',
        '- `Production (PROD)`: Merging changes into `prod` deploys to production.',
        '',
        '> [!TIP]',
        '> To deploy all environments (`DEV`, `QA`, `PROD`), maintain `dev`, `qa`, and `prod` branches and merge changes accordingly.',
        '',
        '## Project tools and utilities',
        '',
        '### Prettier',
        '',
        'A code formatter enforcing consistent style.',
        '',
        '> [!NOTE]',
        '> Prettier runs automatically on commit.',
        '',
        '> [!TIP]',
        '> Manually run Prettier:',
        '> ```bash',
        '> npm run prettier:fix',
        '> ```',
        '',
        '### ESLint',
        '',
        'A linter enforcing TypeScript coding standards.',
        '',
        '> [!NOTE]',
        '> ESLint runs automatically on commit.',
        '',
        '> [!TIP]',
        '> Manually run ESLint:',
        '> ```bash',
        '> npm run eslint:fix',
        '> ```',
        '',
        '### Lint-staged',
        '',
        'Runs linters only on staged files before committing.',
        '',
        '### Commit-Lint',
        '',
        'Ensures commit messages follow a conventional format.',
        '',
        '### Husky',
        '',
        'Manages Git hooks for automated tasks (e.g., running tests, linters).',
        '',
        '## Authors',
        '',
        '- [@Author1](#link1)',
        '- [@Author2](#link2)',
        '',
        '<p align="right">(<a href="#table-of-contents">back to top</a>)</p>',
      ],
      // End README.md

      // Start .cdsrc.json
      '.cdsrc.json': [
        '{',
        '  "requires": {',
        '    "[development]": {',
        '      "auth": {',
        '        "kind": "mocked"',
        '      }',
        '    },',
        '    "[production]": {',
        '      "auth": {',
        '        "kind": "xsuaa"',
        '      },',
        '      "db": {',
        '        "kind": "hana",',
        '        "impl": "@cap-js/hana",',
        '        "deploy-format": "hdbtable"',
        '      }',
        '    }',
        '  },',
        '  "i18n": {',
        '    "default_language": "en"',
        '  },',
        '  "log": {',
        '    "service": true',
        '  },',
        '  "features": {',
        '    "preserve_computed": true',
        '  },',
        '  "sql": {',
        '    "native_hana_associations": false',
        '  },',
        '  "hana": {',
        '    "deploy-format": "hdbtable"',
        '  }',
        '}',
      ],
      // End .cdsrc.json

      // Start .cdsprettier.json
      '.cdsprettier.json': [
        '{',
        '  "alignAfterKey": true,',
        '  "alignAnnotations": true,',
        '  "alignPreAnnotations": true,',
        '  "alignPostAnnotations": true,',
        '  "alignColonsInAnnotations": true,',
        '  "alignValuesInAnnotations": true,',
        '  "alignActionsAndFunctions": true,',
        '  "alignActionNames": true,',
        '  "alignActionReturns": true,',
        '  "alignAs": true,',
        '  "alignAsInEntities": true,',
        '  "alignAsInSelectItems": true,',
        '  "alignAsInUsing": true,',
        '  "alignExpressionsAndConditions": true,',
        '  "alignExprAndCondWithinBlock": true,',
        '  "alignTypes": true,',
        '  "alignColonsBeforeTypes": true,',
        '  "alignEqualsAfterTypes": true,',
        '  "alignTypesWithinBlock": true,',
        '  "alignCompositionStructToRight": true,',
        '  "cqlKeywordCapitalization": "lower",',
        '  "keepPreAnnotationsInOriginalLine": "keepLine",',
        '  "keepPostAnnotationsInOriginalLine": "keepLine",',
        '  "keepEmptyBracketsTogether": true,',
        '  "keepSingleLinedBlocksTogether": true,',
        '  "keepOriginalEmptyLines": true,',
        '  "maxKeepEmptyLines": 2,',
        '  "openingBraceInNewLine": false,',
        '  "selectInNewLine": true,',
        '  "tabSize": 2,',
        '  "finalNewline": true,',
        '  "formatDocComments": false,',
        '  "maxDocCommentLine": 60,',
        '  "whitespaceBeforeColon": true,',
        '  "whitespaceBeforeColonInAnnotation": false,',
        '  "whitespaceAfterColon": true,',
        '  "whitespaceAfterColonInAnnotation": true,',
        '  "whitespaceAfterComma": true,',
        '  "whitespaceAroundAlignedOps": true,',
        '  "whitespaceAroundBinaryOps": true,',
        '  "whitespaceWithinBrackets": false',
        '}',
      ],

      // End .cdsprettier.json

      // Start .eslintrc.json
      'default-env.js': [
        '/**',
        ' * Fetches `VCAP_SERVICES` for a given CF application and writes it to a file.',
        ' * It utilizes the Cloud Foundry CLI to do so.',
        ' *',
        ' * Make sure you are logged in via the CF CLI (`cf login`) before running the',
        ' * script. You can check your login and the organization and space you are',
        ' * targetting by using `cf target`.',
        ' *',
        ' * Allows on-premise connectivity proxying if necessary',
        ' *',
        ' * @author Sebastian Blessing',
        ' */',
        "const fs = require('fs');",
        "const util = require('util');",
        "const exec = util.promisify(require('child_process').exec);",
        "const spawn = util.promisify(require('child_process').spawn);",
        '',
        'async function getAppGuid(appName) {',
        '  const cmd = `cf app ${appName} --guid`;',
        '  console.log(cmd);',
        '  const { stdout, stderr } = await exec(cmd);',
        '  if (stderr) console.log(`stderr: ${stderr}`);',
        '  return stdout.trim();',
        '}',
        '',
        'async function getDefaultEnv(appGuid) {',
        '  const cmd = `cf curl "v3/apps/${appGuid}/env"`;',
        '  console.log(cmd);',
        '  const { stdout, stderr } = await exec(cmd);',
        '  if (stderr) console.log(`stderr: ${stderr}`);',
        '  return JSON.parse(stdout).system_env_json;',
        '}',
        '',
        '(async () => {',
        '  const myArgs = process.argv.slice(2);',
        '  const appName = myArgs[0];',
        '  if (!appName) {',
        "    console.error('Please provide a CF application name to fetch its environment!');",
        '    return;',
        '  }',
        '',
        '  let envFileName = myArgs[1];',
        '',
        "  envFileName = envFileName ? envFileName : 'default-env.json';",
        '  console.log(`Writing environment of ${appName} to ${envFileName}`);',
        '',
        '  const defaultEnv = await getDefaultEnv(await getAppGuid(appName));',
        '',
        '  let bRunProxy = false;',
        '  let proxyPort = null;',
        '  let proxyHost = null;',
        '',
        "  if (defaultEnv['VCAP_SERVICES']['connectivity']) {",
        '    proxyPort = defaultEnv.VCAP_SERVICES.connectivity[0].credentials.onpremise_proxy_port;',
        '    proxyHost = defaultEnv.VCAP_SERVICES.connectivity[0].credentials.onpremise_proxy_host;',
        "    defaultEnv.VCAP_SERVICES.connectivity[0].credentials.onpremise_proxy_host = 'localhost';",
        '    bRunProxy = true;',
        '  }',
        '',
        "  fs.writeFile('default-env.json', JSON.stringify(defaultEnv, null, 2), async (err) => {",
        '    if (err) {',
        '      console.error(err);',
        '    } else if (bRunProxy) {',
        '      console.log(`cf ssh ${appName} -L ${proxyPort}:${proxyHost}:${proxyPort}`);',
        "      await spawn('cf', [`ssh ${appName} -L ${proxyPort}:${proxyHost}:${proxyPort}`], {",
        '        shell: true,',
        "        stdio: 'inherit',",
        '      });',
        '    }',
        '  });',
        '',
        "  console.log('Done');",
        '})();',
      ],

      // End .eslintrc.json

      // Start .eslintrc.json
      'mta.yaml': [
        "_schema-version: '3.1'",
        `ID: ${this.options.namespace}`,
        'version: 0.0.1',
        `description: ${this.options.description}`,
        'parameters:',
        '  enable-parallel-deployments: true',
        'build-parameters:',
        '  before-all:',
        '    - builder: custom',
        '      commands:',
        '        - npm ci',
        '        - npm run build',
        '        - npx @cap-js/cds-typer "*" --outputDirectory gen/srv/@cds-models',
        'modules:',
        `  - name: ${this.options.name}-srv`,
        '    type: nodejs',
        '    path: gen/srv',
        '    parameters:',
        '      buildpack: nodejs_buildpack',
        '      readiness-health-check-type: http',
        '      readiness-health-check-http-endpoint: /health',
        '    build-parameters:',
        '      builder: npm',
        '    provides:',
        '      - name: srv-api',
        '        properties:',
        '          srv-url: ${default-url}',
        '    requires:',
        `      - name: ${this.options.name}-uaa`,
        `      - name: ${this.options.name}-destination`,
        `      - name: ${this.options.name}-connectivity`,
        `      - name: ${this.options.name}-db`,
        `  - name: ${this.options.name}-destinations`,
        '    type: com.sap.application.content',
        '    requires:',
        `      - name: ${this.options.name}-uaa`,
        '        parameters:',
        '          service-key:',
        `            name: ${this.options.name}-uaa-key`,
        '      - name: srv-api',
        `      - name: ${this.options.name}-destination`,
        '        parameters:',
        '          content-target: true',
        '    parameters:',
        '      content:',
        '        instance:',
        '          destinations:',
        '            - Authentication: OAuth2UserTokenExchange',
        `              Name: ${this.options.name}-app-srv`,
        `              TokenServiceInstanceName: ${this.options.name}-uaa`,
        `              TokenServiceKeyName: ${this.options.name}-uaa-key`,
        '              URL: ~{srv-api/srv-url}',
        `              sap.cloud.service: ${this.options.namespace}`,
        '          existing_destinations_policy: update',
        '    build-parameters:',
        '      no-source: true',
        `  - name: ${this.options.name}-db-deployer`,
        '    type: hdb',
        '    path: gen/db',
        '    parameters:',
        '      buildpack: nodejs_buildpack',
        '    requires:',
        `      - name: ${this.options.name}-db`,
        `      - name: ${this.options.name}-uaa`,
        'resources:',
        `  - name: ${this.options.name}-uaa`,
        '    type: org.cloudfoundry.managed-service',
        '    parameters:',
        '      path: ./xs-security.json',
        '      service: xsuaa',
        '      service-plan: application',
        '      config:',
        '        tenant-mode: dedicated',
        `        xsappname: ${this.options.name}`,
        `  - name: ${this.options.name}-connectivity`,
        '    type: org.cloudfoundry.managed-service',
        '    parameters:',
        '      service: connectivity',
        '      service-plan: lite',
        `  - name: ${this.options.name}-destination`,
        '    type: org.cloudfoundry.managed-service',
        '    parameters:',
        '      config:',
        '        HTML5Runtime_enabled: true',
        '        init_data:',
        '          instance:',
        '            destinations:',
        '              - Authentication: NoAuthentication',
        '                Name: ui5',
        '                ProxyType: Internet',
        '                Type: HTTP',
        '                URL: https://ui5.sap.com',
        '            existing_destinations_policy: update',
        '        version: 1.0.0',
        '      service: destination',
        '      service-plan: lite',
        `  - name: ${this.options.name}-db`,
        '    type: com.sap.xs.hdi-container',
        '    parameters:',
        '      service: hana',
        '      service-plan: hdi-shared',
        '    properties:',
        '      hdi-service-name: ${service-name}',
      ],

      // End .eslintrc.json
      'xs-security.json': ['{', '  "scopes": [],', '  "attributes": [],', '  "role-templates": []', '}'],
    };
  }

  /**
   * Capire `srv` directory templates for the SampleCode configuration.
   * @return Contents for sample `srv` directory files.
   * @protected
   */
  protected get sampleCodeFileSrvTemplates(): Record<string, string[]> {
    return {
      // Start index.ts
      'srv/index.cds': [`using from './controller/service-1/service-1';`],
      // End index.ts

      // Start Entity handler
      [`srv/controller/service-1/handler/${this.options.entityName}Handler.ts`]: [
        `import {
          AfterRead,
          EntityHandler,
          Inject,
          Req,
          Results,
          Service,
          CDS_DISPATCHER,
          type TypedRequest,
          Use,
        } from '@dxfrontier/cds-ts-dispatcher';`,
        ``,
        `import { ${this.options.entityName} } from '#cds-models/ServiceA';`,
        `import { MiddlewareAfterRead } from '../../../middleware/MiddlewareAfterRead';`,
        `import { Middleware${this.options.entityName} } from '../../../middleware/Middleware${this.options.entityName}';`,
        ``,
        `@EntityHandler(${this.options.entityName})`,
        `@Use(Middleware${this.options.entityName})`,
        `export class ${this.options.entityName}Handler {`,
        `  @Inject(CDS_DISPATCHER.SRV) private readonly srv: Service;`,
        `  // @OnRead, @BeforeRead, @AfterRead, @OnUpdate ...`,
        ``,
        `  @AfterRead()`,
        `  @Use(MiddlewareAfterRead)`,
        `  public async afterRead(@Results() results: ${this.options.entityName}, @Req() req: TypedRequest<${this.options.entityName}>): Promise<${this.options.entityName}> {`,
        `    console.log(req);`,
        `    return results;`,
        `  }`,
        `}`,
      ],
      // End

      // Start UnboundActionsHandler
      'srv/controller/service-1/handler/UnboundActionsHandler.ts': [
        `import { Inject, Service, CDS_DISPATCHER, UnboundActions } from '@dxfrontier/cds-ts-dispatcher';`,
        ``,
        `@UnboundActions()`,
        `export class UnboundActionsHandler {`,
        `  @Inject(CDS_DISPATCHER.SRV) private readonly service: Service;`,
        `  // @OnError, @OnEvent, @OnAction, @OnFunction`,
        `}`,
      ],
      // End UnboundActionsHandler

      // Start service-1.cds
      'srv/controller/service-1/service-1.cds': [
        `using {${this.options.namespace} as Base} from '../../../db/schema';`,
        ``,
        `service ServiceA {`,
        `   @readonly`,
        `   entity ${this.options.entityName} as projection on Base.${this.options.entityName};`,
        `}`,
      ],
      // End service-1.cds

      // Start service-1.ts
      'srv/controller/service-1/service-1.ts': [
        `import { CDSDispatcher } from '@dxfrontier/cds-ts-dispatcher';`,
        `import { ${this.options.entityName}Handler } from './handler/${this.options.entityName}Handler';`,
        `import { UnboundActionsHandler } from './handler/UnboundActionsHandler';`,
        '',
        `export = new CDSDispatcher([${this.options.entityName}Handler, UnboundActionsHandler]).initialize();`,
      ],
      // End service-1.ts

      // Start Middleware
      [`srv/middleware/Middleware${this.options.entityName}.ts`]: [
        `import type { MiddlewareImpl, NextMiddleware, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';`,
        `import type { ${this.options.entityName} } from '#cds-models/ServiceA';`,
        ``,
        `export class Middleware${this.options.entityName} implements MiddlewareImpl {`,
        `  public async use(req: TypedRequest<${this.options.entityName}>, next: NextMiddleware): Promise<void> {`,
        `    console.log('Middleware entity 1 : EXECUTED');`,
        `    await next();`,
        `  }`,
        `}`,
      ],
      // End Middleware

      // Start MiddlewareAfterRead
      'srv/middleware/MiddlewareAfterRead.ts': [
        `import type { MiddlewareImpl, NextMiddleware, TypedRequest } from '@dxfrontier/cds-ts-dispatcher';`,
        `import type { ${this.options.entityName} } from '#cds-models/ServiceA';`,
        ``,
        `export class MiddlewareAfterRead implements MiddlewareImpl {`,
        `  public async use(req: TypedRequest<${this.options.entityName}>, next: NextMiddleware): Promise<void> {`,
        `    console.log('Middleware entity 1 : EXECUTED');`,
        `    await next();`,
        `  }`,
        `}`,
      ],
      // End MiddlewareAfterRead

      // Start Repository
      [`srv/repository/${this.options.entityName}Repository.ts`]: [
        `import { Repository } from '@dxfrontier/cds-ts-dispatcher';`,
        `import { BaseRepository } from '@dxfrontier/cds-ts-repository';`,
        ``,
        `import { ${this.options.entityName} } from '#cds-models/ServiceA';`,
        ``,
        `@Repository()`,
        `export class ${this.options.entityName}Repository extends BaseRepository<${this.options.entityName}> {`,
        `  constructor() {`,
        `    super(${this.options.entityName});`,
        `  }`,
        `  // ... define custom CDS-QL actions if BaseRepository ones are not satisfying your needs !`,
        `}`,
      ],
      // End Repository

      // Start Service
      [`srv/service/${this.options.entityName}Service.ts`]: [
        `import { Inject, Service, ServiceLogic, CDS_DISPATCHER } from '@dxfrontier/cds-ts-dispatcher';`,
        ``,
        `import { ${this.options.entityName}Repository } from '../repository/${this.options.entityName}Repository';`,
        ``,
        `@ServiceLogic()`,
        `export class ${this.options.entityName}Service {`,
        `  @Inject(CDS_DISPATCHER.SRV) private readonly srv: Service;`,
        `  @Inject(${this.options.entityName}Repository) private readonly ${this.options.entityName}Service: ${this.options.entityName}Repository;`,
        `}`,
      ],
      // End Service

      // Start constants.ts
      'srv/util/constants/constants.ts': [
        `const Constants = {`,
        `  // Example`,
        `  CONSTANT_1: {`,
        `    PROP_CONSTANT_1: 'SOMETHING',`,
        `  },`,
        `};`,
        ``,
        `export default Constants;`,
      ],
      // End constants.ts

      // Start util.ts
      'srv/util/helpers/util.ts': [
        `const Util = {`,
        `  // Example`,
        `  aHelperFunction() {`,
        `    return 1;`,
        `  },`,
        `};`,
        ``,
        `export default Util;`,
      ],
      // End util.ts

      // Start types.ts
      'srv/util/types/types.ts': [`// Example`, `export type AType = string;`],
      // End types.ts
    };
  }

  /**
   * Capire db directory templates for the SampleCode configuration.
   * @return Contents for sample db directory files.
   * @protected
   */
  protected get sampleCodeFileDbTemplates(): Record<string, string[]> {
    return {
      'db/schema.cds': [
        "using { managed } from '@sap/cds/common';",
        '',
        `namespace ${this.options.namespace};`,
        '',
        `entity ${this.options.entityName} : managed {`,
        '  key ID: Integer;',
        '  descr: localized String(111);',
        '}',
      ],
    };
  }

  /**
   * Capire data directory templates for the SampleCode configuration.
   * @return Contents for sample data directory files.
   * @protected
   */
  protected get sampleCodeFileDataTemplates(): Record<string, string[]> {
    const filePath = `test/data/${this.options.namespace}-${this.options.entityName}.csv`;
    const filePathTexts = `test/data/${this.options.namespace}-${this.options.entityName}.texts.csv`;

    return {
      [filePath]: [
        'ID,createdAt,createdBy,modifiedAt,modifiedBy,descr',
        '1,,,,,Description 1',
        '2,,,,,Description 2',
        '3,,,,,Description 3',
      ],
      [filePathTexts]: ['locale,ID,descr'],
    };
  }

  /**
   * Creates the template files for the specified directory.
   * @param templates The templates to create.
   */
  public createTemplates(templates: Record<string, string[]>): void {
    for (const path in templates) {
      if (templates[path]) {
        new SampleFile(this.project, path, {
          contents: templates[path].join('\n'),
        });
      }
    }
  }

  protected override get additionalDevDependencies(): string[] {
    return [
      `${constants['@cap-js/cds-typer'].NAME}@${constants['@cap-js/cds-typer'].VERSION}`,
      `${constants['@cap-js/cds-types'].NAME}@${constants['@cap-js/cds-types'].VERSION}`,
      `${constants['@sap/cds-dk'].NAME}@${constants['@sap/cds-dk'].VERSION}`,
      `${constants['@sap/cds-lsp'].NAME}@${constants['@sap/cds-lsp'].VERSION}`,
    ];
  }

  protected override get additionalDependencies(): string[] {
    return [
      `${constants['@dxfrontier/cds-ts-repository'].NAME}@${constants['@dxfrontier/cds-ts-repository'].VERSION}`,
      `${constants['@sap/cds'].NAME}@${constants['@sap/cds'].VERSION}`,
      `${constants['@sap/xssec'].NAME}@${constants['@sap/xssec'].VERSION}`,
    ];
  }

  protected override get additionalScripts(): Record<string, string> {
    return {
      start: 'cds-serve --production',
      'start:local': 'cds-ts serve',
      watch: 'cds-ts watch',
      'build:cds': 'cds-ts build --production',
      'build:cds:message': 'echo "Build CDS ..."',
      'build:ts': 'tsc',
      'build:ts:message': 'echo "Transpile TS => JS ..."',
      'build:srv:clean:ts': 'find gen/srv/srv -type f -name "*.ts" -delete',
      'build:srv:clean:ts:message': 'echo "Clean TS files from srv folder ..."',
      build:
        'run-s build:cds:message build:cds build:ts:message build:ts build:srv:clean:ts:message build:srv:clean:ts',
    };
  }

  protected override get additionalSettings(): Settings {
    return {
      imports: {
        '#cds-models/*': './@cds-models/*/index.js',
        '#dispatcher': './@dispatcher/index.js',
      },
    };
  }

  public override registerConfig(): void {
    if (this.project instanceof BaseProject) {
      this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
      this.project.npmConfig?.addDependencies(this.additionalDependencies);
      this.project.npmConfig?.addScripts(this.additionalScripts);
      this.project.npmConfig?.addSettings(this.additionalSettings);
    }
  }

  public override applyConfig(): void {
    this.createTemplates(this.sampleCodeFileRootTemplates);
    this.createTemplates(this.sampleCodeFileDbTemplates);
    this.createTemplates(this.sampleCodeFileDataTemplates);
    this.createTemplates(this.sampleCodeFileSrvTemplates);
  }
}
