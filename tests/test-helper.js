import Application from 'ember-cli-styles-embroider-demo/app';
import config from 'ember-cli-styles-embroider-demo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
