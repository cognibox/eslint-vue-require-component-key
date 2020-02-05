const RuleTester = require('eslint').RuleTester;
const requireComponentKey = require('../lib/index').rules['vue/require-component-key'];

const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { ecmaVersion: 2017 }
});

ruleTester.run('vue/require-component-key', requireComponentKey, {
  valid: [
    {
      code: '<template><component is="div" key="myComponent"/></template>',
    },
    {
      code: '<template><component is="div" :key="myComponent"/></template>',
    },
    {
      code: '<template><component is="div" v-bind:key="myComponent"/></template>',
    },
    {
      code: '<template><component :is="div" key="myComponent"/></template>',
    },
    {
      code: '<template><component :is="div" :key="myComponent"/></template>',
    },
    {
      code: '<template><component :is="div" v-bind:key="myComponent"/></template>',
    },
    {
      code: '<template><component v-bind:is="div" key="myComponent"/></template>',
    },
    {
      code: '<template><component v-bind:is="div" :key="myComponent"/></template>',
    },
    {
      code: '<template><component v-bind:is="div" v-bind:key="myComponent"/></template>',
    },

    {
      code: '<template><component is="div" key="myComponent"></component></template>',
    },
    {
      code: '<template><component is="div" :key="myComponent"></component></template>',
    },
    {
      code: '<template><component is="div" v-bind:key="myComponent"></component></template>',
    },
    {
      code: '<template><component :is="div" key="myComponent"></component></template>',
    },
    {
      code: '<template><component :is="div" :key="myComponent"></component></template>',
    },
    {
      code: '<template><component :is="div" v-bind:key="myComponent"></component></template>',
    },
    {
      code: '<template><component v-bind:is="div" key="myComponent"></component></template>',
    },
    {
      code: '<template><component v-bind:is="div" :key="myComponent"></component></template>',
    },
    {
      code: '<template><component v-bind:is="div" v-bind:key="myComponent"></component></template>',
    },
  ],
  invalid: [
    {
      code: '<template><component v-bind:is="div"/></template>',
      errors: [{ message: 'Dynamic component elements expected to have a "v-bind:key" directive.' }],
    },
    {
      code: '<template><component :is="div"/></template>',
      errors: [{ message: 'Dynamic component elements expected to have a "v-bind:key" directive.' }],
    },
    {
      code: '<template><component is="div"/></template>',
      errors: [{ message: 'Dynamic component elements expected to have a "v-bind:key" directive.' }],
    },
    {
      code: '<template><component v-bind:is="div"></component></template>',
      errors: [{ message: 'Dynamic component elements expected to have a "v-bind:key" directive.' }],
    },
    {
      code: '<template><component :is="div"></component></template>',
      errors: [{ message: 'Dynamic component elements expected to have a "v-bind:key" directive.' }],
    },
    {
      code: '<template><component is="div"></component></template>',
      errors: [{ message: 'Dynamic component elements expected to have a "v-bind:key" directive.' }],
    },
  ],
});
