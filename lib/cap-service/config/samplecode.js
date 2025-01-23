"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCodeConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../../base");
/**
 * Implementing all relevant SampleCode configuration for the CapService project.
 */
class SampleCodeConfigCapService extends base_1.SampleCodeConfigBase {
    constructor(project, options) {
        super(project);
        this.options = options;
    }
    /**
     * Capire root directory templates for the SampleCode configuration.
     * @return Contents for sample root directory files.
     * @protected
     */
    get sampleCodeFileRootTemplates() {
        return {
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
            'xs-security.json': ['{', '  "scopes": [],', '  "attributes": [],', '  "role-templates": []', '}'],
        };
    }
    /**
     * Capire db directory templates for the SampleCode configuration.
     * @return Contents for sample db directory files.
     * @protected
     */
    get sampleCodeFileDbTemplates() {
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
    get sampleCodeFileDataTemplates() {
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
     * Creates the template files for the root directory.
     */
    createRootTemplates() {
        for (const path in this.sampleCodeFileRootTemplates) {
            if (this.sampleCodeFileRootTemplates[path]) {
                new projen_1.SampleFile(this.project, path, {
                    contents: this.sampleCodeFileRootTemplates[path].join('\n'),
                });
            }
        }
    }
    /**
     * Creates the template files for the db directory.
     */
    createDbTemplates() {
        for (const path in this.sampleCodeFileDbTemplates) {
            if (this.sampleCodeFileDbTemplates[path]) {
                new projen_1.SampleFile(this.project, path, {
                    contents: this.sampleCodeFileDbTemplates[path].join('\n'),
                });
            }
        }
    }
    /**
     * Creates the template files for the data directory.
     */
    createDataTemplates() {
        for (const path in this.sampleCodeFileDataTemplates) {
            if (this.sampleCodeFileDataTemplates[path]) {
                new projen_1.SampleFile(this.project, path, {
                    contents: this.sampleCodeFileDataTemplates[path].join('\n'),
                });
            }
        }
    }
    get additionalDevDependencies() {
        return ['@cap-js/cds-typer@^0.32.0', '@cap-js/cds-types@^0.9.0', '@sap/cds-dk@^8.6.1', '@sap/cds-lsp@^8.5.1'];
    }
    get additionalDependencies() {
        return [/*'@dxfrontier/cds-ts-dispatcher@^3.2.7', */ '@sap/cds@^8.6.1', '@sap/xssec@^4.2.8'];
    }
    get additionalScripts() {
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
            build: 'run-s build:cds:message build:cds build:ts:message build:ts build:srv:clean:ts:message build:srv:clean:ts',
        };
    }
    get additionalSettings() {
        return {
            imports: {
                '#cds-models/*': './@cds-models/*/index.js',
                '#dispatcher': './@dispatcher/index.js',
            },
        };
    }
    registerConfig() {
        if (this.project instanceof base_1.BaseProject) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.npmConfig?.addDependencies(this.additionalDependencies);
            this.project.npmConfig?.addScripts(this.additionalScripts);
            this.project.npmConfig?.addSettings(this.additionalSettings);
        }
    }
    applyConfig() {
        this.createRootTemplates();
        this.createDbTemplates();
        this.createDataTemplates();
    }
}
exports.SampleCodeConfigCapService = SampleCodeConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
SampleCodeConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCodeConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jYXAtc2VydmljZS9jb25maWcvc2FtcGxlY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFvQztBQUVwQyxxQ0FBK0Q7QUFHL0Q7O0dBRUc7QUFDSCxNQUFhLDBCQUEyQixTQUFRLDJCQUFvQjtJQUdsRSxZQUFZLE9BQTBCLEVBQUUsT0FBaUM7UUFDdkUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLDJCQUEyQjtRQUN2QyxPQUFPO1lBQ0wsYUFBYSxFQUFFO2dCQUNiLEdBQUc7Z0JBQ0gsaUJBQWlCO2dCQUNqQix3QkFBd0I7Z0JBQ3hCLGlCQUFpQjtnQkFDakIsMEJBQTBCO2dCQUMxQixTQUFTO2dCQUNULFFBQVE7Z0JBQ1IsdUJBQXVCO2dCQUN2QixpQkFBaUI7Z0JBQ2pCLHlCQUF5QjtnQkFDekIsVUFBVTtnQkFDVixlQUFlO2dCQUNmLHlCQUF5QjtnQkFDekIsaUNBQWlDO2dCQUNqQyxxQ0FBcUM7Z0JBQ3JDLFNBQVM7Z0JBQ1QsT0FBTztnQkFDUCxNQUFNO2dCQUNOLGFBQWE7Z0JBQ2IsOEJBQThCO2dCQUM5QixNQUFNO2dCQUNOLFlBQVk7Z0JBQ1oscUJBQXFCO2dCQUNyQixNQUFNO2dCQUNOLGlCQUFpQjtnQkFDakIsK0JBQStCO2dCQUMvQixNQUFNO2dCQUNOLFlBQVk7Z0JBQ1osdUNBQXVDO2dCQUN2QyxNQUFNO2dCQUNOLGFBQWE7Z0JBQ2IsaUNBQWlDO2dCQUNqQyxLQUFLO2dCQUNMLEdBQUc7YUFDSjtZQUNELG1CQUFtQixFQUFFO2dCQUNuQixHQUFHO2dCQUNILDBCQUEwQjtnQkFDMUIsNkJBQTZCO2dCQUM3QixnQ0FBZ0M7Z0JBQ2hDLGlDQUFpQztnQkFDakMscUNBQXFDO2dCQUNyQyxx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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW1wbGVGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IENhcFNlcnZpY2VQcm9qZWN0LCBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMgfSBmcm9tICcuLi8uL3Byb2plY3QnO1xuaW1wb3J0IHsgQmFzZVByb2plY3QsIFNhbXBsZUNvZGVDb25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIENhcFNlcnZpY2UgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlIGV4dGVuZHMgU2FtcGxlQ29kZUNvbmZpZ0Jhc2Uge1xuICBwcml2YXRlIG9wdGlvbnM6IENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBDYXBTZXJ2aWNlUHJvamVjdCwgb3B0aW9uczogQ2FwU2VydmljZVByb2plY3RPcHRpb25zKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGlyZSByb290IGRpcmVjdG9yeSB0ZW1wbGF0ZXMgZm9yIHRoZSBTYW1wbGVDb2RlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEByZXR1cm4gQ29udGVudHMgZm9yIHNhbXBsZSByb290IGRpcmVjdG9yeSBmaWxlcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzYW1wbGVDb2RlRmlsZVJvb3RUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5jZHNyYy5qc29uJzogW1xuICAgICAgICAneycsXG4gICAgICAgICcgIFwicmVxdWlyZXNcIjogeycsXG4gICAgICAgICcgICAgXCJbZGV2ZWxvcG1lbnRdXCI6IHsnLFxuICAgICAgICAnICAgICAgXCJhdXRoXCI6IHsnLFxuICAgICAgICAnICAgICAgICBcImtpbmRcIjogXCJtb2NrZWRcIicsXG4gICAgICAgICcgICAgICB9JyxcbiAgICAgICAgJyAgICB9LCcsXG4gICAgICAgICcgICAgXCJbcHJvZHVjdGlvbl1cIjogeycsXG4gICAgICAgICcgICAgICBcImF1dGhcIjogeycsXG4gICAgICAgICcgICAgICAgIFwia2luZFwiOiBcInhzdWFhXCInLFxuICAgICAgICAnICAgICAgfSwnLFxuICAgICAgICAnICAgICAgXCJkYlwiOiB7JyxcbiAgICAgICAgJyAgICAgICAgXCJraW5kXCI6IFwiaGFuYVwiLCcsXG4gICAgICAgICcgICAgICAgIFwiaW1wbFwiOiBcIkBjYXAtanMvaGFuYVwiLCcsXG4gICAgICAgICcgICAgICAgIFwiZGVwbG95LWZvcm1hdFwiOiBcImhkYnRhYmxlXCInLFxuICAgICAgICAnICAgICAgfScsXG4gICAgICAgICcgICAgfScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJpMThuXCI6IHsnLFxuICAgICAgICAnICAgIFwiZGVmYXVsdF9sYW5ndWFnZVwiOiBcImVuXCInLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwibG9nXCI6IHsnLFxuICAgICAgICAnICAgIFwic2VydmljZVwiOiB0cnVlJyxcbiAgICAgICAgJyAgfSwnLFxuICAgICAgICAnICBcImZlYXR1cmVzXCI6IHsnLFxuICAgICAgICAnICAgIFwicHJlc2VydmVfY29tcHV0ZWRcIjogdHJ1ZScsXG4gICAgICAgICcgIH0sJyxcbiAgICAgICAgJyAgXCJzcWxcIjogeycsXG4gICAgICAgICcgICAgXCJuYXRpdmVfaGFuYV9hc3NvY2lhdGlvbnNcIjogZmFsc2UnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIFwiaGFuYVwiOiB7JyxcbiAgICAgICAgJyAgICBcImRlcGxveS1mb3JtYXRcIjogXCJoZGJ0YWJsZVwiJyxcbiAgICAgICAgJyAgfScsXG4gICAgICAgICd9JyxcbiAgICAgIF0sXG4gICAgICAnLmNkc3ByZXR0aWVyLmpzb24nOiBbXG4gICAgICAgICd7JyxcbiAgICAgICAgJyAgXCJhbGlnbkFmdGVyS2V5XCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblByZUFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblBvc3RBbm5vdGF0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Db2xvbnNJbkFubm90YXRpb25zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblZhbHVlc0luQW5ub3RhdGlvbnNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQWN0aW9uc0FuZEZ1bmN0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25BY3Rpb25OYW1lc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25BY3Rpb25SZXR1cm5zXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkFzSW5FbnRpdGllc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Bc0luU2VsZWN0SXRlbXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduQXNJblVzaW5nXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkV4cHJlc3Npb25zQW5kQ29uZGl0aW9uc1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25FeHByQW5kQ29uZFdpdGhpbkJsb2NrXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnblR5cGVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkNvbG9uc0JlZm9yZVR5cGVzXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJhbGlnbkVxdWFsc0FmdGVyVHlwZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImFsaWduVHlwZXNXaXRoaW5CbG9ja1wiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiYWxpZ25Db21wb3NpdGlvblN0cnVjdFRvUmlnaHRcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImNxbEtleXdvcmRDYXBpdGFsaXphdGlvblwiOiBcImxvd2VyXCIsJyxcbiAgICAgICAgJyAgXCJrZWVwUHJlQW5ub3RhdGlvbnNJbk9yaWdpbmFsTGluZVwiOiBcImtlZXBMaW5lXCIsJyxcbiAgICAgICAgJyAgXCJrZWVwUG9zdEFubm90YXRpb25zSW5PcmlnaW5hbExpbmVcIjogXCJrZWVwTGluZVwiLCcsXG4gICAgICAgICcgIFwia2VlcEVtcHR5QnJhY2tldHNUb2dldGhlclwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwia2VlcFNpbmdsZUxpbmVkQmxvY2tzVG9nZXRoZXJcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcImtlZXBPcmlnaW5hbEVtcHR5TGluZXNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIm1heEtlZXBFbXB0eUxpbmVzXCI6IDIsJyxcbiAgICAgICAgJyAgXCJvcGVuaW5nQnJhY2VJbk5ld0xpbmVcIjogZmFsc2UsJyxcbiAgICAgICAgJyAgXCJzZWxlY3RJbk5ld0xpbmVcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcInRhYlNpemVcIjogMiwnLFxuICAgICAgICAnICBcImZpbmFsTmV3bGluZVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwiZm9ybWF0RG9jQ29tbWVudHNcIjogZmFsc2UsJyxcbiAgICAgICAgJyAgXCJtYXhEb2NDb21tZW50TGluZVwiOiA2MCwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VCZWZvcmVDb2xvblwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUJlZm9yZUNvbG9uSW5Bbm5vdGF0aW9uXCI6IGZhbHNlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFmdGVyQ29sb25cIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBZnRlckNvbG9uSW5Bbm5vdGF0aW9uXCI6IHRydWUsJyxcbiAgICAgICAgJyAgXCJ3aGl0ZXNwYWNlQWZ0ZXJDb21tYVwiOiB0cnVlLCcsXG4gICAgICAgICcgIFwid2hpdGVzcGFjZUFyb3VuZEFsaWduZWRPcHNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VBcm91bmRCaW5hcnlPcHNcIjogdHJ1ZSwnLFxuICAgICAgICAnICBcIndoaXRlc3BhY2VXaXRoaW5CcmFja2V0c1wiOiBmYWxzZScsXG4gICAgICAgICd9JyxcbiAgICAgIF0sXG4gICAgICAnZGVmYXVsdC1lbnYuanMnOiBbXG4gICAgICAgICcvKionLFxuICAgICAgICAnICogRmV0Y2hlcyBgVkNBUF9TRVJWSUNFU2AgZm9yIGEgZ2l2ZW4gQ0YgYXBwbGljYXRpb24gYW5kIHdyaXRlcyBpdCB0byBhIGZpbGUuJyxcbiAgICAgICAgJyAqIEl0IHV0aWxpemVzIHRoZSBDbG91ZCBGb3VuZHJ5IENMSSB0byBkbyBzby4nLFxuICAgICAgICAnIConLFxuICAgICAgICAnICogTWFrZSBzdXJlIHlvdSBhcmUgbG9nZ2VkIGluIHZpYSB0aGUgQ0YgQ0xJIChgY2YgbG9naW5gKSBiZWZvcmUgcnVubmluZyB0aGUnLFxuICAgICAgICAnICogc2NyaXB0LiBZb3UgY2FuIGNoZWNrIHlvdXIgbG9naW4gYW5kIHRoZSBvcmdhbml6YXRpb24gYW5kIHNwYWNlIHlvdSBhcmUnLFxuICAgICAgICAnICogdGFyZ2V0dGluZyBieSB1c2luZyBgY2YgdGFyZ2V0YC4nLFxuICAgICAgICAnIConLFxuICAgICAgICAnICogQWxsb3dzIG9uLXByZW1pc2UgY29ubmVjdGl2aXR5IHByb3h5aW5nIGlmIG5lY2Vzc2FyeScsXG4gICAgICAgICcgKicsXG4gICAgICAgICcgKiBAYXV0aG9yIFNlYmFzdGlhbiBCbGVzc2luZycsXG4gICAgICAgICcgKi8nLFxuICAgICAgICBcImNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcIixcbiAgICAgICAgXCJjb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1wiLFxuICAgICAgICBcImNvbnN0IGV4ZWMgPSB1dGlsLnByb21pc2lmeShyZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYyk7XCIsXG4gICAgICAgIFwiY29uc3Qgc3Bhd24gPSB1dGlsLnByb21pc2lmeShyZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuc3Bhd24pO1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2FzeW5jIGZ1bmN0aW9uIGdldEFwcEd1aWQoYXBwTmFtZSkgeycsXG4gICAgICAgICcgIGNvbnN0IGNtZCA9IGBjZiBhcHAgJHthcHBOYW1lfSAtLWd1aWRgOycsXG4gICAgICAgICcgIGNvbnNvbGUubG9nKGNtZCk7JyxcbiAgICAgICAgJyAgY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gYXdhaXQgZXhlYyhjbWQpOycsXG4gICAgICAgICcgIGlmIChzdGRlcnIpIGNvbnNvbGUubG9nKGBzdGRlcnI6ICR7c3RkZXJyfWApOycsXG4gICAgICAgICcgIHJldHVybiBzdGRvdXQudHJpbSgpOycsXG4gICAgICAgICd9JyxcbiAgICAgICAgJycsXG4gICAgICAgICdhc3luYyBmdW5jdGlvbiBnZXREZWZhdWx0RW52KGFwcEd1aWQpIHsnLFxuICAgICAgICAnICBjb25zdCBjbWQgPSBgY2YgY3VybCBcInYzL2FwcHMvJHthcHBHdWlkfS9lbnZcImA7JyxcbiAgICAgICAgJyAgY29uc29sZS5sb2coY21kKTsnLFxuICAgICAgICAnICBjb25zdCB7IHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBleGVjKGNtZCk7JyxcbiAgICAgICAgJyAgaWYgKHN0ZGVycikgY29uc29sZS5sb2coYHN0ZGVycjogJHtzdGRlcnJ9YCk7JyxcbiAgICAgICAgJyAgcmV0dXJuIEpTT04ucGFyc2Uoc3Rkb3V0KS5zeXN0ZW1fZW52X2pzb247JyxcbiAgICAgICAgJ30nLFxuICAgICAgICAnJyxcbiAgICAgICAgJyhhc3luYyAoKSA9PiB7JyxcbiAgICAgICAgJyAgY29uc3QgbXlBcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpOycsXG4gICAgICAgICcgIGNvbnN0IGFwcE5hbWUgPSBteUFyZ3NbMF07JyxcbiAgICAgICAgJyAgaWYgKCFhcHBOYW1lKSB7JyxcbiAgICAgICAgXCIgICAgY29uc29sZS5lcnJvcignUGxlYXNlIHByb3ZpZGUgYSBDRiBhcHBsaWNhdGlvbiBuYW1lIHRvIGZldGNoIGl0cyBlbnZpcm9ubWVudCEnKTtcIixcbiAgICAgICAgJyAgICByZXR1cm47JyxcbiAgICAgICAgJyAgfScsXG4gICAgICAgICcnLFxuICAgICAgICAnICBsZXQgZW52RmlsZU5hbWUgPSBteUFyZ3NbMV07JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBlbnZGaWxlTmFtZSA9IGVudkZpbGVOYW1lID8gZW52RmlsZU5hbWUgOiAnZGVmYXVsdC1lbnYuanNvbic7XCIsXG4gICAgICAgICcgIGNvbnNvbGUubG9nKGBXcml0aW5nIGVudmlyb25tZW50IG9mICR7YXBwTmFtZX0gdG8gJHtlbnZGaWxlTmFtZX1gKTsnLFxuICAgICAgICAnJyxcbiAgICAgICAgJyAgY29uc3QgZGVmYXVsdEVudiA9IGF3YWl0IGdldERlZmF1bHRFbnYoYXdhaXQgZ2V0QXBwR3VpZChhcHBOYW1lKSk7JyxcbiAgICAgICAgJycsXG4gICAgICAgICcgIGxldCBiUnVuUHJveHkgPSBmYWxzZTsnLFxuICAgICAgICAnICBsZXQgcHJveHlQb3J0ID0gbnVsbDsnLFxuICAgICAgICAnICBsZXQgcHJveHlIb3N0ID0gbnVsbDsnLFxuICAgICAgICAnJyxcbiAgICAgICAgXCIgIGlmIChkZWZhdWx0RW52WydWQ0FQX1NFUlZJQ0VTJ11bJ2Nvbm5lY3Rpdml0eSddKSB7XCIsXG4gICAgICAgICcgICAgcHJveHlQb3J0ID0gZGVmYXVsdEVudi5WQ0FQX1NFUlZJQ0VTLmNvbm5lY3Rpdml0eVswXS5jcmVkZW50aWFscy5vbnByZW1pc2VfcHJveHlfcG9ydDsnLFxuICAgICAgICAnICAgIHByb3h5SG9zdCA9IGRlZmF1bHRFbnYuVkNBUF9TRVJWSUNFUy5jb25uZWN0aXZpdHlbMF0uY3JlZGVudGlhbHMub25wcmVtaXNlX3Byb3h5X2hvc3Q7JyxcbiAgICAgICAgXCIgICAgZGVmYXVsdEVudi5WQ0FQX1NFUlZJQ0VTLmNvbm5lY3Rpdml0eVswXS5jcmVkZW50aWFscy5vbnByZW1pc2VfcHJveHlfaG9zdCA9ICdsb2NhbGhvc3QnO1wiLFxuICAgICAgICAnICAgIGJSdW5Qcm94eSA9IHRydWU7JyxcbiAgICAgICAgJyAgfScsXG4gICAgICAgICcnLFxuICAgICAgICBcIiAgZnMud3JpdGVGaWxlKCdkZWZhdWx0LWVudi5qc29uJywgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdEVudiwgbnVsbCwgMiksIGFzeW5jIChlcnIpID0+IHtcIixcbiAgICAgICAgJyAgICBpZiAoZXJyKSB7JyxcbiAgICAgICAgJyAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTsnLFxuICAgICAgICAnICAgIH0gZWxzZSBpZiAoYlJ1blByb3h5KSB7JyxcbiAgICAgICAgJyAgICAgIGNvbnNvbGUubG9nKGBjZiBzc2ggJHthcHBOYW1lfSAtTCAke3Byb3h5UG9ydH06JHtwcm94eUhvc3R9OiR7cHJveHlQb3J0fWApOycsXG4gICAgICAgIFwiICAgICAgYXdhaXQgc3Bhd24oJ2NmJywgW2Bzc2ggJHthcHBOYW1lfSAtTCAke3Byb3h5UG9ydH06JHtwcm94eUhvc3R9OiR7cHJveHlQb3J0fWBdLCB7XCIsXG4gICAgICAgICcgICAgICAgIHNoZWxsOiB0cnVlLCcsXG4gICAgICAgIFwiICAgICAgICBzdGRpbzogJ2luaGVyaXQnLFwiLFxuICAgICAgICAnICAgICAgfSk7JyxcbiAgICAgICAgJyAgICB9JyxcbiAgICAgICAgJyAgfSk7JyxcbiAgICAgICAgJycsXG4gICAgICAgIFwiICBjb25zb2xlLmxvZygnRG9uZScpO1wiLFxuICAgICAgICAnfSkoKTsnLFxuICAgICAgXSxcbiAgICAgICdtdGEueWFtbCc6IFtcbiAgICAgICAgXCJfc2NoZW1hLXZlcnNpb246ICczLjEnXCIsXG4gICAgICAgIGBJRDogJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfWAsXG4gICAgICAgICd2ZXJzaW9uOiAwLjAuMScsXG4gICAgICAgIGBkZXNjcmlwdGlvbjogJHt0aGlzLm9wdGlvbnMuZGVzY3JpcHRpb259YCxcbiAgICAgICAgJ3BhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgZW5hYmxlLXBhcmFsbGVsLWRlcGxveW1lbnRzOiB0cnVlJyxcbiAgICAgICAgJ2J1aWxkLXBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgYmVmb3JlLWFsbDonLFxuICAgICAgICAnICAgIC0gYnVpbGRlcjogY3VzdG9tJyxcbiAgICAgICAgJyAgICAgIGNvbW1hbmRzOicsXG4gICAgICAgICcgICAgICAgIC0gbnBtIGNpJyxcbiAgICAgICAgJyAgICAgICAgLSBucG0gcnVuIGJ1aWxkJyxcbiAgICAgICAgJyAgICAgICAgLSBucHggQGNhcC1qcy9jZHMtdHlwZXIgXCIqXCIgLS1vdXRwdXREaXJlY3RvcnkgZ2VuL3Nydi9AY2RzLW1vZGVscycsXG4gICAgICAgICdtb2R1bGVzOicsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tc3J2YCxcbiAgICAgICAgJyAgICB0eXBlOiBub2RlanMnLFxuICAgICAgICAnICAgIHBhdGg6IGdlbi9zcnYnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkcGFjazogbm9kZWpzX2J1aWxkcGFjaycsXG4gICAgICAgICcgICAgICByZWFkaW5lc3MtaGVhbHRoLWNoZWNrLXR5cGU6IGh0dHAnLFxuICAgICAgICAnICAgICAgcmVhZGluZXNzLWhlYWx0aC1jaGVjay1odHRwLWVuZHBvaW50OiAvaGVhbHRoJyxcbiAgICAgICAgJyAgICBidWlsZC1wYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBidWlsZGVyOiBucG0nLFxuICAgICAgICAnICAgIHByb3ZpZGVzOicsXG4gICAgICAgICcgICAgICAtIG5hbWU6IHNydi1hcGknLFxuICAgICAgICAnICAgICAgICBwcm9wZXJ0aWVzOicsXG4gICAgICAgICcgICAgICAgICAgc3J2LXVybDogJHtkZWZhdWx0LXVybH0nLFxuICAgICAgICAnICAgIHJlcXVpcmVzOicsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYWAsXG4gICAgICAgIGAgICAgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uYCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tY29ubmVjdGl2aXR5YCxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGJgLFxuICAgICAgICBgICAtIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LWRlc3RpbmF0aW9uc2AsXG4gICAgICAgICcgICAgdHlwZTogY29tLnNhcC5hcHBsaWNhdGlvbi5jb250ZW50JyxcbiAgICAgICAgJyAgICByZXF1aXJlczonLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAnICAgICAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICAgICAgc2VydmljZS1rZXk6JyxcbiAgICAgICAgYCAgICAgICAgICAgIG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9LXVhYS1rZXlgLFxuICAgICAgICAnICAgICAgLSBuYW1lOiBzcnYtYXBpJyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGVzdGluYXRpb25gLFxuICAgICAgICAnICAgICAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICAgICAgY29udGVudC10YXJnZXQ6IHRydWUnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGNvbnRlbnQ6JyxcbiAgICAgICAgJyAgICAgICAgaW5zdGFuY2U6JyxcbiAgICAgICAgJyAgICAgICAgICBkZXN0aW5hdGlvbnM6JyxcbiAgICAgICAgJyAgICAgICAgICAgIC0gQXV0aGVudGljYXRpb246IE9BdXRoMlVzZXJUb2tlbkV4Y2hhbmdlJyxcbiAgICAgICAgYCAgICAgICAgICAgICAgTmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tYXBwLXNydmAsXG4gICAgICAgIGAgICAgICAgICAgICAgIFRva2VuU2VydmljZUluc3RhbmNlTmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgYCAgICAgICAgICAgICAgVG9rZW5TZXJ2aWNlS2V5TmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhLWtleWAsXG4gICAgICAgICcgICAgICAgICAgICAgIFVSTDogfntzcnYtYXBpL3Nydi11cmx9JyxcbiAgICAgICAgYCAgICAgICAgICAgICAgc2FwLmNsb3VkLnNlcnZpY2U6ICR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX1gLFxuICAgICAgICAnICAgICAgICAgIGV4aXN0aW5nX2Rlc3RpbmF0aW9uc19wb2xpY3k6IHVwZGF0ZScsXG4gICAgICAgICcgICAgYnVpbGQtcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgbm8tc291cmNlOiB0cnVlJyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYi1kZXBsb3llcmAsXG4gICAgICAgICcgICAgdHlwZTogaGRiJyxcbiAgICAgICAgJyAgICBwYXRoOiBnZW4vZGInLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGJ1aWxkcGFjazogbm9kZWpzX2J1aWxkcGFjaycsXG4gICAgICAgICcgICAgcmVxdWlyZXM6JyxcbiAgICAgICAgYCAgICAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tZGJgLFxuICAgICAgICBgICAgICAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS11YWFgLFxuICAgICAgICAncmVzb3VyY2VzOicsXG4gICAgICAgIGAgIC0gbmFtZTogJHt0aGlzLm9wdGlvbnMubmFtZX0tdWFhYCxcbiAgICAgICAgJyAgICB0eXBlOiBvcmcuY2xvdWRmb3VuZHJ5Lm1hbmFnZWQtc2VydmljZScsXG4gICAgICAgICcgICAgcGFyYW1ldGVyczonLFxuICAgICAgICAnICAgICAgcGF0aDogLi94cy1zZWN1cml0eS5qc29uJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2U6IHhzdWFhJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2UtcGxhbjogYXBwbGljYXRpb24nLFxuICAgICAgICAnICAgICAgY29uZmlnOicsXG4gICAgICAgICcgICAgICAgIHRlbmFudC1tb2RlOiBkZWRpY2F0ZWQnLFxuICAgICAgICBgICAgICAgICB4c2FwcG5hbWU6ICR7dGhpcy5vcHRpb25zLm5hbWV9YCxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1jb25uZWN0aXZpdHlgLFxuICAgICAgICAnICAgIHR5cGU6IG9yZy5jbG91ZGZvdW5kcnkubWFuYWdlZC1zZXJ2aWNlJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBjb25uZWN0aXZpdHknLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBsaXRlJyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kZXN0aW5hdGlvbmAsXG4gICAgICAgICcgICAgdHlwZTogb3JnLmNsb3VkZm91bmRyeS5tYW5hZ2VkLXNlcnZpY2UnLFxuICAgICAgICAnICAgIHBhcmFtZXRlcnM6JyxcbiAgICAgICAgJyAgICAgIGNvbmZpZzonLFxuICAgICAgICAnICAgICAgICBIVE1MNVJ1bnRpbWVfZW5hYmxlZDogdHJ1ZScsXG4gICAgICAgICcgICAgICAgIGluaXRfZGF0YTonLFxuICAgICAgICAnICAgICAgICAgIGluc3RhbmNlOicsXG4gICAgICAgICcgICAgICAgICAgICBkZXN0aW5hdGlvbnM6JyxcbiAgICAgICAgJyAgICAgICAgICAgICAgLSBBdXRoZW50aWNhdGlvbjogTm9BdXRoZW50aWNhdGlvbicsXG4gICAgICAgICcgICAgICAgICAgICAgICAgTmFtZTogdWk1JyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBQcm94eVR5cGU6IEludGVybmV0JyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBUeXBlOiBIVFRQJyxcbiAgICAgICAgJyAgICAgICAgICAgICAgICBVUkw6IGh0dHBzOi8vdWk1LnNhcC5jb20nLFxuICAgICAgICAnICAgICAgICAgICAgZXhpc3RpbmdfZGVzdGluYXRpb25zX3BvbGljeTogdXBkYXRlJyxcbiAgICAgICAgJyAgICAgICAgdmVyc2lvbjogMS4wLjAnLFxuICAgICAgICAnICAgICAgc2VydmljZTogZGVzdGluYXRpb24nLFxuICAgICAgICAnICAgICAgc2VydmljZS1wbGFuOiBsaXRlJyxcbiAgICAgICAgYCAgLSBuYW1lOiAke3RoaXMub3B0aW9ucy5uYW1lfS1kYmAsXG4gICAgICAgICcgICAgdHlwZTogY29tLnNhcC54cy5oZGktY29udGFpbmVyJyxcbiAgICAgICAgJyAgICBwYXJhbWV0ZXJzOicsXG4gICAgICAgICcgICAgICBzZXJ2aWNlOiBoYW5hJyxcbiAgICAgICAgJyAgICAgIHNlcnZpY2UtcGxhbjogaGRpLXNoYXJlZCcsXG4gICAgICAgICcgICAgcHJvcGVydGllczonLFxuICAgICAgICAnICAgICAgaGRpLXNlcnZpY2UtbmFtZTogJHtzZXJ2aWNlLW5hbWV9JyxcbiAgICAgIF0sXG4gICAgICAneHMtc2VjdXJpdHkuanNvbic6IFsneycsICcgIFwic2NvcGVzXCI6IFtdLCcsICcgIFwiYXR0cmlidXRlc1wiOiBbXSwnLCAnICBcInJvbGUtdGVtcGxhdGVzXCI6IFtdJywgJ30nXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhcGlyZSBkYiBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgZGIgZGlyZWN0b3J5IGZpbGVzLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUNvZGVGaWxlRGJUZW1wbGF0ZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2RiL3NjaGVtYS5jZHMnOiBbXG4gICAgICAgIFwidXNpbmcgeyBtYW5hZ2VkIH0gZnJvbSAnQHNhcC9jZHMvY29tbW9uJztcIixcbiAgICAgICAgJycsXG4gICAgICAgIGBuYW1lc3BhY2UgJHt0aGlzLm9wdGlvbnMubmFtZXNwYWNlfTtgLFxuICAgICAgICAnJyxcbiAgICAgICAgYGVudGl0eSAke3RoaXMub3B0aW9ucy5lbnRpdHlOYW1lfSA6IG1hbmFnZWQge2AsXG4gICAgICAgICcgIGtleSBJRDogSW50ZWdlcjsnLFxuICAgICAgICAnICBkZXNjcjogbG9jYWxpemVkIFN0cmluZygxMTEpOycsXG4gICAgICAgICd9JyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXBpcmUgZGF0YSBkaXJlY3RvcnkgdGVtcGxhdGVzIGZvciB0aGUgU2FtcGxlQ29kZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcmV0dXJuIENvbnRlbnRzIGZvciBzYW1wbGUgZGF0YSBkaXJlY3RvcnkgZmlsZXMuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc2FtcGxlQ29kZUZpbGVEYXRhVGVtcGxhdGVzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBgdGVzdC9kYXRhLyR7dGhpcy5vcHRpb25zLm5hbWVzcGFjZX0tJHt0aGlzLm9wdGlvbnMuZW50aXR5TmFtZX0uY3N2YDtcbiAgICBjb25zdCBmaWxlUGF0aFRleHRzID0gYHRlc3QvZGF0YS8ke3RoaXMub3B0aW9ucy5uYW1lc3BhY2V9LSR7dGhpcy5vcHRpb25zLmVudGl0eU5hbWV9LnRleHRzLmNzdmA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgW2ZpbGVQYXRoXTogW1xuICAgICAgICAnSUQsY3JlYXRlZEF0LGNyZWF0ZWRCeSxtb2RpZmllZEF0LG1vZGlmaWVkQnksZGVzY3InLFxuICAgICAgICAnMSwsLCwsRGVzY3JpcHRpb24gMScsXG4gICAgICAgICcyLCwsLCxEZXNjcmlwdGlvbiAyJyxcbiAgICAgICAgJzMsLCwsLERlc2NyaXB0aW9uIDMnLFxuICAgICAgXSxcbiAgICAgIFtmaWxlUGF0aFRleHRzXTogWydsb2NhbGUsSUQsZGVzY3InXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHRlbXBsYXRlIGZpbGVzIGZvciB0aGUgcm9vdCBkaXJlY3RvcnkuXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlUm9vdFRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHBhdGggaW4gdGhpcy5zYW1wbGVDb2RlRmlsZVJvb3RUZW1wbGF0ZXMpIHtcbiAgICAgIGlmICh0aGlzLnNhbXBsZUNvZGVGaWxlUm9vdFRlbXBsYXRlc1twYXRoXSkge1xuICAgICAgICBuZXcgU2FtcGxlRmlsZSh0aGlzLnByb2plY3QsIHBhdGgsIHtcbiAgICAgICAgICBjb250ZW50czogdGhpcy5zYW1wbGVDb2RlRmlsZVJvb3RUZW1wbGF0ZXNbcGF0aF0uam9pbignXFxuJyksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSB0ZW1wbGF0ZSBmaWxlcyBmb3IgdGhlIGRiIGRpcmVjdG9yeS5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVEYlRlbXBsYXRlcygpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHBhdGggaW4gdGhpcy5zYW1wbGVDb2RlRmlsZURiVGVtcGxhdGVzKSB7XG4gICAgICBpZiAodGhpcy5zYW1wbGVDb2RlRmlsZURiVGVtcGxhdGVzW3BhdGhdKSB7XG4gICAgICAgIG5ldyBTYW1wbGVGaWxlKHRoaXMucHJvamVjdCwgcGF0aCwge1xuICAgICAgICAgIGNvbnRlbnRzOiB0aGlzLnNhbXBsZUNvZGVGaWxlRGJUZW1wbGF0ZXNbcGF0aF0uam9pbignXFxuJyksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSB0ZW1wbGF0ZSBmaWxlcyBmb3IgdGhlIGRhdGEgZGlyZWN0b3J5LlxuICAgKi9cbiAgcHVibGljIGNyZWF0ZURhdGFUZW1wbGF0ZXMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwYXRoIGluIHRoaXMuc2FtcGxlQ29kZUZpbGVEYXRhVGVtcGxhdGVzKSB7XG4gICAgICBpZiAodGhpcy5zYW1wbGVDb2RlRmlsZURhdGFUZW1wbGF0ZXNbcGF0aF0pIHtcbiAgICAgICAgbmV3IFNhbXBsZUZpbGUodGhpcy5wcm9qZWN0LCBwYXRoLCB7XG4gICAgICAgICAgY29udGVudHM6IHRoaXMuc2FtcGxlQ29kZUZpbGVEYXRhVGVtcGxhdGVzW3BhdGhdLmpvaW4oJ1xcbicpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ0BjYXAtanMvY2RzLXR5cGVyQF4wLjMyLjAnLCAnQGNhcC1qcy9jZHMtdHlwZXNAXjAuOS4wJywgJ0BzYXAvY2RzLWRrQF44LjYuMScsICdAc2FwL2Nkcy1sc3BAXjguNS4xJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbLyonQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXJAXjMuMi43JywgKi8gJ0BzYXAvY2RzQF44LjYuMScsICdAc2FwL3hzc2VjQF40LjIuOCddO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6ICdjZHMtc2VydmUgLS1wcm9kdWN0aW9uJyxcbiAgICAgICdzdGFydDpsb2NhbCc6ICdjZHMtdHMgc2VydmUnLFxuICAgICAgd2F0Y2g6ICdjZHMtdHMgd2F0Y2gnLFxuICAgICAgJ2J1aWxkOmNkcyc6ICdjZHMtdHMgYnVpbGQgLS1wcm9kdWN0aW9uJyxcbiAgICAgICdidWlsZDpjZHM6bWVzc2FnZSc6ICdlY2hvIFwiQnVpbGQgQ0RTIC4uLlwiJyxcbiAgICAgICdidWlsZDp0cyc6ICd0c2MnLFxuICAgICAgJ2J1aWxkOnRzOm1lc3NhZ2UnOiAnZWNobyBcIlRyYW5zcGlsZSBUUyA9PiBKUyAuLi5cIicsXG4gICAgICAnYnVpbGQ6c3J2OmNsZWFuOnRzJzogJ2ZpbmQgZ2VuL3Nydi9zcnYgLXR5cGUgZiAtbmFtZSBcIioudHNcIiAtZGVsZXRlJyxcbiAgICAgICdidWlsZDpzcnY6Y2xlYW46dHM6bWVzc2FnZSc6ICdlY2hvIFwiQ2xlYW4gVFMgZmlsZXMgZnJvbSBzcnYgZm9sZGVyIC4uLlwiJyxcbiAgICAgIGJ1aWxkOlxuICAgICAgICAncnVuLXMgYnVpbGQ6Y2RzOm1lc3NhZ2UgYnVpbGQ6Y2RzIGJ1aWxkOnRzOm1lc3NhZ2UgYnVpbGQ6dHMgYnVpbGQ6c3J2OmNsZWFuOnRzOm1lc3NhZ2UgYnVpbGQ6c3J2OmNsZWFuOnRzJyxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICBpbXBvcnRzOiB7XG4gICAgICAgICcjY2RzLW1vZGVscy8qJzogJy4vQGNkcy1tb2RlbHMvKi9pbmRleC5qcycsXG4gICAgICAgICcjZGlzcGF0Y2hlcic6ICcuL0BkaXNwYXRjaGVyL2luZGV4LmpzJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgQmFzZVByb2plY3QpIHtcbiAgICAgIHRoaXMucHJvamVjdC5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkRGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERlcGVuZGVuY2llcyk7XG4gICAgICB0aGlzLnByb2plY3QubnBtQ29uZmlnPy5hZGRTY3JpcHRzKHRoaXMuYWRkaXRpb25hbFNjcmlwdHMpO1xuICAgICAgdGhpcy5wcm9qZWN0Lm5wbUNvbmZpZz8uYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZVJvb3RUZW1wbGF0ZXMoKTtcbiAgICB0aGlzLmNyZWF0ZURiVGVtcGxhdGVzKCk7XG4gICAgdGhpcy5jcmVhdGVEYXRhVGVtcGxhdGVzKCk7XG4gIH1cbn1cbiJdfQ==