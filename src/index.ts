import { HelloWorldNode } from './helloworld.node';

// Fake `this` context for testing
const fakeContext: any = {
  getNodeParameter: (name: string) => {
    if (name === 'name') return 'Laurent';
  },
  helpers: {
    returnJsonArray: (arr: any[]) => arr,
  },
};

(async () => {
  const node = new HelloWorldNode();
  const result = await node.execute.call(fakeContext);
  console.log('Node execution result:', result);
})();
