import js from '@eslint/js';
import astroPlugin from 'eslint-plugin-astro';

export default [js.configs.recommended, ...astroPlugin.configs['flat/recommended']];
