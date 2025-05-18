import { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';

export class HelloWorldNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Hello World',
    name: 'helloWorldNode',
    group: ['transform'],
    version: 1,
    description: 'Returns Hello, {name}',
    defaults: {
      name: 'Hello World',
    },
    inputs: ['main'] as any,
    outputs: ['main'] as any,
    properties: [
      {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        default: 'World',
        required: true,
      },
    ],
  };

  async execute(this: IExecuteFunctions) {
    const name = this.getNodeParameter('name', 0) as string;

    return [
      this.helpers.returnJsonArray([
        {
          greeting: `Hello, ${name}!`,
        },
      ]),
    ];
  }
}
